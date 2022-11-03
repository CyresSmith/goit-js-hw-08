import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.querySelector('[id="vimeo-player"]');

const player = new Player(vimeoPlayer);

const savePlaybackStopTime = (data) => localStorage.setItem('videoplayer-current-time', data.seconds);

const setPlaybackStopTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(savePlaybackStopTime, 1000));

if (localStorage.getItem('videoplayer-current-time')) {
    player.setCurrentTime(setPlaybackStopTime);
}
