// ГРАФИКИ

// График 1
// дефолты для всех графиков
Chart.defaults.global.responsive = true;
Chart.defaults.global.defaultFontColor = '#fff';
Chart.defaults.global.tooltips.mode = 'label';
Chart.defaults.global.tooltips.backgroundColor = '#01467c';
Chart.defaults.global.tooltips.titleColor = '#000';
Chart.defaults.global.tooltips.bodyColor = '#01467c';
Chart.defaults.global.animation.duration = 1000;
Chart.defaults.global.animation.easing = 'easeInOutQuart';
Chart.defaults.global.maintainAspectRatio = true;
// настройки кривых
var data = {
  labels: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'],
  datasets: [
    {
      label: 'Метеостанция: 5.8C ',
      borderWidth: 2,
      borderColor: '#00f9e8',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [-2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3, -2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3]
    },
    {
      label: 'Стелаж у двери: 4.2C',
      borderWidth: 2,
      borderColor: '#00ff96',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3, 3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3]
    },
    {
      label: 'Низ ВО: 5.2C',
      borderWidth: 3,
      borderColor: '#d46ffe',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3, 0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3]
    },
    {
      label: 'Испаритель: -1.1C',
      borderWidth: 2,
      borderColor: '#b8ff6b',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9]
    },
    {
      label: 'Стелаж левый ВО 1: 5.3C',
      borderWidth: 2,
      borderColor: '#0018ff',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1,]
    },
    {
      label: 'Сталаж левый ВО 2: 2C',
      borderWidth: 2,
      borderColor: '#ff9600',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1,]
    },
  ]
};
// детальные настройки самого графика
var ctx = $("#chart1");
var weeklyClicksChart = new Chart(ctx, {
  type: 'line',
  data: data,
  scaleFontColor: 'red',
  options: {
    scaleFontColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'single',
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        padding: 10
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "#fff",
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true,
          color: "#ffffff",
          zeroLineColor: '#ffffff',
          zeroLineWidth: 0.5,
          lineWidth: 0.5,
          drawBorder: false
        },
        ticks: {
          fontColor: "#fff",
          reverse: true
        },
      }],
    }
  }
});

// График 2
var data = {
  labels: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'],
  datasets: [
    {
      label: 'Метеостанция: 5.8C ',
      borderWidth: 2,
      borderColor: '#00f9e8',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [-2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3, -2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3]
    },
    {
      label: 'Стелаж у двери: 4.2C',
      borderWidth: 2,
      borderColor: '#00ff96',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3, 3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3]
    },
    {
      label: 'Низ ВО: 5.2C',
      borderWidth: 3,
      borderColor: '#d46ffe',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3, 0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3]
    },
    {
      label: 'Испаритель: -1.1C',
      borderWidth: 2,
      borderColor: '#b8ff6b',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9]
    },
    {
      label: 'Стелаж левый ВО 1: 5.3C',
      borderWidth: 2,
      borderColor: '#0018ff',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1,]
    },
    {
      label: 'Сталаж левый ВО 2: 2C',
      borderWidth: 2,
      borderColor: '#ff9600',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1,]
    },
  ]
};
// детальные настройки самого графика
var ctx = $("#chart2");
var weeklyClicksChart = new Chart(ctx, {
  type: 'line',
  data: data,
  scaleFontColor: 'red',
  options: {
    scaleFontColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'single',
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        padding: 10
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "#fff",
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true,
          color: "#ffffff",
          zeroLineColor: '#ffffff',
          zeroLineWidth: 0.5,
          lineWidth: 0.5,
          drawBorder: false
        },
        ticks: {
          fontColor: "#fff",
          reverse: true
        },
      }],
    }
  }
});

// График 3
var data = {
  labels: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'],
  datasets: [
    {
      label: 'Метеостанция: 5.8C ',
      borderWidth: 2,
      borderColor: '#00f9e8',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [-2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3, -2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3]
    },
    {
      label: 'Стелаж у двери: 4.2C',
      borderWidth: 2,
      borderColor: '#00ff96',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3, 3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3]
    },
    {
      label: 'Низ ВО: 5.2C',
      borderWidth: 3,
      borderColor: '#d46ffe',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3, 0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3]
    },
    {
      label: 'Испаритель: -1.1C',
      borderWidth: 2,
      borderColor: '#b8ff6b',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9]
    },
    {
      label: 'Стелаж левый ВО 1: 5.3C',
      borderWidth: 2,
      borderColor: '#0018ff',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1,]
    },
    {
      label: 'Сталаж левый ВО 2: 2C',
      borderWidth: 2,
      borderColor: '#ff9600',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1,]
    },
  ]
};
// детальные настройки самого графика
var ctx = $("#chart3");
var weeklyClicksChart = new Chart(ctx, {
  type: 'line',
  data: data,
  scaleFontColor: 'red',
  options: {
    scaleFontColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'single',
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        padding: 10
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "#fff",
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true,
          color: "#ffffff",
          zeroLineColor: '#ffffff',
          zeroLineWidth: 0.5,
          lineWidth: 0.5,
          drawBorder: false
        },
        ticks: {
          fontColor: "#fff",
          reverse: true
        },
      }],
    }
  }
});

// График 4
var data = {
  labels: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'],
  datasets: [
    {
      label: 'Метеостанция: 5.8C ',
      borderWidth: 2,
      borderColor: '#00f9e8',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [-2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3, -2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3]
    },
    {
      label: 'Стелаж у двери: 4.2C',
      borderWidth: 2,
      borderColor: '#00ff96',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3, 3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3]
    },
    {
      label: 'Низ ВО: 5.2C',
      borderWidth: 3,
      borderColor: '#d46ffe',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3, 0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3]
    },
    {
      label: 'Испаритель: -1.1C',
      borderWidth: 2,
      borderColor: '#b8ff6b',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9]
    },
    {
      label: 'Стелаж левый ВО 1: 5.3C',
      borderWidth: 2,
      borderColor: '#0018ff',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1,]
    },
    {
      label: 'Сталаж левый ВО 2: 2C',
      borderWidth: 2,
      borderColor: '#ff9600',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1,]
    },
  ]
};
// детальные настройки самого графика
var ctx = $("#chart4");
var weeklyClicksChart = new Chart(ctx, {
  type: 'line',
  data: data,
  scaleFontColor: 'red',
  options: {
    scaleFontColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'single',
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        padding: 10
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "#fff",
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true,
          color: "#ffffff",
          zeroLineColor: '#ffffff',
          zeroLineWidth: 0.5,
          lineWidth: 0.5,
          drawBorder: false
        },
        ticks: {
          fontColor: "#fff",
          reverse: true
        },
      }],
    }
  }
});

// График 5
var data = {
  labels: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'],
  datasets: [
    {
      label: 'Метеостанция: 5.8C ',
      borderWidth: 2,
      borderColor: '#00f9e8',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [-2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3, -2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3]
    },
    {
      label: 'Стелаж у двери: 4.2C',
      borderWidth: 2,
      borderColor: '#00ff96',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3, 3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3]
    },
    {
      label: 'Низ ВО: 5.2C',
      borderWidth: 3,
      borderColor: '#d46ffe',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3, 0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3]
    },
    {
      label: 'Испаритель: -1.1C',
      borderWidth: 2,
      borderColor: '#b8ff6b',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9]
    },
    {
      label: 'Стелаж левый ВО 1: 5.3C',
      borderWidth: 2,
      borderColor: '#0018ff',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1,]
    },
    {
      label: 'Сталаж левый ВО 2: 2C',
      borderWidth: 2,
      borderColor: '#ff9600',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1,]
    },
  ]
};
// детальные настройки самого графика
var ctx = $("#chart5");
var weeklyClicksChart = new Chart(ctx, {
  type: 'line',
  data: data,
  scaleFontColor: 'red',
  options: {
    scaleFontColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'single',
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        padding: 10
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "#fff",
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true,
          color: "#ffffff",
          zeroLineColor: '#ffffff',
          zeroLineWidth: 0.5,
          lineWidth: 0.5,
          drawBorder: false
        },
        ticks: {
          fontColor: "#fff",
          reverse: true
        },
      }],
    }
  }
});

// График 6
var data = {
  labels: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'],
  datasets: [
    {
      label: 'Метеостанция: 5.8C ',
      borderWidth: 2,
      borderColor: '#00f9e8',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [-2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3, -2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3]
    },
    {
      label: 'Стелаж у двери: 4.2C',
      borderWidth: 2,
      borderColor: '#00ff96',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3, 3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3]
    },
    {
      label: 'Низ ВО: 5.2C',
      borderWidth: 3,
      borderColor: '#d46ffe',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3, 0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3]
    },
    {
      label: 'Испаритель: -1.1C',
      borderWidth: 2,
      borderColor: '#b8ff6b',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9]
    },
    {
      label: 'Стелаж левый ВО 1: 5.3C',
      borderWidth: 2,
      borderColor: '#0018ff',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1,]
    },
    {
      label: 'Сталаж левый ВО 2: 2C',
      borderWidth: 2,
      borderColor: '#ff9600',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1,]
    },
  ]
};
// детальные настройки самого графика
var ctx = $("#chart6");
var weeklyClicksChart = new Chart(ctx, {
  type: 'line',
  data: data,
  scaleFontColor: 'red',
  options: {
    scaleFontColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'single',
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        padding: 10
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "#fff",
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true,
          color: "#ffffff",
          zeroLineColor: '#ffffff',
          zeroLineWidth: 0.5,
          lineWidth: 0.5,
          drawBorder: false
        },
        ticks: {
          fontColor: "#fff",
          reverse: true
        },
      }],
    }
  }
});

// График 7
var data = {
  labels: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'],
  datasets: [
    {
      label: 'Метеостанция: 5.8C ',
      borderWidth: 2,
      borderColor: '#00f9e8',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [-2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3, -2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3]
    },
    {
      label: 'Стелаж у двери: 4.2C',
      borderWidth: 2,
      borderColor: '#00ff96',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3, 3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3]
    },
    {
      label: 'Низ ВО: 5.2C',
      borderWidth: 3,
      borderColor: '#d46ffe',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3, 0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3]
    },
    {
      label: 'Испаритель: -1.1C',
      borderWidth: 2,
      borderColor: '#b8ff6b',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9]
    },
    {
      label: 'Стелаж левый ВО 1: 5.3C',
      borderWidth: 2,
      borderColor: '#0018ff',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1,]
    },
    {
      label: 'Сталаж левый ВО 2: 2C',
      borderWidth: 2,
      borderColor: '#ff9600',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1,]
    },
  ]
};
// детальные настройки самого графика
var ctx = $("#chart7");
var weeklyClicksChart = new Chart(ctx, {
  type: 'line',
  data: data,
  scaleFontColor: 'red',
  options: {
    scaleFontColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'single',
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        padding: 10
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "#fff",
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true,
          color: "#ffffff",
          zeroLineColor: '#ffffff',
          zeroLineWidth: 0.5,
          lineWidth: 0.5,
          drawBorder: false
        },
        ticks: {
          fontColor: "#fff",
          reverse: true
        },
      }],
    }
  }
});

// График 8
var data = {
  labels: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'],
  datasets: [
    {
      label: 'Метеостанция: 5.8C ',
      borderWidth: 2,
      borderColor: '#00f9e8',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [-2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3, -2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3]
    },
    {
      label: 'Стелаж у двери: 4.2C',
      borderWidth: 2,
      borderColor: '#00ff96',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3, 3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3]
    },
    {
      label: 'Низ ВО: 5.2C',
      borderWidth: 3,
      borderColor: '#d46ffe',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3, 0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3]
    },
    {
      label: 'Испаритель: -1.1C',
      borderWidth: 2,
      borderColor: '#b8ff6b',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9]
    },
    {
      label: 'Стелаж левый ВО 1: 5.3C',
      borderWidth: 2,
      borderColor: '#0018ff',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1,]
    },
    {
      label: 'Сталаж левый ВО 2: 2C',
      borderWidth: 2,
      borderColor: '#ff9600',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1,]
    },
  ]
};
// детальные настройки самого графика
var ctx = $("#chart8");
var weeklyClicksChart = new Chart(ctx, {
  type: 'line',
  data: data,
  scaleFontColor: 'red',
  options: {
    scaleFontColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'single',
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        padding: 10
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "#fff",
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true,
          color: "#ffffff",
          zeroLineColor: '#ffffff',
          zeroLineWidth: 0.5,
          lineWidth: 0.5,
          drawBorder: false
        },
        ticks: {
          fontColor: "#fff",
          reverse: true
        },
      }],
    }
  }
});

// График 9
var data = {
  labels: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'],
  datasets: [
    {
      label: 'Метеостанция: 5.8C ',
      borderWidth: 2,
      borderColor: '#00f9e8',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [-2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3, -2.3, 1.3, -4.2, 0, 5.2, -0.8, 5.6, 0, 6.3, -2.4, 5, -2.5, 0, -5, 0.5, -5.2, 0, -2.5, 0.3]
    },
    {
      label: 'Стелаж у двери: 4.2C',
      borderWidth: 2,
      borderColor: '#00ff96',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3, 3, 3.4, 3.8, 3, 3.2, 3.9, 3.2, 3, 4, 3.4, 3.7, 2.5, 4.2, 2.8, 3.5, 3.2, 5, 2.5, 3.3]
    },
    {
      label: 'Низ ВО: 5.2C',
      borderWidth: 3,
      borderColor: '#d46ffe',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3, 0, 2.5, 1.3, 2, 1.1, 2.9, 0.2, 1.6, 0.3, 2.4, 1.7, 2.5, 0.2, 2.8, 1.5, 2.2, 0.5, 2.5, 1.3]
    },
    {
      label: 'Испаритель: -1.1C',
      borderWidth: 2,
      borderColor: '#b8ff6b',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9, 5.1, 4.9]
    },
    {
      label: 'Стелаж левый ВО 1: 5.3C',
      borderWidth: 2,
      borderColor: '#0018ff',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1, 5.9, 6.1,]
    },
    {
      label: 'Сталаж левый ВО 2: 2C',
      borderWidth: 2,
      borderColor: '#ff9600',
      pointRadius: 1,
      pointHoverRadius: 3,
      lineTension: 0,
      fill: false,
      data: [6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1, 6.9, 7.1,]
    },
  ]
};
// детальные настройки самого графика
var ctx = $("#chart9");
var weeklyClicksChart = new Chart(ctx, {
  type: 'line',
  data: data,
  scaleFontColor: 'red',
  options: {
    scaleFontColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'single',
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        padding: 10
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "#fff",
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true,
          color: "#ffffff",
          zeroLineColor: '#ffffff',
          zeroLineWidth: 0.5,
          lineWidth: 0.5,
          drawBorder: false
        },
        ticks: {
          fontColor: "#fff",
          reverse: true
        },
      }],
    }
  }
});