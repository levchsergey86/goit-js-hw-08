import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const throttledSetVideoTime = throttle(function (seconds) {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);

player.on('timeupdate', function (data) {
  throttledSetVideoTime(data.seconds);
});

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
