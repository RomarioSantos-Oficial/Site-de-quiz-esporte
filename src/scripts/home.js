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


function redirecionarParaOutraPagina(pagina) {
    window.location.href = pagina;
}