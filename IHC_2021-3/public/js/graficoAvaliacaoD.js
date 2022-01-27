function defineTamanhoGrafico(){
  let height =  Math.round(window.innerHeight*1.2);
  $("#barchart_material").css("height",height+"px");  
} 



google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable(datas);

var options = {
    chart: {
        title: title,
        // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
    bars: 'horizontal', // Required for Material Bar Charts.
};

var chart = new google.charts.Bar(document.getElementById('barchart_material'));

chart.draw(data, google.charts.Bar.convertOptions(options));
}

defineTamanhoGrafico();