// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
        labels: ["Python", "Javascript", "PHP", "C++", "C#"],
        datasets: [{
            label: "Programming languages(thousands)",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: [15, 52, 20, 12, 18]
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Predicted skills in 2022'
        }
    }
});


// doughnut chart
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Stack Overflow", "W3schools", "Books", "GitHub", "Other"],
      datasets: [
        {
          label: "Sources",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [25,20,30,10,15]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Sources used to learn web development'
      }
    }
});

