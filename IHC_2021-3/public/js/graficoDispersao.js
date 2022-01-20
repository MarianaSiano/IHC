let ctx = document.getElementById("Chart").getContext("2d");
let myChart = new Chart(ctx, {
    type: "scatter",
    data: data,
    options: {
        responsive: true,
        plugins:{
            legend: {
                position: "right",
            },
            title:{
                display: true,
                text: "Gráfico de Dispersão das notas por discente",
                font: {
                    size: 18
                }
            }
        }
    }
});