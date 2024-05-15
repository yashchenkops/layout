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
      }, 2000);
    }
  });
};

const initScratchGame = () => {
  const scratchItems = document.querySelectorAll('.game__scratch-item');
  let selectedItems = [];

  scratchItems.forEach(item => {
    item.addEventListener('click', function() {
      if (!item.classList.contains('animation-scretch')) {
        item.classList.add('animation-scretch');
        selectedItems.push(item);
        
        if (selectedItems.length === 2) {
          initPopupBonus();
        }
      }
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
