'use strict';
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        floatchart()
    }, 700);
});

function floatchart() {
    // [ sale-view ] start
    (function () {
        var options = {
            chart: {
                type: 'bar',
                height: 80,
                width: 100,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#04a9f5"],
            plotOptions: {
                bar: {
                    columnWidth: '60%'
                }
            },
            series: [{
                data: [10, 20, 10, 27, 10, 20, 15, 24, 16, 20, 10, 18, 20, 10, 5]
            }],
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
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
                            return 'Sales :'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#sale-view"), options);
        chart.render();
    })();
    // [ sale-view ] end
    // [ sale-view-second ] start
    (function () {
        var options = {
            chart: {
                type: 'bar',
                height: 80,
                width: 100,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#1de9b6"],
            plotOptions: {
                bar: {
                    columnWidth: '60%'
                }
            },
            series: [{
                data: [10, 20, 10, 27, 10, 20, 15, 24, 16, 20, 10, 18, 20, 10, 5]
            }],
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
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
                            return 'Sales :'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#sale-view-second"), options);
        chart.render();
    })();
    // [ sale-view-second ] end
    // [ sale-view-third ] start
    (function () {
        var options = {
            chart: {
                type: 'bar',
                height: 80,
                width: 100,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#f44236"],
            plotOptions: {
                bar: {
                    columnWidth: '60%'
                }
            },
            series: [{
                data: [10, 20, 10, 27, 10, 20, 15, 24, 16, 20, 10, 18, 20, 10, 5]
            }],
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
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
                            return 'Sales :'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#sale-view-third"), options);
        chart.render();
    })();
    // [ sale-view-third ] end
    // [ app-sale ] start
    (function () {
        var options = {
            chart: {
                type: 'line',
                height: 45,
                width:100,
                sparkline: {
                    enabled: true
                },
            },
            stroke: {
                curve: 'straight',
                width: 3,
            },
            colors: ['#1DE3BE'],
            series: [{
                data: [10, 27, 10, 10, 27, 20, 20]
            }],
            yaxis: {
                min: 0,
                max: 40
            },
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
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
        var chart = new ApexCharts(document.querySelector("#app-sale"), options);
        chart.render();
    })();
    // [ app-sale ] end
    // [ app-sale1 ] start
    (function () {
        var options = {
            chart: {
                type: 'line',
                height: 45,
                width:100,
                sparkline: {
                    enabled: true
                },
            },
            stroke: {
                curve: 'straight',
                width: 3,
            },
            colors: ['#FF4962'],
            series: [{
                data: [27, 10, 20, 15, 27, 20, 20]
            }],
            yaxis: {
                min: 0,
                max: 40
            },
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
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
        var chart = new ApexCharts(document.querySelector("#app-sale1"), options);
        chart.render();
    })();
    // [ app-sale1 ] end
    // [ app-sale2 ] start
    (function () {
        var options = {
            chart: {
                type: 'line',
                height: 45,
                width:100,
                sparkline: {
                    enabled: true
                },
            },
            stroke: {
                curve: 'straight',
                width: 3,
            },
            colors: ['#8C9CD4'],
            series: [{

                data: [10, 27, 18, 25, 15, 25, 20]
            }],
            yaxis: {
                min: 0,
                max: 40
            },
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
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
        var chart = new ApexCharts(document.querySelector("#app-sale2"), options);
        chart.render();
    })();
    // [ app-sale2 ] end
    // [ app-sale3 ] start
    (function () {
        var options = {
            chart: {
                type: 'line',
                height: 45,
                width:100,
                sparkline: {
                    enabled: true
                },
            },
            stroke: {
                curve: 'straight',
                width: 3,
            },
            colors: ['#1DE3BE'],
            series: [{
                data: [10, 27, 10, 10, 27, 20, 20]
            }],
            yaxis: {
                min: 0,
                max: 40
            },
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
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
        var chart = new ApexCharts(document.querySelector("#app-sale3"), options);
        chart.render();
    })();
    // [ app-sale3 ] end
    // [ user-sale ] start
    (function () {
        var options = {
            chart: {
                type: 'line',
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                width: 3,
                curve: "smooth",
            },
            colors: ["#1DE3BE"],
            series: [{
                data: [45, 66, 41, 89, 25, 44, 9, 54]
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
                            return 'hii'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
        var chart = new ApexCharts(document.querySelector("#user-sale"), options);
        chart.render()
    })();
    // [ user-sale ] end
    // [ user-sale1 ] start
    (function () {
        var options = {
            chart: {
                type: 'line',
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                width: 3,
                curve: "smooth",
            },
            colors: ["#1DE3BE"],
            series: [{
                data: [54, 9, 44, 25, 89, 41, 66, 45]
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
                            return 'hii'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
        var chart = new ApexCharts(document.querySelector("#user-sale1"), options);
        chart.render()
    })();
    // [ user-sale1 ] end
    // [ user-sale2 ] start
    (function () {
        var options = {
            chart: {
                type: 'line',
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                width: 3,
                curve: "smooth",
            },
            colors: ["#8C9CD4"],
            series: [{
                data: [45, 66, 41, 89, 25, 44, 9, 54]
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
                            return 'hii'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
        var chart = new ApexCharts(document.querySelector("#user-sale2"), options);
        chart.render()
    })();
    // [ user-sale2 ] end
    // [ user-sale3 ] start
    (function () {
        var options = {
            chart: {
                type: 'line',
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                width: 3,
                curve: "smooth",
            },
            colors: ["#8C9CD4"],
            series: [{
                data: [54, 9, 44, 25, 89, 41, 66, 45]
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
                            return 'hii'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
        var chart = new ApexCharts(document.querySelector("#user-sale3"), options);
        chart.render()
    })();
    // [ user-sale3 ] end
    // [ user-sale4 ] start
    (function () {
        var options = {
            chart: {
                type: 'line',
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                width: 3,
                curve: "smooth",
            },
            colors: ["#04a9f5"],
            series: [{
                data: [45, 66, 41, 89, 25, 44, 9, 54]
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
                            return 'hii'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
        var chart = new ApexCharts(document.querySelector("#user-sale4"), options);
        chart.render()
    })();
    // [ user-sale4 ] end
    // [ user-sale5 ] start
    (function () {
        var options = {
            chart: {
                type: 'line',
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                width: 3,
                curve: "smooth",
            },
            colors: ["#04a9f5"],
            series: [{
                data: [54, 9, 44, 25, 89, 41, 66, 45]
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
                            return 'hii'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
        var chart = new ApexCharts(document.querySelector("#user-sale5"), options);
        chart.render()
    })();
    // [ user-sale5 ] end
}