const questions = [
    {
      question: "Qual foi o ano da fundação do Clube de Regatas do Flamengo?",
      options: ["1895", "1902", "1912", "1921"],
      answer: "1895",
      explanation: "O Clube de Regatas do Flamengo foi fundado em 17 de novembro de 1895, inicialmente como um clube de remo. Mais tarde, expandiu suas atividades para incluir o futebol e tornou-se um dos clubes mais populares do Brasil."
    },
    {
      question: "Quantos títulos da Copa Libertadores da América o Flamengo conquistou até 2022?",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "Até 2022, o Flamengo conquistou dois títulos da Copa Libertadores da América. O primeiro foi em 1981, e o segundo foi em 2019, quando derrotou o River Plate na final."
    },
    {
      question: "Qual estádio é conhecido como 'Casa do Flamengo'?",
      options: ["Maracanã", "São Januário", "Morumbi", "Mineirão"],
      answer: "Maracanã",
      explanation: "O Maracanã é conhecido como a 'Casa do Flamengo' devido à forte ligação emocional entre o clube e o estádio. O Flamengo tem uma longa história de jogos importantes e vitórias memoráveis no Maracanã."
    },
    {
      question: "Quem foi o técnico do Flamengo na conquista da Copa Libertadores de 2019?",
      options: ["Jorge Jesus", "Renato Gaúcho", "Tite", "Abel Braga"],
      answer: "Jorge Jesus",
      explanation: "Jorge Jesus foi o técnico responsável por liderar o Flamengo à histórica conquista da Copa Libertadores da América em 2019. Sua abordagem tática e seu estilo de jogo ofensivo foram fundamentais para o sucesso da equipe."
    },
    {
      question: "Quantos títulos brasileiros o Flamengo conquistou até 2022?",
      options: ["5", "6", "7", "8"],
      answer: "8",
      explanation: "Até 2022, o Flamengo conquistou oito títulos brasileiros. O clube é um dos mais bem-sucedidos do país nessa competição, tendo ganhado o campeonato em várias ocasiões ao longo de sua história."
    },
    {
      question: "Qual jogador do Flamengo foi artilheiro do Campeonato Brasileiro de 2019?",
      options: ["Gabigol", "Bruno Henrique", "Arrascaeta", "Everton Ribeiro"],
      answer: "Gabigol",
      explanation: "Gabigol foi o artilheiro do Campeonato Brasileiro de 2019, ajudando o Flamengo a conquistar mais um título nacional. Suas performances consistentes e seus gols decisivos foram fundamentais para o sucesso da equipe."
    },
    {
      question: "Qual é o mascote oficial do Flamengo?",
      options: ["Urubu", "Leão", "Águia", "Tigre"],
      answer: "Urubu",
      explanation: "O mascote oficial do Flamengo é o Urubu. A escolha desse símbolo está relacionada à cor preta do animal, que também é uma das cores predominantes no uniforme do clube."
    },
    {
      question: "Em qual estádio o Flamengo conquistou sua primeira Copa Libertadores da América?",
      options: ["Maracanã", "Estádio Centenário", "Defensores del Chaco", "Monumental de Lima"],
      answer: "Estádio Centenário",
      explanation: "O Flamengo conquistou sua primeira Copa Libertadores da América no Estádio Centenário, em Montevidéu, no Uruguai."
    },
    {
      question: "Qual foi o placar da final da Copa Libertadores da América de 2019, na qual o Flamengo venceu?",
      options: ["2-0", "2-1", "1-0", "4-2"],
      answer: "2-1",
      explanation: "O placar da final da Copa Libertadores da América de 2019, na qual o Flamengo venceu o River Plate, foi 2-1. O Flamengo virou o jogo nos minutos finais, conquistando seu segundo título na história da competição."
    },
    {
        question: "Quem é o maior artilheiro da história do Flamengo?",
        options: ["Zico", "Adriano", "Romário", "Gabigol"],
        answer: "Zico",
        explanation: "Zico é o maior artilheiro da história do Flamengo. Ele marcou um total de 508 gols durante sua carreira no clube, estabelecendo um recorde que permanece até hoje."
      },
      {
        question: "Qual foi o primeiro título internacional conquistado pelo Flamengo?",
        options: ["Copa Libertadores da América", "Copa Intercontinental", "Copa Mercosul", "Copa Rio"],
        answer: "Copa Libertadores da América",
        explanation: "O primeiro título internacional conquistado pelo Flamengo foi a Copa Libertadores da América, em 1981. Foi uma conquista histórica que solidificou a posição do clube como uma potência no futebol sul-americano."
      },
      {
        question: "Quem foi o técnico do Flamengo na conquista do Mundial Interclubes em 1981?",
        options: ["Cláudio Coutinho", "Telê Santana", "Zagallo", "Paulo César Carpegiani"],
        answer: "Paulo César Carpegiani",
        explanation: "Paulo César Carpegiani foi o técnico responsável por liderar o Flamengo à conquista do Mundial Interclubes em 1981. Sua equipe derrotou o Liverpool na final, tornando-se campeã mundial pela primeira vez na história do clube."
      },
      {
        question: "Qual foi o jogador que marcou o gol do título do Campeonato Brasileiro de 2009 pelo Flamengo?",
        options: ["Petkovic", "Adriano", "David Bráz", "Ronaldo Angelim"],
        answer: "Ronaldo Angelim",
        explanation: "o gol do título do Campeonato Brasileiro de 2009 pelo Flamengo foi marcado por Ronaldo Angelim. Sua cabeçada nos acréscimos da última rodada contra o Grêmio garantiu a vitória por 2-1 e o título para o Flamengo. Ronaldo Angelim é lembrado com carinho pelos torcedores do Flamengo por esse gol histórico. "
      },
      {
        question: "Qual jogador do Flamengo foi eleito o melhor jogador da Copa Libertadores de 2019?",
        options: ["Bruno Henrique", "Gabriel Barbosa", "Éverton Ribeiro", "Arrascaeta"],
        answer: "Gabriel Barbosa",
        explanation: "Gabriel Barbosa foi eleito o melhor jogador da Copa Libertadores de 2019. Suas performances impressionantes e seus gols importantes foram cruciais para o sucesso do Flamengo na competição."
      },
      {
        question: "Qual é o conhecido porpulamente o nome do centro de treinamento utilizado pelo Flamengo?",
        options: ["Ninho do Urubu", "Maracanã", "Gávea", "São Januário"],
        answer: "Ninho do Urubu",
        explanation: "O centro de treinamento utilizado pelo Flamengo é chamado de Ninho do Urubu. Localizado na cidade do Rio de Janeiro, é onde a equipe realiza seus treinos e preparações para os jogos."
      },
      {
        question: "Qual foi o resultado da primeira partida do Flamengo no Mundial Interclubes de 1981?",
        options: ["3-0 (vitória)", "2-1 (vitória)", "1-1 (empate)", "0-2 (derrota)"],
        answer: "3-0 (vitória)",
        explanation: "O Flamengo venceu sua primeira partida no Mundial Interclubes de 1981 pelo placar de 3-0 contra o  Liverpool da Inglaterra."
      },
      {
        question: "Qual foi o técnico do Flamengo na conquista da Copa Mercosul de 1999?",
        options: ["Zagallo", "Vanderlei Luxemburgo", "Carlinhos", "Joel Santana"],
        answer: "Carlinhos",
        explanation: "Carlinhos foi o técnico responsável por liderar o Flamengo à conquista da Copa Mercosul de 1999. Sob o comando de Carlinhos, o Flamengo derrotou o Palmeiras na final e ergueu o troféu do torneio."
      },
      {
        question: "Quem foi o presidente do Flamengo durante a conquista da Copa Libertadores de 1981?",
        options: ["	Antônio Augusto Dunshee de Abranches", "Eduardo Fernando de M. Mota", "Márcio Braga", "George Helal"],
        answer: "	Antônio Augusto Dunshee de Abranches",
        explanation: "	Antônio Augusto Dunshee de Abranches foi o presidente do Flamengo durante a conquista da Copa Libertadores de 1981. Anos depois ele renucio do cargo em 1983"
      },
      {
        question: "Qual foi o jogador que marcou o primeiro gol do Flamengo na final da Copa Libertadores de 2019?",
        options: ["Bruno Henrique", "Gabigol", "Éverton Ribeiro", "Arrascaeta"],
        answer: "Gabigol",
        explanation: "Gabigol marcou o primeiro gol do Flamengo na final da Copa Libertadores de 2019. Seu gol foi crucial para a virada histórica da equipe sobre o River Plate, que resultou na conquista do título."
      },
  ];
  