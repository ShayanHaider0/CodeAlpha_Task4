const playButton = document.getElementById('play-button');
const audioElement = document.getElementById('audio-element');

function togglePlayPause() {
    const icon = playButton.querySelector('i');

    if (audioElement.paused) {
        audioElement.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audioElement.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

playButton.addEventListener('click', togglePlayPause);
