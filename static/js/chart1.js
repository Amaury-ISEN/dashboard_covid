Highcharts.chart('chart1', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Retour au domicile et décès du 18/03/2020 au 21/01/2021'
  },
  subtitle: {
    text: 'Source: <a href="https://www.insee.fr/fr/statistiques?debut=0&theme=0">insee.fr</a>'
  },
  xAxis: {
    categories: ['Retour au domicile', 'Décès'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Population',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' personnes'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -20,
    y: 150,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Hommes',
    data: donnees[1]
  }, {
    name: 'Femmes',
    data: donnees[2]
  }, {
    name: 'Total',
    data: donnees[0]
  }]
});