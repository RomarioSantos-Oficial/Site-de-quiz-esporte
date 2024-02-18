
// Adiciona um evento de clique ao documento para iniciar a reprodução da playlist
document.addEventListener('click', startPlaylistOnClick);
const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form')

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '')
}

const handleSubmit = (event) => {
    event.preventDefault();
    

    localStorage.setItem('player', input.value);
    window.location = './src/html/home.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);


// Lista de URLs das músicas
const musicList = [
    './src/assets/audio/pais do futebol.mp3',
    './src/assets/audio/Shakia 2010 copa.mp3',
    './src/assets/audio/Live It Up.mp3',
    './src/assets/audio/Hayya Hayya.mp3',
    // Adicione mais URLs de músicas conforme necessário
];

// Função para criar um elemento de áudio
function createAudioElement() {
    const audioElement = new Audio();
    // Define o volume para 20%
    audioElement.volume = 0.2;
    return audioElement;
}

// Função para reproduzir a próxima música na lista
function playNextMusic() {
    // Obtém uma música aleatória da lista
    const randomIndex = Math.floor(Math.random() * musicList.length);
    const randomMusic = musicList[randomIndex];

    // Cria um novo elemento de áudio
    const audioElement = createAudioElement();
    // Define a música selecionada como a origem do elemento de áudio
    audioElement.src = randomMusic;

    // Adiciona um evento de 'ended' ao elemento de áudio para tocar a próxima música quando a atual terminar
    audioElement.addEventListener('ended', playNextMusic);

    // Inicia a reprodução da música
    audioElement.play();
}

// Função para iniciar a reprodução da playlist quando qualquer parte da página for clicada
function startPlaylistOnClick() {
    // Remove o evento de clique após o início da reprodução da playlist para evitar repetições
    document.removeEventListener('click', startPlaylistOnClick);
    // Inicia a reprodução da playlist
    playNextMusic();
}
