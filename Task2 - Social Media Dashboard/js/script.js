document.addEventListener("DOMContentLoaded", function () {
    const data = {
      labels: ['Gained', 'Lost'],
      datasets: [{
        data: [70, 30],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384']
      }]
    };

    const ctx = document.getElementById('pieChart').getContext('2d');

    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        responsive: false,
        maintainAspectRatio: false,
      }
    });
  });
  