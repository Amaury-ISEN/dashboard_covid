Highcharts.chart('container1', {
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



Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/us-population-density.json', function (data) {

  // Make codes uppercase to match the map data
  data.forEach(function (p) {
    p.code = p.code.toUpperCase();
  });

  // Instantiate the map
  Highcharts.mapChart('container2', {

    chart: {
      map: 'countries/fr/fr-all',
      borderWidth: 1
    },

    title: {
      text: 'US population density (/km²)'
    },

    exporting: {
      sourceWidth: 600,
      sourceHeight: 500
    },

    legend: {
      layout: 'horizontal',
      borderWidth: 0,
      backgroundColor: 'rgba(255,255,255,0.85)',
      floating: true,
      verticalAlign: 'top',
      y: 25
    },

    mapNavigation: {
      enabled: true
    },

    colorAxis: {
      min: 1,
      type: 'logarithmic',
      minColor: '#EEEEFF',
      maxColor: '#000022',
      stops: [
        [0, '#EFEFFF'],
        [0.67, '#4444FF'],
        [1, '#000022']
      ]
    },

    series: [{
      animation: {
        duration: 1000
      },
      data: data,
      joinBy: ['postal-code', 'code'],
      dataLabels: {
        enabled: true,
        color: '#FFFFFF',
        format: '{point.code}'
      },
      name: 'Population density',
      tooltip: {
        pointFormat: '{point.code}: {point.value}/km²'
      }
    }]
  });
});
