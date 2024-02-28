document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signupLink').addEventListener('click', function(event) {
        event.preventDefault();
        exibirTelaCadastro();
    });

    // Verifica se já existem dados salvos no localStorage
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        document.getElementById('login').style.display = 'block'; // Exibe a tela de login se houver dados salvos
    }
});

// Função para exibir a tela de cadastro e ocultar a tela de login
function exibirTelaCadastro() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('cadastro').style.display = 'block';
}

// Função para cadastrar o usuário
function cadastrar() {
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;

    // Verifica se a senha tem pelo menos 4 caracteres
    if (password.length < 4) {
        alert('A senha deve ter pelo menos 4 caracteres.');
        return;
    }

    // Salva os dados no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Exibe a tela de login após o cadastro
    exibirTelaLogin();

    // Limpa os campos de entrada
    document.getElementById('usernameInput').value = '';
    document.getElementById('passwordInput').value = '';
}

// Função para realizar o login
function logar() {
    var savedUsername = localStorage.getItem('username');
    var savedPassword = localStorage.getItem('password');

    var username = document.getElementById('loginNameInput').value;
    var password = document.getElementById('loginPasswordInput').value;

    // Verifica se os dados de login correspondem aos dados salvos
    if (username === savedUsername && password === savedPassword) {
        alert('Login realizado com sucesso!');
    } else {
        alert('Nome de usuário ou senha incorretos!');
    }
}

// Função para exibir a tela de login e ocultar a tela de cadastro
function exibirTelaLogin() {
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}



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