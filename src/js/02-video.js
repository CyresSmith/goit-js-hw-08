import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const currentTime = function(data) {
    
};

player.on('timeupdate', currentTime);

console.log(data);
