import { playNextMusic } from './musicPlayer.js';

// Função para lidar com o clique do usuário e iniciar a reprodução da música
function handleUserClick() {
    // Chama a função playNextMusic para iniciar a reprodução da próxima música
    playNextMusic();
    // Remove o ouvinte de evento de clique após a primeira interação do usuário
    document.removeEventListener('click', handleUserClick);
}

// Adiciona um ouvinte de evento para quando o conteúdo da página é completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um ouvinte de evento para o clique em qualquer lugar na página
    document.addEventListener('click', handleUserClick);
});

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