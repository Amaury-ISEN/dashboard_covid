// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.

var data = [['fr-ara-ai', 421],
        ['fr-hdf-as', 615],
        ['fr-ara-al', 384],
        ['fr-pac-ap', 131],
        ['fr-pac-ha', 164],
        ['fr-pac-am', 744],
        ['fr-ara-ah', 340],
        ['fr-ges-an', 249],
        ['fr-occ-ag', 39],
        ['fr-ges-ab', 275],
        ['fr-occ-ad', 163],
        ['fr-occ-av', 130],
        ['fr-pac-bd', 2015],
        ['fr-nor-cv', 303],
        ['fr-ara-cl', 70],
        ['fr-naq-ct', 69],
        ['fr-naq-cm', 128],
        ['fr-cvl-ch', 346],
        ['fr-naq-cz', 100],
        ['fr-bfc-co', 642],
        ['fr-bre-ca', 114],
        ['fr-naq-cr', 54],
        ['fr-naq-dd', 63],
        ['fr-bfc-db', 351],
        ['fr-ara-dm', 470],
        ['fr-nor-eu', 273],
        ['fr-cvl-el', 291],
        ['fr-bre-fi', 153],
        ['fr-cor-cs', 78],
        ['fr-cor-hc', 43],
        ['fr-occ-ga', 361],
        ['fr-occ-hg', 422],
        ['fr-occ-ge', 66],
        ['fr-naq-gi', 578],
        ['fr-occ-he', 531],
        ['fr-bre-iv', 336],
        ['fr-cvl-in', 162],
        ['fr-cvl-il', 263],
        ['fr-ara-is', 1110],
        ['fr-bfc-ju', 314],
        ['fr-naq-ld', 141],
        ['fr-cvl-lc', 188],
        ['fr-ara-lr', 905],
        ['fr-ara-hl', 171],
        ['fr-pdl-la', 470],
        ['fr-cvl-lt', 289],
        ['fr-occ-lo', 54],
        ['fr-naq-lg', 98],
        ['fr-occ-lz', 73],
        ['fr-pdl-ml', 444],
        ['fr-nor-mh', 156],
        ['fr-ges-mr', 560],
        ['fr-ges-hm', 230],
        ['fr-pdl-my', 185],
        ['fr-ges-mm', 779],
        ['fr-ges-ms', 255],
        ['fr-bre-mb', 233],
        ['fr-ges-mo', 1536],
        ['fr-bfc-ni', 148],
        ['fr-hdf-no', 2138],
        ['fr-hdf-oi', 727],
        ['fr-nor-or', 209],
        ['fr-hdf-pc', 1017],
        ['fr-ara-pd', 435],
        ['fr-naq-pa', 340],
        ['fr-occ-hp', 148],
        ["'fr-occ-po", 142],
        ['fr-ges-br', 1161],
        ['fr-ges-hr', 1141],
        ['fr-ara-rh', 2081],
        ['fr-bfc-hn', 166],
        ['fr-bfc-sl', 726],
        ['fr-pdl-st', 337],
        ['fr-ara-sv', 525],
        ['fr-ara-hs', 701],
        ['fr-idf-vp', 2826],
        ['fr-nor-sm', 809],
        ['fr-idf-se', 1273],
        ['fr-idf-yv', 1177],
        ['fr-naq-ds', 146],
        ['fr-hdf-so', 507],
        ['fr-occ-ta', 192],
        ['fr-occ-tg', 100],
        ['fr-pac-vr', 602],
        ['fr-pac-vc', 519],
        ['fr-pdl-vd', 144],
        ['fr-naq-vn', 148],
        ['fr-naq-hv', 199],
        ['fr-ges-vg', 591],
        ['fr-bfc-yo', 312],
        ['fr-bfc-tb', 457],
        ['fr-idf-es', 1128],
        ['fr-idf-hd', 1715],
        ['fr-idf-ss', 1595],
        ['fr-idf-vm', 1957],
        ['fr-idf-vo', 1276],
        ['fr-gua-gp', 169],
        ['fr-mq-mq', 44],
        ['fr-gf-gf', 72],
        ['fr-lre-re', 54],
        ['fr-may-yt', 44]]

// Create the chart
Highcharts.mapChart('chart2', {
    chart: {
        map: 'countries/fr/custom/fr-all-all-mainland'
        
    },

    title: {
        text: 'Carte de France des décès COVID'
    },

    subtitle: {
        text: 'Source: <a href="https://www.insee.fr/fr/statistiques?debut=0&theme=0">insee.fr</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
    },

    series: [{
        //data: donnees[3],
        data : data,
        name: 'Random data',
        // joinBy : null permet un mappage facile de la data aux codes
        // de départements simplement via les indexes de la liste data :
        //joinBy: null,
        joinBy:"hc-key",
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
