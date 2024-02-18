document.addEventListener('DOMContentLoaded', function() {
    // Seletores dos elementos do HTML
    const quizContainer = document.querySelector('.quiz-container');
    const questionElement = quizContainer.querySelector('.question');
    const optionsElement = quizContainer.querySelector('.options');
    const resultElement = quizContainer.querySelector('.result');
    const timeContainer = quizContainer.querySelector('.time-container');

    const timerElement = document.createElement('div'); // Elemento para exibir o cronômetro
    timerElement.id = 'time-circle'; // Define o id do elemento para manipulação posterior
    timerElement.classList.add('timer');

    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Confirmar';
    confirmButton.classList.add('confirm-button');

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Próxima Pergunta';
    nextButton.classList.add('next-button');

    const finishButton = document.createElement('button');
    finishButton.textContent = 'Finalizar';
    finishButton.classList.add('finish-button');
    finishButton.style.display = 'none'; // Inicialmente oculto

    // Seleciona o elemento do cronômetro total
    const totalTimeElement = document.getElementById('total-time');

    // Adiciona o cronômetro à tela dentro da div time-container
    timeContainer.appendChild(timerElement);

    // Variáveis para controle do jogo
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedAnswer = null;
    let timeLeft = 30; // Tempo inicial de 30 segundos
    let timerInterval; // Variável para armazenar o intervalo do cronômetro
    let timerStarted = false; // Variável para rastrear se o cronômetro foi iniciado

    // Variáveis para controlar o tempo total de jogo
    let totalGameTime = 0;
    let totalTimerInterval;

    // Função para monitorar e controlar o início do cronômetro
    function startTimerIfNeeded() {
        if (!timerStarted) {
            startTimer(); // Inicia o cronômetro apenas se ainda não estiver iniciado
        }
    }

    // Função para iniciar o cronômetro total
    function startTotalTimer() {
        totalTimerInterval = setInterval(() => {
            totalGameTime++;
            updateTotalTimerDisplay();
        }, 1000);
    }

    // Função para atualizar a exibição do cronômetro total
    function updateTotalTimerDisplay() {
        const minutes = Math.floor(totalGameTime / 60);
        const seconds = totalGameTime % 60;
        const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        totalTimeElement.textContent = formattedTime;
    }

    // Função para iniciar o cronômetro
    function startTimer() {
        timeLeft = 30; // Reinicia o tempo para 30 segundos
        clearInterval(timerInterval); // Limpa o intervalo do cronômetro anterior, se existir
        updateTimerDisplay(); // Atualiza a exibição do cronômetro
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                checkTimeIsUp();
                clearInterval(timerInterval); // Pare o cronômetro completamente
            }
        }, 1000);
        timerStarted = true; // Define a variável de controle como verdadeira
    }

    // Função para atualizar a exibição do cronômetro
    function updateTimerDisplay() {
        const timerElement = document.getElementById('time-circle');
        if (timerElement) {
            timerElement.textContent = timeLeft < 10 ? `0${timeLeft}` : timeLeft; // Adiciona um zero à esquerda se o tempo for menor que 10
        }
    }

    // Função para exibir a próxima pergunta
    function displayQuestion() {
        const currentQuestion = selectedQuestions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = '';
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.addEventListener('click', () => selectAnswer(button, option));
            optionsElement.appendChild(button);
        });
        confirmButton.disabled = false; // Habilita o botão de confirmação
        nextButton.disabled = true; // Desabilita o botão "Próxima Pergunta"
        optionsElement.appendChild(confirmButton); // Adiciona o botão de confirmação
        if (currentQuestionIndex === selectedQuestions.length - 1) {
            optionsElement.appendChild(finishButton); // Adiciona o botão "Finalizar" se for a última pergunta
        } else {
            optionsElement.appendChild(nextButton); // Adiciona o botão "Próxima Pergunta" se não for a última pergunta
        }

        startTimerIfNeeded(); // Verifica e inicia o cronômetro se necessário
    }

    // Função para avançar para a próxima pergunta
    function nextQuestion() {
        currentQuestionIndex++;
        timerStarted = false; // Reinicia a variável de controle do cronômetro
        displayQuestion();
        resultElement.textContent = '';
        resultElement.classList.remove('correct', 'wrong');
    }

    // Função para selecionar uma resposta
    function selectAnswer(button, selectedOption) {
        const buttons = optionsElement.querySelectorAll('.option');
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedAnswer = selectedOption;
    }

    // Função para verificar se o tempo acabou
    function checkTimeIsUp() {
        timeLeft = 0;
        clearInterval(timerInterval); // Para o cronômetro

        optionsElement.querySelectorAll('.option').forEach(button => {
            button.disabled = true; // Desabilita os botões de opção
        });

        confirmButton.disabled = true; // Desabilita o botão de confirmação

        // Verifica se uma resposta foi selecionada
        if (!selectedAnswer) {
            selectedAnswer = 'resposta inválida'; // Define a resposta como inválida
        }

        checkAnswer(); // Chama a função para verificar a resposta quando o tempo acabar
    }

    // Função para verificar a resposta
    function checkAnswer() {
        clearInterval(timerInterval); // Para o cronômetro

        if (!selectedAnswer) {
            selectedAnswer = 'resposta inválida'; // Define a resposta como inválida
        }

        const currentQuestion = selectedQuestions[currentQuestionIndex];
        const explanation = currentQuestion.explanation;

        if (selectedAnswer === currentQuestion.answer) {
            score += 10; // Adiciona 10 pontos para cada resposta correta (ajuste conforme necessário)
            resultElement.textContent = `Resposta correta! ${explanation}`;
            resultElement.classList.add('correct');
        } else {
            // Não concede pontos ou subtrai pontos para respostas incorretas (ajuste conforme necessário)
            // Por exemplo: score -= 5; para subtrair 5 pontos por resposta incorreta
            resultElement.textContent = `Resposta errada. A resposta correta é: ${currentQuestion.answer}. ${explanation}`;
            resultElement.classList.add('wrong');
        }

        confirmButton.disabled = true; // Desabilita o botão de confirmação após verificar a resposta
        nextButton.disabled = false; // Habilita o botão "Próxima Pergunta"
        if (currentQuestionIndex === selectedQuestions.length - 1) {
            nextButton.disabled = true; // Desabilita o botão "Próxima Pergunta" na última pergunta
            finishButton.style.display = 'inline-block'; // Exibe o botão "Finalizar" na última pergunta
        }
    }

    // Função para exibir o resultado final
    function displayResult() {
        questionElement.textContent = '';
        optionsElement.innerHTML = '';
        const totalQuestions = selectedQuestions.length;
        const incorrectAnswers = totalQuestions - score / 10; // Calcula o número de respostas incorretas
        resultElement.textContent = `Você acertou ${score / 10} de ${totalQuestions} questões. ${incorrectAnswers} questões erradas. Pontuação total: ${score}`;

        // Exibir o cronômetro total juntamente com a frase
        totalTimeElement.style.display = 'inline-block'; // Exibe o cronômetro total
        const finalTimeMessage = document.createElement('div');
        finalTimeMessage.textContent = 'Seu tempo para responder todas as perguntas foi de:';
        finalTimeMessage.style.color = 'black'; // Define a cor da fonte da mensagem
        finalTimeMessage.style.marginTop = '20px'; // Adiciona margem superior para separar da pontuação
        timeContainer.appendChild(finalTimeMessage);
    }

    // Event listener para o botão de confirmação
    confirmButton.addEventListener('click', function() {
        checkAnswer();
    });

    // Event listener para o botão "Próxima Pergunta"
    nextButton.addEventListener('click', nextQuestion);

   // Event listener para o botão "Finalizar"
    finishButton.addEventListener('click', function() {
        clearInterval(totalTimerInterval); // Para o cronômetro total
        displayResult(); // Exibe o resultado final
        document.getElementById('time-circle').style.display = 'none'; // Oculta o cronômetro de 30 segundos
        totalTimeElement.style.color = 'black'; // Define a cor do cronômetro total como preto
        // totalTimeElement.style.backgroundColor = 'lightgreen'; // Define o fundo do cronômetro total como verde claro
    });

    // Seleciona aleatoriamente as 30 perguntas
    const selectedQuestions = selectRandomQuestions();
    // Exibe a primeira pergunta quando o documento é carregado
    displayQuestion();
    // Chame a função startTimer para iniciar o cronômetro
    startTimer();
    // Inicia o cronômetro total
    startTotalTimer();

    // Função para selecionar aleatoriamente as perguntas sem repetição
    function selectRandomQuestions() {
        const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        return shuffledQuestions.slice(0, 30); // Altere o número 20 para o número desejado de perguntas a serem exibidas
    }

});

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