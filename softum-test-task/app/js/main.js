$("#modal").iziModal();

let theWheel = new Winwheel({
  'numSegments': 6,
  'outerRadius': 212,
  'textFontSize': 28,
  'segments': [{
      'fillStyle': '#bdbdbd',
      'text': '1'
    },
    {
      'fillStyle': '#00acc1',
      'text': '2'
    },
    {
      'fillStyle': '#ffeb3b',
      'text': '3'
    },
    {
      'fillStyle': '#ef5350',
      'text': '4'
    },
    {
      'fillStyle': '#2196f3',
      'text': '5'
    },
    {
      'fillStyle': '#e91e63',
      'text': '6'
    }
  ],
  'animation': {
    'type': 'spinToStop',
    'duration': 3,
    'spins': 6,
    'callbackFinished': alertPrize
  }
});

const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const description = document.getElementById('description');

function startSpin() {
  if (!startButton.disabled) {
    startButton.disabled = true;
    theWheel.startAnimation();
    resetButton.addEventListener('click', function () {
      resetWheel();
    });
  }
}

function resetWheel() {
  startButton.disabled = false;
  theWheel.rotationAngle = 0;
  // theWheel.draw(); // redrawing wheel from start position
  $('#modal').iziModal('close');
}

function alertPrize(indicatedSegment) {
  $('#modal').iziModal('open');
  $('#description').html(`Your result is ${indicatedSegment.text}`);
}

startButton.addEventListener('click', function () {
  startSpin();
});