    // ============ SISTEMA DE MENU ============
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    document.addEventListener("click", function(e) {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });

    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px)";
        });
        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });

    const cartasSibila = [
        { symbol: "🕊️", title: "A Alma (L'Anima)", meaning: "Esta carta fala da conexão espiritual e emocional. Representa o estado de alma e as questões mais profundas do ser. Pode sugerir que você está em busca de equilíbrio interno, autoconhecimento e serenidade. Muitas vezes é um sinal para que você olhe para dentro de si, se permita refletir e se reconectar com seus próprios sentimentos e desejos. Quando aparece, também pode indicar um momento de introspecção ou a necessidade de lidar com sentimentos reprimidos." },
        { symbol: "💀", title: "A Morte (La Morte)", meaning: "Embora a imagem da morte possa ser assustadora, essa carta simboliza transformação, mudanças e renovações. Não se refere necessariamente à morte física, mas ao fim de um ciclo, algo que está prestes a ser superado ou deixado para trás para dar espaço ao novo. Fala de um período de transição, onde você deve se desapegar de situações ou comportamentos antigos. Embora doloroso, é um processo necessário para um novo começo." },
        { symbol: "💍", title: "O Casamento (Il Matrimonio)", meaning: "Simboliza a união, os compromissos e as parcerias. Pode se referir a um casamento literal, mas também está ligado a acordos importantes em outras áreas da vida, como negócios e relações pessoais. Representa a estabilidade, a harmonia e a necessidade de manter o equilíbrio entre dar e receber. No entanto, também pode indicar desafios em torno da comunicação e da compreensão mútua dentro de uma relação." },
        { symbol: "✈️", title: "A Viagem (Il Viaggio)", meaning: "Esta carta indica movimento, seja físico ou emocional. Representa viagens, mudanças de ambiente e novos caminhos. Pode sugerir uma jornada literal, como uma viagem a um lugar distante, ou uma jornada interna, de transformação pessoal. A Viagem é também associada à ideia de descoberta, tanto do mundo exterior quanto do interior, com novos horizontes se abrindo à medida que você avança." },
        { symbol: "💰", title: "O Dinheiro (Il Denaro)", meaning: "Relacionada a questões materiais e financeiras, esta carta pode representar ganhos, perdas ou estabilidade econômica. Ela reflete a importância de gerir bem os recursos e alerta para o equilíbrio entre o mundo material e o espiritual. Quando aparece, pode sugerir oportunidades financeiras, mas também desafios relacionados ao consumo ou à acumulação. É uma carta que fala sobre a necessidade de ser prudente com dinheiro e recursos." },
        { symbol: "🤒", title: "A Doença (La Malattia)", meaning: "A Doença não se refere apenas à saúde física, mas também à saúde emocional e espiritual. Ela pode indicar fraqueza, vulnerabilidade ou a necessidade de parar e cuidar de si. A carta muitas vezes surge quando há um desequilíbrio na vida, quando estamos negligenciando nossos sentimentos ou nossa saúde. É um aviso para prestar atenção ao que o corpo e a mente estão pedindo, seja descanso, tratamento ou reflexão." },
        { symbol: "❤️", title: "O Amor (L'Amore)", meaning: "Uma das cartas mais positivas do baralho, ela simboliza o amor em suas diversas formas. Pode se referir a um novo amor, o fortalecimento de uma relação existente ou a cura de feridas emocionais. Esta carta fala sobre conexão, carinho e respeito mútuo. Quando aparece, é um sinal de que o amor está fluindo em sua vida, trazendo harmonia e alegria. Também pode ser um convite para nutrir os relacionamentos de maneira profunda e sincera." },
        { symbol: "☀️", title: "O Sol (Il Sole)", meaning: "O Sol é a carta da felicidade, sucesso e clareza. Ela traz luz a todas as questões e simboliza o momento de maior realização, quando tudo parece se encaixar e as possibilidades são ilimitadas. Reflete a superação de dificuldades e a chegada de tempos mais prósperos e alegres. Quando o Sol aparece, indica um período de otimismo, crescimento e a energia necessária para alcançar seus objetivos." },
        { symbol: "💎", title: "A Riqueza (La Ricchezza)", meaning: "Reflete ganhos materiais, sucesso financeiro e prosperidade. Esta carta pode indicar uma fase de estabilidade financeira, um aumento de bens ou de recursos, ou até mesmo uma herança. No entanto, ela também pode ser um lembrete de que a verdadeira riqueza não está apenas no dinheiro, mas em valores mais profundos, como a paz interior e as relações genuínas." },
        { symbol: "💼", title: "O Trabalhador (Il Lavoratore)", meaning: "O Trabalhador simboliza o esforço, a dedicação e o comprometimento com o trabalho e os objetivos. Quando aparece, pode indicar uma fase de trabalho árduo ou de foco intenso nas questões profissionais. Também pode representar a necessidade de encontrar equilíbrio entre vida pessoal e trabalho, sugerindo que você deve buscar não apenas a produtividade, mas também o prazer e a satisfação no que faz." },
        { symbol: "🌍", title: "A Carta de Destino (Il Destino)", meaning: "Essa carta fala sobre o rumo que sua vida está tomando e as forças invisíveis que moldam suas escolhas. Pode sugerir que você está em um momento crucial, onde decisões importantes precisam ser tomadas. Reflete o conceito de destino, que nos guia por caminhos inesperados, mas muitas vezes necessários para o crescimento pessoal. Quando aparece, é um convite para confiar no processo da vida, mesmo quando o futuro parece incerto." },
        { symbol: "🤥", title: "A Falsidade (La Falsità)", meaning: "A Falsidade alerta para enganos, disfarces e situações que não são o que parecem. Pode indicar que você está sendo enganado ou que alguém ao seu redor não está sendo sincero. A carta também sugere que é necessário prestar atenção aos sinais, ouvir sua intuição e não se deixar influenciar por aparências. Quando aparece, é um sinal para ser cauteloso com as intenções de outras pessoas." },
        { symbol: "👿", title: "O Inimigo (Il Nemico)", meaning: "Essa carta pode se referir a uma pessoa que está agindo contra seus interesses, seja por inveja, competitividade ou malícia. Também pode representar uma situação difícil que está se tornando um obstáculo em sua vida. Ela alerta para a necessidade de ser vigilante e proteger seus objetivos. No entanto, também pode sugerir que os maiores inimigos são os próprios medos e inseguranças." },
        { symbol: "🌈", title: "A Esperança (La Speranza)", meaning: "A Esperança traz consigo a promessa de melhores dias à frente. Esta carta fala sobre fé no futuro, confiança de que as coisas irão melhorar e a chegada de um período de cura e renovação. Quando aparece, é um sinal de que os desafios estão prestes a ser superados e que algo bom está no horizonte. Ela traz uma sensação de alívio e otimismo, encorajando você a manter a esperança." },
        { symbol: "😞", title: "A Tristeza (La Tristezza)", meaning: "Simboliza momentos de desânimo, melancolia e perda. Pode sugerir que você está atravessando uma fase difícil ou enfrentando uma decepção. A Tristeza pode indicar a necessidade de lidar com os sentimentos negativos, permitir-se sentir a dor e buscar apoio emocional. Embora seja uma carta desafiadora, ela também representa a importância de processar e liberar as emoções para poder seguir em frente." },
        { symbol: "🍀", title: "A Fortuna (La Fortuna)", meaning: "A Fortuna é a carta da boa sorte, oportunidades e momentos favoráveis. Ela traz um sinal de que as coisas estão se alinhando para que você tenha sucesso. Quando aparece, é uma mensagem positiva, indicando que as escolhas e ações tomadas têm boas chances de trazer frutos. A Fortuna é muitas vezes associada a um momento de clareza e estabilidade, onde as oportunidades estão ao seu alcance." },
        { symbol: "💖", title: "O Coração (Il Cuore)", meaning: "O Coração simboliza as emoções mais profundas, o amor e as conexões afetivas. Essa carta fala sobre relações emocionais, seja em forma de amor romântico, amizade ou conexão familiar. Pode indicar uma fase em que as questões do coração precisam de atenção, seja para fortalecer laços ou resolver conflitos. Também é um lembrete para seguir o coração em momentos de decisão." },
        { symbol: "👼", title: "O Anjo (L'Angelo)", meaning: "O Anjo representa a proteção espiritual, orientação divina e os bons presságios que vêm de forças superiores. Quando aparece, pode sugerir que você está sendo guiado ou protegido por uma presença espiritual. Essa carta é um sinal de que você não está sozinho em seus desafios e que pode contar com o apoio invisível do universo para superar dificuldades." },
        { symbol: "🔍", title: "O Mistério (Il Mistero)", meaning: "Esta carta fala sobre segredos, incertezas e aspectos ocultos de uma situação. O Mistério pode indicar que algo importante está sendo escondido de você ou que ainda não é o momento para revelar a verdade. Quando aparece, é um convite para olhar mais profundamente, questionar o que parece óbvio e confiar na sua intuição para desvendar o que está encoberto." },
        { symbol: "🎉", title: "A Alegria (La Gioia)", meaning: "A Alegria é uma carta de celebração, prazer e satisfação. Ela simboliza momentos felizes, conquistas e a felicidade genuína. Quando aparece, é um sinal de que a alegria está prestes a entrar em sua vida, seja por meio de um evento festivo, uma realização pessoal ou simplesmente pela harmonia em seus relacionamentos. A Alegria traz consigo um momento de gratidão e celebração." }
    ];   


    function sortearCartas() {
        const opcao = document.getElementById("leitura-opcao").value;
        const quantidade = opcao === "cruz" ? 7 : parseInt(opcao, 10);
        const selecionadas = cartasSibila.sort(() => 0.5 - Math.random()).slice(0, quantidade);
        const container = document.getElementById("runas-container");
        const resultContainer = document.getElementById("runas-meanings");
        
        container.innerHTML = "";
        resultContainer.innerHTML = "";
    
        selecionadas.forEach(runa => {
            container.innerHTML += `<div class="runa"><div class="runa-title">${runa.symbol}</div></div>`;
            resultContainer.innerHTML += `<h3>${runa.title}</h3><p>${runa.meaning}</p>`;
        });
    }