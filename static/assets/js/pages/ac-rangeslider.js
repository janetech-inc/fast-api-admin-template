'use strict';

// [ basic-Slider ]
(function () {
    var slider = new Slider('#ex1', {
        formatter: function (value) {
            return 'Current value: ' + value;
        }
    });
})();
// [ Selector-Slider ]
(function () {
    var slider = new Slider('#ex2', {});
    var RGBChange = function () {
        $('#RGB').css('background', 'rgb(' + r.getValue() + ',' + g.getValue() + ',' + b.getValue() + ')')
    };
    var r = new Slider("#R", {
        reversed: true
    }).on('slide', RGBChange);
    var g = new Slider("#G", {
        reversed: true
    }).on('slide', RGBChange);
    var b = new Slider("#B", {
        reversed: true
    }).on('slide', RGBChange);

    // [ vertical-slider ]
    var slider = new Slider("#ex4", {
        reversed: true
    });
})();
// [ Destroy-Slider ]
(function () {
    var slider = new Slider('#ex5');
    document.querySelector('#destroyEx5Slider').addEventListener('click', function () {
        slider.destroy();
    });
})();
// [ current-Slider ]
(function () {
    var slider = new Slider("#ex6");
    slider.on("slide", function (sliderValue) {
        document.getElementById("ex6SliderVal").textContent = sliderValue;
    });
})();
// [ Enable-Slider ]
(function () {
    var slider = new Slider("#ex7");
    document.querySelector('#ex7-enabled').addEventListener('click', function () {
        if (this.checked) {
            slider.enable();
        } else {
            slider.disable();
        }
    });
})();
// [ Tooltip-Slider ]
(function () {
    var slider = new Slider("#ex8", {
        tooltip: 'always'
    });
})();
// [ Precision-slider ]
(function () {
    var slider = new Slider("#ex9", {
        precision: 2,
        value: 8.115 // Slider will instantiate showing 8.12 due to specified precision
    });
})();
// [ handlers-slider ]
(function () {
    var slider = new Slider("#ex10", {});
})();
// [ step-slider ]
(function () {
    var slider = new Slider("#ex11", {
        step: 20000,
        min: 0,
        max: 200000
    });
})();
//[ low & high-slider ]
(function () {
    var sliderA = new Slider("#ex12a", {
        id: "slider12a",
        min: 0,
        max: 10,
        value: 5
    });
    var sliderB = new Slider("#ex12b", {
        id: "slider12b",
        min: 0,
        max: 10,
        range: true,
        value: [3, 7]
    });
    var sliderC = new Slider("#ex12c", {
        id: "slider12c",
        min: 0,
        max: 10,
        range: true,
        value: [3, 7]
    });
})();
// [ labels-slider ]
(function () {
    var slider = new Slider("#ex13", {
        ticks: [0, 10, 20, 30, 40],
        ticks_labels: ['$0', '$10', '$20', '$30', '$40'],
        ticks_snap_bounds: 95
    });
})();
// [ positions-slider ]
(function () {
    var slider = new Slider("#ex14", {
        ticks: [0, 10, 20, 30, 40],
        ticks_positions: [0, 30, 60, 80, 100],
        ticks_labels: ['$0', '$10', '$20', '$30', '$40'],
        ticks_snap_bounds: 95
    });
})();
// [ logarithmic-slider ]
(function () {
    var slider = new Slider('#ex15', {
        min: 1000,
        max: 10000000,
        scale: 'logarithmic',
        step: 10
    });
})();
// [ Focus-slider ]
(function () {
    var sliderA = new Slider("#ex16a", {
        min: 0,
        max: 10,
        value: 0,
        focus: true
    });
    var sliderB = new Slider("#ex16b", {
        min: 0,
        max: 10,
        value: [0, 10],
        focus: true
    });
})();
// [ Unusual-slider ]
(function () {
    var sliderA = new Slider("#ex17a", {
        min: 0,
        max: 10,
        value: 0,
        tooltip_position: 'bottom'
    });
    var sliderB = new Slider("#ex17b", {
        min: 0,
        max: 10,
        value: 0,
        orientation: 'vertical',
        tooltip_position: 'left'
    });
})();
// [ Accessibility-slider ]
(function () {
    var sliderA = new Slider("#ex18a", {
        min: 0,
        max: 10,
        value: 5,
        labelledby: 'ex18-label-1'
    });
    var sliderB = new Slider("#ex18b", {
        min: 0,
        max: 10,
        value: [3, 6],
        labelledby: ['ex18-label-2a', 'ex18-label-2b']
    });
})();
// [ Highlight-slider ]
(function () {
    var slider = new Slider("#ex22", {
        id: 'slider22',
        min: 0,
        max: 20,
        step: 1,
        value: 14,
        rangeHighlights: [{
                "start": 2,
                "end": 5,
                "class": "category1"
            },
            {
                "start": 7,
                "end": 8,
                "class": "category2"
            },
            {
                "start": 17,
                "end": 19
            },
            {
                "start": 17,
                "end": 24
            },
            {
                "start": -3,
                "end": 19
            }
        ]
    });
})();
// [ Tick-slider ]
(function () {
    var slider = new Slider("#ex23", {
        ticks: [0, 1, 2, 3, 4],
        ticks_positions: [0, 30, 70, 90, 100],
        ticks_snap_bounds: 200,
        formatter: function (value) {
            return 'Current value: ' + value;
        },
        ticks_tooltip: true,
        step: 0.01
    });
})();
// [ auto-slider ]
(function () {
    var slider = new Slider('#ex24');
})();