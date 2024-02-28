// Função para cadastrar o usuário
function cadastrar() {
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    // Verifica se a senha tem pelo menos 4 caracteres
    if (password.length < 4) {
        alert("A senha deve ter pelo menos 4 caracteres.");
        return;
    }

    // Salva os dados no localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Exibe a tela de login após o cadastro
    exibirTelaLogin();

    // Limpa os campos de entrada
    document.getElementById("usernameInput").value = "";
    document.getElementById("passwordInput").value = "";
}

// Função para realizar o login
function logar() {
    var savedUsername = localStorage.getItem("username");
    var savedPassword = localStorage.getItem("password");

    var username = document.getElementById("loginNameInput").value;
    var password = document.getElementById("loginPasswordInput").value;

    // Verifica se os dados de login correspondem aos dados salvos
    if (username === savedUsername && password === savedPassword) {
        alert("Login realizado com sucesso!");
        // Aqui você pode redirecionar o usuário para a página inicial ou realizar outras ações após o login bem-sucedido
    } else {
        alert("Nome de usuário ou senha incorretos!");
    }
}

// Função para exibir a tela de cadastro e ocultar a tela de login
function exibirTelaCadastro() {
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastro").style.display = "block";
}

// Função para exibir a tela de login e ocultar a tela de cadastro
function exibirTelaLogin() {
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("login").style.display = "block";
}

// Adiciona um ouvinte de evento ao link de cadastro
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signupLink").addEventListener("click", function(event) {
        event.preventDefault();
        exibirTelaCadastro();
    });

    // Verifica se já existem dados salvos no localStorage
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        // Exibe a tela de login se houver dados salvos
        exibirTelaLogin();
    }
});