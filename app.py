from flask import Flask, render_template
from flask import json

import pandas as pd

from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from matplotlib.figure import Figure

app = Flask(__name__)

df = pd.read_csv("./data/donnees-hospitalieres-covid19-2021-01-21-19h03.csv", dtype={"dep": str, "sexe": int, "hosp":int, "rea":int, "rad":int, "dc":int}, sep=";")

df = df.rename(columns={"dep":"département",
                        "hosp":"hospitalisation",
                        "rea":"réanimation",
                        "rad":"retour au domicile",
                        "dc":"décès"
})

print(df)

# On retire tous les NaN :
df = df.dropna()
group_jour = df.groupby("jour")

# Prendre les totaux de décès et de retours à domicile par sexe (homme, femme & total) :
donnees = []

hommes = []
hommes.append(group_jour.apply(lambda x:x[x["sexe"]==1]["retour au domicile"].sum()).tail(1).values[0])
hommes.append(group_jour.apply(lambda x:x[x["sexe"]==1]["décès"].sum()).tail(1).values[0])

femmes = []
femmes.append(group_jour.apply(lambda x:x[x["sexe"]==2]["retour au domicile"].sum()).tail(1).values[0])
femmes.append(group_jour.apply(lambda x:x[x["sexe"]==2]["décès"].sum()).tail(1).values[0])

total = []
total.append(group_jour.apply(lambda x:x[x["sexe"]==0]["retour au domicile"].sum()).tail(1).values[0])
total.append(group_jour.apply(lambda x:x[x["sexe"]==0]["décès"].sum()).tail(1).values[0])

# Prendre le nombre de décès maximum sur un aggrégat par le département.
# Dit autrement : récupérer le nombre de décès total par département à la fin de la période considérée.
group_dpt = df.groupby("département")
dc_dpt = []
dc_dpt.append(group_dpt.apply(lambda x:x[x["sexe"]==0]["décès"].max()).values)
dc_dpt = dc_dpt[0]
dc_dpt = list(dc_dpt)

# Groupage par jours pour prendre l'évolution des décès au fil des jours :
group_jrs = df.groupby("jour")
group_jrs = group_jrs.apply(lambda x:x[x["sexe"]==0]["décès"].sum())
group_jrs = group_jrs.reset_index()
liste_deces = group_jrs[0].to_list()
liste_deces2 =[]
# Décès du jour précédent, initialisés à 0 pour le premier jour :
prec_dc = 0
for i in liste_deces:
    # On ajoute le nombre de décès du jour considéré moins celui du jour précédant (pour contrer l'effet cumulatif)
    liste_deces2.append(i-prec_dc)
    # Le nb de décès du jour précédent est chargé pour le prochain tour de boucle
    prec_dc = i
liste_deces2

# Chart diagramme barres :
donnees.append(total)
donnees.append(hommes)
donnees.append(femmes)
# Chart carte France :
donnees.append(dc_dpt)
# Chart évolution des décès :
donnees.append(liste_deces2)


@app.route("/data")
def data():
    return render_template("data.html", donnees = donnees)