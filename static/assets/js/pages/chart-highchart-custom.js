'use strict';

// [ besic-bar-chart ] start
setTimeout(function () {
    Highcharts.chart('chart-highchart-bar1', {
        chart: {
            type: 'column'
        },
        colors: ['#1de9b6', '#602bb6', '#A389D4', '#899FD4'],
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });
    // [  besic-bar-chart ] end

    // [ line-basic-chart ] Start
    Highcharts.chart('chart-highchart-line1', {
        chart: {
            type: 'spline',
        },
        colors: ['#1de9b6', '#602bb6', '#A389D4'],
        title: {
            text: 'Solar Employment Growth by Sector, 2010-2017'
        },
        subtitle: {
            text: 'Source: thesolarfoundation.com'
        },
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
        series: [{
            name: 'Installation',
            data: [5, 25, 15, 35, 25, 35, 45, 75]
        }, {
            name: 'Manufacturing',
            data: [25, 35, 45, 75, 5, 25, 15, 35, ]
        }, {
            name: 'Sales & Distribution',
            data: [45, 75, 25, 5, 15, 55, 5, 25]
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
    // [ line-basic-chart ] end

    // [ area-zoom-chart ] Start
    Highcharts.getJSON(
        'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json',
        function (data) {
            Highcharts.chart('chart-highchart-area2', {
                chart: {
                    zoomType: 'x',
                },
                title: {
                    text: 'USD to EUR exchange rate over time'
                },
                subtitle: {
                    text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Exchange rate'
                    }
                },
                legend: {
                    enabled: true
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#602bb6'],
                                [1, '#1de9b6']
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 2,
                        lineColor: '#7267EF',
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'area',
                    name: 'USD to EUR',
                    data: data
                }]
            });
        }
    );
    // [ area-zoom-chart ] end

    // [ besic-pie-chart ] Start
    Highcharts.chart('chart-highchart-pie1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        colors: ['#1de9b6', '#602bb6', '#A389D4', '#899FD4', '#f44236', '#f4c22b'],
        title: {
            text: 'Browser market shares in January, 2018'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Other',
                y: 7.05
            }]
        }]
    });
    // [ basic-pie-chart ] end

    // [ Donut-pie-chart ] start
    Highcharts.chart('chart-highchart-pie2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        colors: ['#1de9b6', '#602bb6', '#A389D4', '#899FD4', '#f44236', '#f4c22b'],
        title: {
            text: 'Browser market shares in January, 2018'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            size: '90%',
            innerSize: '60%',
            data: [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Other',
                y: 7.05
            }]
        }]
    });
    // [ Donut-pie-chart ] end

    // [ 3D-pie-chart ] Start
    Highcharts.chart('chart-highchart-pie-3d1', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        colors: ['#1de9b6', '#602bb6', '#A389D4', '#899FD4', '#f44236', '#f4c22b'],
        title: {
            text: 'Contents of Highsoft weekly fruit delivery'
        },
        subtitle: {
            text: '3D donut in Highcharts'
        },
        plotOptions: {
            pie: {
                depth: 45
            }
        },
        series: [{
            name: 'Delivered amount',
            data: [
                ['Bananas', 8],
                ['Kiwi', 3],
                ['Mixed nuts', 2],
                ['Oranges', 6],
                ['Apples', 3],
                ['Pears', 4],
            ]
        }]
    });
    // [ 3D-pie-chart ] end

    // [ Donut 3D-pie-chart ] Start
    Highcharts.chart('chart-highchart-pie-3d2', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        colors: ['#1de9b6', '#602bb6', '#A389D4', '#899FD4', '#f44236', '#f4c22b'],
        title: {
            text: 'Contents of Highsoft weekly fruit delivery'
        },
        subtitle: {
            text: '3D donut in Highcharts'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'Delivered amount',
            data: [
                ['Bananas', 8],
                ['Kiwi', 3],
                ['MIxed nuts', 2],
                ['Oranges', 6],
                ['Apples', 3],
                ['Pears', 4],
            ]
        }]
    });
    // [ Donut 3D-pie-chart ] end

    // [ Column, line & pie-chart ] Start
    Highcharts.chart('chart-highchart-combo1', {
        title: {
            text: 'Combination chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Kiwi'],
        },
        colors: ['#1de9b6', '#602bb6', '#A389D4'],
        labels: {
            items: [{
                html: 'Total fruit consumption',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Jane',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'John',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Joe',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33],
            color: '#f44236',
            lineColor: '#f44236',
            marker: {
                lineWidth: 2,
                lineColor: '#f44236',
                fillColor: '#fff'
            }
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'Jane',
                y: 13,
                color: '#1de9b6'
            }, {
                name: 'John',
                y: 23,
                color: '#602bb6',
            }, {
                name: 'Joe',
                y: 19,
                color: '#A389D4',
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
}, 700);
// [ Column, line & pie-chart ] end