import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function setVideoTime(currentTime) {
  player.setCurrentTime(currentTime).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
}

player.on('pause', function () {
  player.getCurrentTime().then(function (stopTime) {
    localStorage.setItem('videoplayer-current-time', stopTime);
  });
});

const videoplayerCurrentTime = localStorage.getItem('videoplayer-current-time');
if (videoplayerCurrentTime) {
  setVideoTime(videoplayerCurrentTime);
}

const throttledSetVideoTime = throttle(setVideoTime, 1000);
player.on('timeupdate', function () {
  throttledSetVideoTime(player.getCurrentTime());
});