// Audio Player Function

let audioActive = {
    element: null,
    audio: null
}

function playAudio(element, audioPath) {
    let player = element;

    
    if (element.classList.contains('fa-play')) {
        if (audioActive.element && audioActive.element !== element) {
            audioActive.element.classList.remove('fa-pause');
            audioActive.element.classList.add('fa-play');
            audioActive.element.style.paddingRight = '';
            audioActive.audio.pause();
        }

        player.classList.remove('fa-play');
        player.classList.add('fa-pause');
        player.style.paddingRight = '0.155rem';
        
        if (!audioActive.audio || audioActive.element !== element) {
            audioActive.audio = new Audio(audioPath);
        }
        audioActive.audio.play();
        audioActive.element = element;

    } else {
        player.classList.remove('fa-pause');
        player.classList.add('fa-play');
        player.style.paddingRight = '';

        if (audioActive.audio) {
            audioActive.audio.pause();
        }
    }
}