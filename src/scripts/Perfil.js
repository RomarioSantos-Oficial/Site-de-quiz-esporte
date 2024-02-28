document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o nome de usuário está salvo no armazenamento local
    var username = localStorage.getItem('username');

    // Se o nome de usuário estiver salvo, exibe-o na página
    if (username) {
        document.getElementById('username').textContent = "Usuário: " + username;
    } else {
        // Se não houver nome de usuário salvo, redireciona para a página de login
        window.location.href = './login.html';
    }

    // Lista de URLs das imagens de perfil
    var profileImages = [
        "../assets/icons/copa.png",
        "../assets/icons/Fla.png",
        "../assets/icons/cor.png",
        // Adicione mais URLs de imagens conforme necessário
    ];

    // Obtém um índice aleatório para selecionar uma imagem de perfil
    var randomIndex = Math.floor(Math.random() * profileImages.length);

    // Define a imagem selecionada como a foto do perfil
    var profilePicture = document.getElementById('profilePicture');
    profilePicture.src = profileImages[randomIndex];
});


