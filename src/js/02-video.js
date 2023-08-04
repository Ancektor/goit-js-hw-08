import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeElem = document.querySelector('#vimeo-player');
const player = new Player(iframeElem);

player.on('timeupdate', throttle(saveCurrentTime, 1000));
document.addEventListener('DOMContentLoaded', applyCurrentTime);

function saveCurrentTime(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

function applyCurrentTime() {
  player
    .setCurrentTime(
      JSON.parse(localStorage.getItem('videoplayer-current-time'))
    )
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}
