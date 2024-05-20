document.addEventListener("DOMContentLoaded", function() {
    // Esconde a tela de cadastro ao carregar o HTML
    document.getElementById("cadastro").style.display = "none";

    document.getElementById("signupLink").addEventListener("click", function(event) {
        event.preventDefault();
        exibirTelaCadastro();
    });

    document.getElementById("signupLong").addEventListener("click", function(event) {
        event.preventDefault();
        exibirTelaLogin();
    });

    // Verifica se já existem dados salvos no localStorage
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        document.getElementById("login").style.display = "block"; // Exibe a tela de login se houver dados salvos
    }

    // Adiciona evento de entrada aos campos de entrada de nome de usuário e senha
    document.getElementById("usernameInput").addEventListener("input", validarEntradaCadastro);
    document.getElementById("passwordInput").addEventListener("input", validarEntradaCadastro);
});

function exibirTelaCadastro() {
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastro").style.display = "block";
}

function validarEntradaCadastro() {
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    var cadastrarButton = document.getElementById("cadastrarButton");

    // Habilita o botão de cadastro se o nome de usuário tiver pelo menos 3 caracteres e a senha tiver pelo menos 4 caracteres
    if (username.length >= 3 && password.length >= 4) {
        cadastrarButton.disabled = false;
    } else {
        cadastrarButton.disabled = true;
    }
}

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

function logar() {
    var savedUsername = localStorage.getItem("username");
    var savedPassword = localStorage.getItem("password");

    var username = document.getElementById("loginNameInput").value;
    var password = document.getElementById("loginPasswordInput").value;

    // Verifica se os dados de login correspondem aos dados salvos
    if (username === savedUsername && password === savedPassword) {
        // alert("Login realizado com sucesso!");
        // // Redireciona para a outra página HTML
        window.location.href = "./src/html/home.html";
    } else {
        alert("Nome de usuário ou senha incorretos!");
        exibirTelaCadastro();
    }
}

function exibirTelaLogin() {
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("login").style.display = "block";
}
