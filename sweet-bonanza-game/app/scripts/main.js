const wheel = document.querySelector('.game__wheel');
const wheelButton = document.querySelector('.game__button');
const popupOverlay = document.querySelector('.popup__overlay');
const popupWin = document.querySelector('.popup__win');
const popupBonus = document.querySelector('.popup__bonus');
const popupButtonContinue = document.querySelector('.popup__continue');
const gameWheel = document.getElementById('gameWheel');
const gameScratch = document.getElementById('gameScratch');

const fadeIn = (element, delay) => {
  let opacity = 0;
  element.style.opacity = opacity;
  element.style.display = 'block';
  
  const timer = setInterval(function () {
    if (opacity >= 0.9){
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity = opacity + 0.1;
  }, delay);
};

const saveGameState = (popupName) => {
  const gameState = {
    currentPopup: popupName
  };
  localStorage.setItem('gameState', JSON.stringify(gameState));
};

const clearGameState = () => {
  localStorage.removeItem('gameState');
};

const initMainSound = () => {
  const audio = new Audio('./sounds/sweet-relief-back_music.mp3');
  
  document.addEventListener('click', function() {
    audio.loop = true;
    audio.volume = 0.03;
    audio.play().catch(error => {
      console.log('Error playing audio:', error);
    });
  });
};

const initButtonSound = () => {
  const buttons = document.querySelectorAll('.button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      const audio = new Audio();
      audio.src = './sounds/button-click.mp3';
      audio.volume = 0.1;
      audio.play();
    });
  }
};

document.addEventListener('DOMContentLoaded', function() {
  initSpin();
  initScratchGame();
  initMainSound(); 
  initButtonSound(); 

  // const gameState = JSON.parse(localStorage.getItem('gameState')); -- LOCAL STORAGE
  
  if (gameState) {
    const { currentPopup } = gameState;
    
    if (currentPopup === 'popupWin') {
      fadeIn(popupOverlay, 20);
      popupWin.classList.add('is-visible');
      document.body.classList.add('scroll-block');
    } else if (currentPopup === 'popupBonus') {
      fadeIn(popupOverlay, 20);
      popupBonus.classList.add('is-visible');
      document.body.classList.add('scroll-block');
    }
  }
});

const initWheel = () => {
  wheelButton.classList.remove('animated');
  wheelButton.classList.add('disabled');

  wheel.classList.remove('animated');
  wheel.classList.add('spin-to-win');
};

const initPopupWin = () => {
  const audio = new Audio();
  audio.src = './sounds/cute-level-up-popup-1.mp3';
  audio.volume = 0.1;
  audio.play();

  fadeIn(popupOverlay, 20);
  popupWin.classList.add('is-visible');
  document.body.classList.add('scroll-block');

  saveGameState('popupWin');
};

const initPopupBonus = () => {
  const audio = new Audio();
  audio.src = './sounds/cute-level-up-popup-2.mp3';
  audio.volume = 0.1;
  audio.play();

  fadeIn(popupOverlay, 20);
  popupBonus.classList.add('is-visible');
  document.body.classList.add('scroll-block');

  saveGameState('popupBonus');
};

const initSpin = () => {
  wheelButton.addEventListener('click', function() {
    if (wheelButton.classList.contains('animated')) {
      initWheel();
      
      setTimeout(() => {
        initPopupWin();
      }, 5000);
    }
  });
};

const initScratchGame = () => {
  const scratchItem1 = document.getElementById('js-scratch-canvas-1');
  const scratchItem2 = document.getElementById('js-scratch-canvas-2');
  const scratchItem3 = document.getElementById('js-scratch-canvas-3');
  const scratchItems = [scratchItem1, scratchItem2, scratchItem3];
  let scratchCount = 0;

  scratchItems.forEach((item) => {
    const containerWidth = item.offsetWidth ? 364 : 364;
    const containerHeight = item.offsetWidth < 1024 ? 253 : 208;

    const scratch = new ScratchCard(item, {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: containerWidth,
      containerHeight: containerHeight,
      imageForwardSrc: './img/scratch-field.png',
      imageBackgroundSrc: './img/win-scratch.png',
      clearZoneRadius: 20,
      nPoints: 30,
      pointSize: 4,
      percentToFinish: 20,
      callback: function() {
        scratchCount++;
        if (scratchCount === 2) {
          initPopupBonus();
        }
      }
    });

    scratch
      .init()
      .then(() => {
        scratch.canvas.addEventListener('scratch.move', () => {
          let percent = scratch.getPercent().toFixed(2);
        });
      })
      .catch(error => {
        alert(error.message);
      });
  });
};

popupButtonContinue.addEventListener('click', function() {
  popupOverlay.style.display = 'none';
  document.body.classList.remove('scroll-block');
  popupWin.classList.remove('is-visible');
  gameWheel.classList.add('is-hidden');
  gameScratch.classList.remove('is-hidden');
  clearGameState();
});
