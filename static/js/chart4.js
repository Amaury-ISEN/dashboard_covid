Highcharts.chart('chart4', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Total décès rea,retour à domicile,hospitalisation /départements'
    },
    xAxis: {
      categories: donnees[0]
      
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Pourcentage'
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'percent'
      }
    },
    series: [{
      name: 'Décès',
      data: donnees[1]
    }, {
      name: 'Réanimation',
      data: donnees[2]
    }, {
      name: 'Retour à dommicile',
      data: donnees[3]
    }]
  });