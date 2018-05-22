
$(function() {
  $(document).ready(function() {
    function certainTime() {
      var d = new Date();
      var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      var t = d.getHours();

      var n = weekday[d.getDay()];

      if(n== "friday" && t == 10 || n=="saturday" && t == 10){
       // Rezeptur A
      }

      if(n== "monday" && t == 10 || n== "tuesday" && t == 10 || n== "sunday" && t == 10){
       // Rezeptur B
      }

      if(n== "thursday" && t == 10 || n== "wednesday" && t == 10){
       // Rezeptur C
      }
    }

    var chart;

    var color = '#7c9cbb';

    $(function() {
      $(document).ready(function() {
        Highcharts.setOptions({
          global: {
            useUTC: false
          },
          colors: ['#7c99bb']
        });

        $('#sp500-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Throughput Range <span style="color: #809ac0;">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (5000 - 5000) + 5000
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },
          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            textAlign: 'right',
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 6300,
              linearGradient: [0, 0, 0, 350],
              //color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (5000 - 5000) + 5000
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#ssd-04').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Torque <span style="color: #809ac0;">Nm/cm<sup>³</sup></span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (40 - 40) + 40
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (40 - 40) + 40
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#ssd-graph-03').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Temperature <strong>°C</strong>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (421 - 421) + 421
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (260 - 260) + 260
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#ssd-graph-02').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Energy consumption <strong>kW/h</strong>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (260 - 260) + 260
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (421 - 421) + 421
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#ssd-graph-01').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Temperature <span style="color: #809ac0;">C°</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (45 - 45) + 45
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            min: 0,
            max: 100,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 60,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (45 - 45) + 45
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#zs_eg-graph-04').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Torque <strong>Nm/cm<sup>³</sup></strong>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (40 - 40) + 40
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: 20,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (40 - 40) + 40
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#zs_eg-graph-03').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Temperature <span style="color: #809ac0;">C</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (421 - 421) + 421
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (260 - 260) + 260
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#zs_eg-graph-02').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Energy consumption <strong>kW/h</strong>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (260 - 260) + 260
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (421 - 421) + 421
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#zs_eg-graph-01').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Screw Speed <span style="color: #809ac0;">min</strong><span style="font-size: 8px; baseline-shift: 5px; color: #809ac0;">-1</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (350 - 350) + 350
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
            lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            min: 0,
            max: 500,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: ''
            }],
            plotBands: [{
              from: 0,
              to: 400,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (350 - 350) + 350
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#zsb-graph-04').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Torque <strong>Nm/cm<sup>³</sup></strong>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (40 - 40) + 40
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (40 - 40) + 40
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#zsb-graph-03').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Temperature <span style="color: #809ac0;">°C</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (421 - 421) + 421
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (260 - 260) + 260
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#zsb-graph-02').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Energy consumption <strong>kW/h</strong>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (260 - 260) + 260
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (421 - 421) + 421
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#zsb-graph-01').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Screw Speed <span style="color: #809ac0;">min</strong><span style="font-size: 8px; baseline-shift: 5px; color: #809ac0;">-1</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (350 - 350) + 350
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
            lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            min: 0,
            max: 500,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 400,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (350 - 350) + 350
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#zsk-graph-04').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Torque <strong>Nm/cm<sup>³</sup></strong>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (40 - 40) + 40
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (40 - 40) + 40
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#zsk-graph-03').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Temperature <strong>°C</strong>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (260 - 260) + 260
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
        xAxis: {
          type: 'datetime',
          tickPixelInterval: 150,
          floating: true,
          opposite: true,
          offset: -18,
          gridLineWidth: 0,
          minorGridLineWidth: 0,
          minPadding: 0,
          maxPadding: 0,
lineWidth: 0,
          labels: {
            align: 'left',
            x: 0,
              style: {
                fontWeight: 'bold',
                fontFamily: 'Gotham',
                fontColor: '#c3c3c3',
              },
          },

        },

        yAxis: {
          gridLineWidth: 0,
          minorGridLineWidth: 0,
          minorTickInterval: 400,
          offset: -50,
          opposite: true,
          tickLength: 0,
          labels: {
            align: 'right',
            x: 42,
              style: {
                fontWeight: 'light',
                fontFamily: 'Gotham',
                fontColor: '#c3c3c3',
              },
          },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 260,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (260 - 260) + 260
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#zsk-graph-02').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Gear oil quality <span style="color: #809ac0;">%</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (90 - 90) + 90
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            opposite: true,
            offset: -18,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },

          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 100,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (90 - 90) + 90
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#zsk-graph-01').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Vibration <span style="color: #809ac0;">mm/s</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (1.8 - 1.9) + 1.9
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
            lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (1.8 - 1.9) + 1.9
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#zvb-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'ZVB <span style="color: #809ac0;">rpm</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (19 - 20) + 20
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
            lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -40,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 32
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 19,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (19 - 20) + 20
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#dosierer-5-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'K-ML-KV3-F <span style="color: #809ac0;">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (0 - 0) + 0
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -40,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (0 - 0) + 0
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#dosierer-4-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'K-ML-T60 <span style="color: #809ac0;">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (1298 - 1300) + 1300
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -40,
            opposite: true,
            tickLength: 0,

            labels: {
              align: 'right',
              x: 32,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (1298 - 1300) + 1300
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#dosierer-3-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'K-ML-D5-KT20 <span style="color: #809ac0;">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (76 - 78) + 78
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -40,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 32,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (76 - 78) + 78
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#dosierer-2-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'K-ML-D5-S60 <span style="color: #809ac0;">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (1220 - 1224) + 1224
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -40,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 32,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (1220 - 1224) + 1224
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#dosierer-1-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'K-ML-D5-BSP-135 <span style="color: #809ac0;">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (0 - 0) + 0
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (0 - 0) + 0
                    ]);
                }
                return data;
            }())
          }]
        });



        $('#ati-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'ATI <strong>on</strong>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (1 - 1) + 1
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 1,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (1 - 1) + 1
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#foerderdruck-3-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Conveying pressure <span style="color: #809ac0;">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (495 - 505) + 505
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 500,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (495 - 505) + 505
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#foerderdruck-1-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Conveying pressure <span style="color: #809ac0;">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (299 - 301) + 301
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 300,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (299 - 301) + 301
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#filter-1-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Filter <span style="color: #809ac0;">mBar</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (8 - 12) + 12
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },

          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 10,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (8 - 12) + 12
                    ]);
                }
                return data;
            }())
          }]
        });



        $('#bxc-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'BXC <span style="color: #809ac0;">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (76 - 78) + 78
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -40,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 32,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (76 - 78) + 78
                    ]);
                }
                return data;
            }())
          }]
        });


/*
        $('#zxd-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'ZXD rpm',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (20 - 25) + 25
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -40,
            opposite: true,
            tickLength: 0,
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 22,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (20 - 25) + 25
                    ]);
                }
                return data;
            }())
          }]
        });
*/

        $('#zrd-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'ZRD <strong>rpm</strong>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (0 - 0) + 0
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -40,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 32,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (0 - 0) + 0
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#screener-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Vibrating Screen Type VS <span style="color: #809ac0;">mm/s</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (76 - 78) + 78
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            gridLineColor: '#C0C0C0',
            gridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -40,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 32,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',

                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 0,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (76 - 78) + 78
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#foerderdruck-2-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Conveying pressure <span style="color: #809ac0;">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 100,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (299 - 301) + 301
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minorTickInterval: 400,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 300,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (299 - 301) + 301
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#sensoring-full-durchsatz').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Throughput <span style="color: #809ac0;">kg/h</strong>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (2590 - 2600) + 2600
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },
          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 2600,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (2590 - 2600) + 2600
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#sensoring-full-energieverbrauch').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Energy consumption <span style="color: #809ac0;">kW/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (702 - 702) + 702
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            textAlign: 'right',
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 702,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (702 - 702) + 702
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#sensoring-full-drehmoment').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Torque <span style="color: #809ac0;">Nm/cm<sup>³</sup></span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
              }],
              lineWidth: 0
            }
          },
          chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                [0, 'rgb(245, 245, 245)'],
                [1, 'rgb(245, 245, 245)']
              ]
            },
            marginLeft: 0,
            marginRight: 0,
            marginBottom: -5,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (40 - 40) + 40
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -35,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
lineWidth: 0,
            labels: {
              align: 'left',
              x: 0,
                style: {
                  fontWeight: 'bold',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
            labels: {
              align: 'right',
              x: 42,
                style: {
                  fontWeight: 'light',
                  fontFamily: 'Gotham',
                  fontColor: '#c3c3c3',
                },
            },
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 0,
              color: '#808080'
            }],
            plotBands: [{
              from: 0,
              to: 40,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
              zIndex: 5
            }]
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Durchsatz',
            data: (function() {
              var data = [],
                time = (new Date()).getTime(),
                i;

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (40 - 40) + 40
                    ]);
                }
                return data;
            }())
          }]
        });


      });
    });


    Highcharts.setOptions({
      global: {
        useUTC: false
      },
      colors: ['#81a0c3']
    });

    var blue = '#81a0c3';

    // $('#').highcharts({

    //   title: {
    //     text: 'Throughput <strong>kg/h</strong>',
    //     align: 'left',
    //     floating: true,
    //       style: {
    //         color: '#424242',
    //         fontWeight: 'light',
    //         fontSize: '13px',
    //         fontFamily: 'Gotham',
    //         spanColor: '#fff'
    //       }
    //   },

    //   tooltip: {
    //     shared: false
    //   },

    //   credits: {
    //     enabled: false
    //   },

    //   plotOptions: {
    //     areaspline: {
    //       fillOpacity: 0.8,
    //         series: {
    //           pointPadding: 0,
    //           groupPadding: 0,
    //       }
    //     },
    //     series: {
    //       marker: {
    //         enabled: false
    //       },
    //       zones: [{
    //         value: 0.5,
    //         color: '#7c9cbb'
    //       }, {
    //         color: '#688cae'
    //       }],
    //       lineWidth: 0
    //     }
    //   },

    //   chart: {
    //     type: 'area',
    //     backgroundColor: {
    //       linearGradient: [0, 0, 0, 350],
    //       stops: [
    //         [0, 'rgb(245, 245, 245)'],
    //         [1, 'rgb(245, 245, 245)']
    //       ]
    //     },

    //     marginRight: -10,
    //     marginLeft: -10,
    //     events: {
    //         load: function () {

    //             // set up the updating of the chart each second
    //             var series = this.series[0];
    //             setInterval(function () {
    //                 var x = (new Date()).getTime(), // current time
    //                     y = Math.floor(Math.random() * 1) + 2600;
    //                 series.addPoint([x, y], true, true);
    //             }, 10000);
    //         }
    //     }
    //   },
    //   xAxis: {
    //     type: 'datetime',
    //     tickPixelInterval: 350,
    //     floating: true,
    //     labels: {
    //         align: 'left',
    //         x: 0,
    //         y: -10,
    //         style: {
    //           color: '#fff',
    //           font: 'Gotham',
    //           position: 'absolute'
    //         },
    //     },

    //   },
    //   yAxis: {
    //     title: {
    //       text: ''
    //     },
    //     plotLines: [{
    //       value: 0,
    //       width: 0,
    //       color: '#808080'
    //     }],
    //     plotBands: [{
    //       from: 0,
    //       to: 4454284800,
    //       color: 'rgba(90,120,149,0.6)',
    //       zIndex: 5
    //     }]
    //   },
    //   tooltip: {
    //     enabled: false

    //   },
    //   legend: {
    //     enabled: false
    //   },
    //   exporting: {
    //     enabled: false
    //   },
    //   series: [{

    //     type: 'spline',

    //     name: 'Durchsatz',
    //     data: (function () {
    //       // generate an array of random data
    //       var data = [],
    //           time = (new Date()).getTime(),
    //           i;

    //       for (i = -999; i <= 0; i += 1) {
    //           data.push([
    //               time + i * 3000,
    //               Math.floor(Math.random() * 1) + 2600
    //           ]);
    //       }
    //       return data;
    //     }())
    //   }]
    // });

    // $('#').highcharts({

    //   title: {
    //     text: 'Energy consumption <strong>kW/h</strong>',
    //     align: 'left',
    //     zIndex: 100,
    //     floating: true,
    //       style: {
    //         color: '#424242',
    //         fontWeight: 'light',
    //         fontSize: '13px',
    //         fontFamily: 'Gotham',
    //         spanColor: '#fff',
    //       }
    //   },

    //   tooltip: {
    //     shared: false
    //   },

    //   credits: {
    //     enabled: false
    //   },

    //   plotOptions: {
    //     areaspline: {
    //       fillOpacity: 0.8,
    //     },
    //     series: {
    //       marker: {
    //         enabled: false
    //       },
    //       zones: [{
    //         value: 0.2,
    //         color: '#7c9cbb'
    //       }, {
    //         color: '#688cae'
    //       }],
    //       lineWidth: 0
    //     }
    //   },

    //   chart: {
    //     type: 'area',
    //     backgroundColor: {
    //       linearGradient: [0, 0, 0, 350],
    //       stops: [
    //         [0, 'rgb(245, 245, 245)'],
    //         [1, 'rgb(245, 245, 245)']
    //       ]
    //     },

    //     marginRight: -10,
    //     marginLeft: -10,
    //     events: {
    //         load: function () {

    //             // set up the updating of the chart each second
    //             var series = this.series[0];
    //             setInterval(function () {
    //                 var x = (new Date()).getTime(), // current time
    //                     y = Math.floor(Math.random() * 1) + 702;
    //                 series.addPoint([x, y], true, true);
    //             }, 10000);
    //         }
    //     }
    //   },
    //   xAxis: {
    //     type: 'datetime',
    //     tickPixelInterval: 350,
    //     floating: true,
    //     labels: {
    //         align: 'left',
    //         x: 0,
    //         y: -10,
    //         style: {
    //           color: '#fff',
    //           font: 'Gotham',
    //           position: 'absolute'
    //         },
    //     },

    //   },
    //   yAxis: {
    //     title: {
    //       text: ''
    //     },
    //     plotLines: [{
    //       value: 0,
    //       width: 0,
    //       color: '#808080'
    //     }],
    //     plotBands: [{
    //       from: 0,
    //       to: 700,
    //       color: 'rgba(0,0,0,0.1)',
    //       zIndex: 5
    //     }]
    //   },
    //   tooltip: {
    //     enabled: false

    //   },
    //   legend: {
    //     enabled: false
    //   },
    //   exporting: {
    //     enabled: false
    //   },
    //   series: [{

    //     name: 'Energieverbrauch',
    //     data: (function () {
    //       // generate an array of random data
    //       var data = [],
    //           time = (new Date()).getTime(),
    //           i;

    //       for (i = -999; i <= 0; i += 1) {
    //           data.push([
    //               time + i * 3000,
    //               Math.floor(Math.random() * 1) + 702
    //           ]);
    //       }
    //       return data;
    //     }())
    //   }]
    // });

    // $('').highcharts({

    //   title: {
    //     text: 'Torque <strong>Nm/cm<sup>3</sup></strong>',
    //     align: 'left',
    //     floating: true,
    //       style: {
    //         color: '#424242',
    //         fontWeight: 'light',
    //         fontSize: '13px',
    //         fontFamily: 'Gotham',
    //         spanColor: '#fff'
    //       }
    //   },

    //   tooltip: {
    //     shared: false
    //   },

    //   credits: {
    //     enabled: false
    //   },

    //   plotOptions: {
    //     areaspline: {
    //       fillOpacity: 0.8,
    //     },
    //     series: {
    //       marker: {
    //         enabled: false
    //       },
    //       zones: [{
    //         value: 0.5,
    //         color: '#7c9cbb'
    //       }, {
    //         color: '#688cae'
    //       }],
    //       lineWidth: 0
    //     }
    //   },

    //   chart: {
    //     type: 'area',
    //     backgroundColor: {
    //       linearGradient: [0, 0, 0, 350],
    //       stops: [
    //         [0, 'rgb(245, 245, 245)'],
    //         [1, 'rgb(245, 245, 245)']
    //       ]
    //     },

    //     marginRight: -10,
    //     marginLeft: -10,
    //     events: {
    //         load: function () {

    //             // set up the updating of the chart each second
    //             var series = this.series[0];
    //             setInterval(function () {
    //                 var x = (new Date()).getTime(), // current time
    //                     y = Math.floor(Math.random() * 0) + 40;
    //                 series.addPoint([x, y], true, true);
    //             }, 10000);
    //         }
    //     }
    //   },
    //   xAxis: {
    //     type: 'datetime',
    //     tickPixelInterval: 350,
    //     floating: true,
    //     labels: {
    //         align: 'left',
    //         x: 0,
    //         y: -10,
    //         style: {
    //           color: '#fff',
    //           font: 'Gotham',
    //           position: 'absolute'
    //         },
    //     },

    //   },
    //   yAxis: {
    //     title: {
    //       text: ''
    //     },
    //     plotLines: [{
    //       value: 0,
    //       width: 0,
    //       color: '#808080'
    //     }],
    //     plotBands: [{
    //       from: 0,
    //       to: 4454284800,
    //       color: 'rgba(90,120,149,0.6)',
    //       zIndex: 5
    //     }]
    //   },
    //   tooltip: {
    //     enabled: false

    //   },
    //   legend: {
    //     enabled: false
    //   },
    //   exporting: {
    //     enabled: false
    //   },
    //   series: [{

    //     name: 'Drehmoment',
    //     data: (function () {
    //       // generate an array of random data
    //       var data = [],
    //           time = (new Date()).getTime(),
    //           i;

    //       for (i = -999; i <= 0; i += 1) {
    //           data.push([
    //               time + i * 3000,
    //               Math.floor(Math.random() * 0) + 40
    //           ]);
    //       }
    //       return data;
    //     }())
    //   }]
    // });


    // $('').highcharts({

    //   title: {
    //     text: 'Förderdruck',
    //     align: 'left',
    //     floating: true,
    //       style: {
    //         color: '#424242',
    //         fontWeight: 'light',
    //         fontSize: '13px',
    //         fontFamily: 'Gotham',
    //         spanColor: '#fff'
    //       }
    //   },

    //   tooltip: {
    //     shared: false
    //   },

    //   credits: {
    //     enabled: false
    //   },

    //   plotOptions: {
    //     areaspline: {
    //       fillOpacity: 0.8,
    //     },
    //     series: {
    //       marker: {
    //         enabled: false
    //       },
    //       zones: [{
    //         value: 0.5,
    //         color: '#7c9cbb'
    //       }, {
    //         color: '#688cae'
    //       }],
    //       lineWidth: 0
    //     }
    //   },

    //   chart: {
    //     type: 'area',
    //     backgroundColor: {
    //       linearGradient: [0, 0, 0, 350],
    //       stops: [
    //         [0, 'rgb(245, 245, 245)'],
    //         [1, 'rgb(245, 245, 245)']
    //       ]
    //     },
    //     marginLeft: -10,
    //     events: {
    //         load: function () {

    //             // set up the updating of the chart each second
    //             var series = this.series[0];
    //             setInterval(function () {
    //                 var x = (new Date()).getTime(), // current time
    //                     y = Math.random() * (320 - 280) + 280
    //                 series.addPoint([x, y], true, true);
    //             }, 10000);
    //         }
    //     }
    //   },
    //   xAxis: {
    //     type: 'datetime',
    //     tickPixelInterval: 350,
    //     floating: true,
    //     labels: {
    //         align: 'left',
    //         x: 0,
    //         y: -10,
    //         style: {
    //           color: '#fff',
    //           font: 'Gotham',
    //           position: 'absolute'
    //         },
    //     },

    //   },
    //   yAxis: {
    //     title: {
    //       text: 'ewewr'
    //     },
    //     plotLines: [{
    //       value: 0,
    //       width: 0,
    //       color: '#808080'
    //     }],
    //     plotBands: [{
    //       from: 0,
    //       to: 300,
    //       color: 'rgba(90,120,149,0.6)',
    //       zIndex: 5
    //     }]
    //   },
    //   tooltip: {
    //     enabled: false

    //   },
    //   legend: {
    //     enabled: false
    //   },
    //   exporting: {
    //     enabled: false
    //   },
    //   series: [{

    //     name: 'Drehmoment',
    //     data: (function () {
    //       // generate an array of random data
    //       var data = [],
    //           time = (new Date()).getTime(),
    //           i;

    //       for (i = -999; i <= 0; i += 5) {
    //           data.push([
    //               time + i * 3000,
    //               Math.random() * (320 - 280) + 280
    //           ]);
    //       }
    //       return data;
    //     }())
    //   }]
    // });

  });
});
