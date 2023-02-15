'use strict';
// [ pie-legend chart ] start
(function () {
    var root = am5.Root.new("am-pie-2");
    root.setThemes([
        am5themes_Animated.new(root)
    ]);
    var chart = root.container.children.push(
        am5percent.PieChart.new(root, {
            endAngle: 270
        })
    );
    var series = chart.series.push(
        am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            endAngle: 270
        })
    );
    series.states.create("hidden", {
        endAngle: -90
    });
    series.data.setAll([{
        category: "Lithuania",
        value: 501.9
    }, {
        category: "Czechia",
        value: 301.9
    }, {
        category: "Ireland",
        value: 201.1
    }, {
        category: "Germany",
        value: 165.8
    }, {
        category: "Australia",
        value: 139.9
    }, {
        category: "Austria",
        value: 128.3
    }, {
        category: "UK",
        value: 99
    }]);

    series.appear(1000, 100);
})();
// [ pie-legend chart ] end

// [ XY-Stacked-1 chart ] start
(function () {
    var root = am5.Root.new("am-xy-1");

    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    var chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX"
    }));
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    var xRenderer = am5xy.AxisRendererX.new(root, {
        minGridDistance: 30
    });
    xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 15
    });

    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
    }));

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {})
    }));

    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "country",
        tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}"
        })
    }));

    series.columns.template.setAll({
        cornerRadiusTL: 5,
        cornerRadiusTR: 5
    });
    series.columns.template.adapters.add("fill", (fill, target) => {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", (stroke, target) => {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
    });


    // Set data
    var data = [{
        country: "USA",
        value: 2025
    }, {
        country: "China",
        value: 1882
    }, {
        country: "Japan",
        value: 1809
    }, {
        country: "Germany",
        value: 1322
    }, {
        country: "UK",
        value: 1122
    }, {
        country: "France",
        value: 1114
    }, {
        country: "India",
        value: 984
    }, {
        country: "Spain",
        value: 711
    }, {
        country: "Netherlands",
        value: 665
    }, {
        country: "Russia",
        value: 580
    }, {
        country: "South Korea",
        value: 443
    }, {
        country: "Canada",
        value: 441
    }];

    xAxis.data.setAll(data);
    series.data.setAll(data);


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
})();
// [ XY-Stacked-1 chart ] end

// [ Map-heat chart ] start
(function () {
    var root = am5.Root.new("am-map-4");
    root.setThemes([
        am5themes_Animated.new(root)
    ]);
    var chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        projection: am5map.geoMercator()
    }));
    var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"]
    }));

    polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        toggleKey: "active",
        interactive: true
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
        fill: root.interfaceColors.get("primaryButtonHover")
    });

    polygonSeries.mapPolygons.template.states.create("active", {
        fill: root.interfaceColors.get("primaryButtonHover")
    });

    var polygonSeriesUS = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaLow
    }));

    polygonSeriesUS.mapPolygons.template.setAll({
        tooltipText: "{name}",
        toggleKey: "active",
        interactive: true
    });

    var colors = am5.ColorSet.new(root, {});

    polygonSeriesUS.mapPolygons.template.set("fill", colors.getIndex(3));

    polygonSeriesUS.mapPolygons.template.states.create("hover", {
        fill: root.interfaceColors.get("primaryButtonHover")
    });

    polygonSeriesUS.mapPolygons.template.states.create("active", {
        fill: root.interfaceColors.get("primaryButtonHover")
    });
    chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
    chart.chartContainer.get("background").events.on("click", function () {
        chart.goHome();
    })
    chart.appear(1000, 100);
})();
// [ Map-heat chart ] end