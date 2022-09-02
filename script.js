var audio = document.getElementById("audio");
var playPauseBtn = document.getElementById("playPauseBtn");
var count = 0;
audio.volume = 0.3;

function playPause() {
    if(count == 0) {
        count = 1;
        audio.play();
    } else {
        count = 0;
        audio.pause();
    }
}

