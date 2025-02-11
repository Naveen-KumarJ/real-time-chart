const chartContainer = document.querySelector(".chart-container").getContext('2d');
// console.log(chartContainer);

const chartObj = new Chart(chartContainer, {
    type: "line",
    data: {
        labels: [],
        datasets: [
        {
            label: "value",
            data: [],
            borderWidth: 2,
            borderColor: "blue",
            tension: 0,
            fill:false,
        },
        ],
    },
    options: {
        responsive:true,
        animatio:false,
        scales: {
            x: {title:{display:true, text:"time"}},
            y: {title:{display:true, text:"value"},beginAtZero: true,},
        },
    },
});
// console.log(chartObj.data);

let startTime = 0.5;

function updateData() {
    let newData = Math.random() * 100;
    let dataset = chartObj.data.datasets[0].data;

    chartObj.data.labels.push(startTime.toFixed(1));
    dataset.push(newData);

    startTime += 0.5;

    anime({
        targets: dataset,
        [dataset.length - 1]: newData,
        easing: "easeOutQuad",
        duration: 2000,
        update: function () {
            chartObj.update();
        },
    });
}

setInterval(updateData, 1000);

