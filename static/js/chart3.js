Highcharts.chart('chart3', {

  title: {
    text: 'Evolution du nombre de décès total'
  },

  subtitle: {
    text: 'Source: <a href="https://www.insee.fr/fr/statistiques?debut=0&theme=0">insee.fr</a>'
  },

  yAxis: {
    title: {
      text: 'Décès',
      type: 'int'
    }
  },

  xAxis: {
    type: 'datetime',
  },

    plotOptions: {
        series: {
            pointStart: Date.UTC(2020, 18, 03),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  series: [{
    name: 'Décès',
    data: donnees[4]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});