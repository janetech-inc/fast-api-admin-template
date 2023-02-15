'use strict';
// [ line-area2 ] start
(function () {
    var options = {
        chart: {
            height: 320,
            type: 'line',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 3,
        },
        series: [{
            name: 'Market Days',
            data: [5, 30, 25, 55, 45, 65, 60, 105, 80, 110, 120, 150]
        }, {
            name: 'Market Days ALL',
            data: [80, 95, 87, 155, 140, 147, 130, 180, 160, 175, 165, 200]
        }],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        colors: ['#1de9b6', '#10adf5'],
        fill: {
            type: 'solid',
        },
        markers: {
            size: 5,
            colors: ['#1de9b6', '#10adf5'],
            opacity: 0.9,
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        grid: {
            borderColor: '#e2e5e885',
        },
    };
    var chart = new ApexCharts(document.querySelector("#line-area2"), options);
    chart.render();
})();
// [ line-area2 ] end
// [ world-low ] start
(function () {
    var map = new jsVectorMap({
        selector: "#world-low",
        map: "world",
        markersSelectable: true,
        markers: [{
            coords: [-14.2350, -51.9253]
        },
        {
            coords: [35.8617, 104.1954]
        },
        {
            coords: [61, 105]
        },
        {
            coords: [26.8206, 30.8025]
        }
        ],
        markerStyle: {
            initial: {
                fill: '#323232',

            },
            hover: {
                fill: '#04a9f5',
            },
        },
        markerLabelStyle: {
            initial: {
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                fill: '#323232',
            },
        },
    });
})();
// [ world-low ] end
// [ Earnings-chart ] start
(function () {
    var options = {
        chart: {
            type: 'area',
            height: 300,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#602bb6"],
        fill: {
            colors: undefined,
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: "vertical",
                gradientToColors: ["#A389D4"],
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 70, 100],
                colorStops: []
            }
        },
        stroke: {
            width: 3,
            curve: 'straight'
        },
        series: [{
            name: 'series1',
            data: [30, 55, 80, 60, 70, 70, 110, 90, 130]
        }],
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return 'Statistics :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#Earnings-chart"), options);
    chart.render();
})();
// [ Earnings-chart ] end