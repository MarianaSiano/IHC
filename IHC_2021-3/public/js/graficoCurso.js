function defineTamanhoGrafico() {
    let height = Math.round(window.innerHeight);
    $("#barchart_material").css("height", height + "px");
}

google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable(datas);

    var options = {
        chart: {
            title: title,
        },
        bars: 'horizontal',
    };

    var chart = new google.charts.Bar(document.getElementById('barchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

defineTamanhoGrafico();