// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('#expose img');
  const audio = document.querySelector('audio');
  const playButton = document.getElementById('button');
  const volumeSlider = document.querySelector('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  const jsConfetti = new JSConfetti();

  const hornAssets = {
    'air-horn': {
      image: 'assets/images/air-horn.svg',
      audio: 'assets/audio/air-hornSelect.mp3'
    },
    'car-horn': {
      image: 'assets/images/air-horn.svg',
      audio: 'assets/audio/air-hornSelect.mp3'
    },
    'party-horn': {
      image: 'assets/images/air-horn.svg',
      audio: 'assets/audio/air-hornSelect.mp3'
    }
  };

  hornSelect.addEventListener('change', () => {
    const selected = hornSelect.value;
    if (hornAssets[selected]) {
      image.src = hornAssets[selected].image;
      audio.src = hornAssets[selected].audio;
    }
  });

  
  volumeSlider.addEventListener('input', () => {
    const value = volumeSlider.value;
    audio.volume = value / 100;

    if (value == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (value < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (value < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}