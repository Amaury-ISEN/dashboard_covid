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


donnees.append(total)
donnees.append(hommes)
donnees.append(femmes)

print(donnees)
@app.route("/data", methods=["GET"])
def data():
    return render_template("data.html", donnees = donnees)