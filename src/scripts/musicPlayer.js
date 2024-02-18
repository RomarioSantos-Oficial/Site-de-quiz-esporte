const musicList = [
    '/src/assets/audio/pais do futebol.mp3',
    '/src/assets/audio/Shakia 2010 copa.mp3',
    '/src/assets/audio/Live It Up.mp3',
    '/src/assets/audio/Hayya Hayya.mp3',
    // Adicione mais URLs de músicas conforme necessário
];

function createAudioElement() {
    const audioElement = new Audio();
    audioElement.volume = 0.1;
    return audioElement;
}

function playNextMusic() {
    const randomIndex = Math.floor(Math.random() * musicList.length);
    const randomMusic = musicList[randomIndex];

    const audioElement = createAudioElement();
    audioElement.src = randomMusic;
    audioElement.addEventListener('ended', playNextMusic);
    audioElement.play();
}

export { playNextMusic };
