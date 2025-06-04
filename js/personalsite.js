//LINGUA PT/EN
function togglelang(lang){
    if (lang === 'pt'){
        document.getElementById('pt').classList.add('active');
        document.getElementById('en').classList.remove('active');
    }
    else if (lang === 'en'){
        document.getElementById('en').classList.add('active');
        document.getElementById('pt').classList.remove('active');
    }
}

//SOBRE MENU
function togglecategory(sobre){
    if (sobre === 'quemsou'){
        document.getElementById('quemsou').classList.add('active');
        document.getElementById('gostos').classList.remove('active');
        document.getElementById('passado').classList.remove('active');
        document.getElementById('futuro').classList.remove('active');
        document.getElementById('sobretexto').innerHTML="Olá! O meu nome é Beatriz Dias Gomes, atualmente tenho 15 anos, nasci no dia 20 de setembro de 2009. Entrei na escola EPAD em setembro de 2024 e escolhi o curso profissional de Multimédia porque sempre tive interesse por criatividade, tecnologia e comunicação visual. Desde pequena, gosto de desenhar, criar coisas e explorar novas formas de me expressar. Com o curso, estou a aprender a usar ferramentas digitais como Photoshop, Illustrator, Premiere e outras que me ajudam a transformar ideias em projetos reais. Considero-me uma pessoa curiosa, determinada e com vontade de aprender sempre mais. No futuro, gostava de trabalhar numa área onde possa juntar arte e tecnologia! Como design gráfico, edição de vídeo ou até mesmo animação ou desenvolvimento de jogos. Este site é o início da minha jornada, onde vou partilhar um pouco do que sou e do que crio.";
    }
    else if (sobre === 'gostos'){
        document.getElementById('quemsou').classList.remove('active');
        document.getElementById('gostos').classList.add('active');
        document.getElementById('passado').classList.remove('active');
        document.getElementById('futuro').classList.remove('active');
        document.getElementById('sobretexto').innerHTML="Sou uma pessoa com muitos interesses, mas como qualquer outra, tenho os meus favoritos! Adoro gatos, são os meus animais preferidos e acho fascinante como conseguem ser independentes e carinhosos ao mesmo tempo. Tenho uma grande paixão por arte, desde desenho e pintura até arte digital. Gosto de criar, imaginar e experimentar novas ideias. Também sou muito ligada à tecnologia. Gosto especialmente de programação, porque me faz sentir que estou a resolver pequenos desafios e a construir algo do zero. Além disso, adoro edição de imagem e vídeo, é uma forma de dar vida a ideias que antes só estavam na minha cabeça. No meu tempo livre, gosto de ouvir música, ver filmes e séries que me inspirem visualmente, e jogar jogos que estimulem a criatividade ou o raciocínio. Também passo algum tempo a explorar novas ferramentas digitais ou a ver tutoriais para aprender coisas novas, seja no design, animação ou mesmo no mundo da programação. Gosto de estar sempre a descobrir, a experimentar e a crescer. Os meus gostos refletem quem sou: uma mistura de curiosidade, imaginação e vontade de criar.";
    }
    else if (sobre === 'passado'){
        document.getElementById('quemsou').classList.remove('active');
        document.getElementById('gostos').classList.remove('active');
        document.getElementById('passado').classList.add('active');
        document.getElementById('futuro').classList.remove('active');
        document.getElementById('sobretexto').innerHTML="Desde pequena, sempre fui muito curiosa e criativa. Quando tinha 7 anos, comecei a apaixonar-me por desenho e pela língua inglesa! Adorava explorar palavras novas e criar as minhas próprias histórias ou personagens. Aos 9 anos, descobri o meu interesse por fotografia. Gostava de captar pequenos detalhes do dia a dia e experimentar ângulos diferentes, mesmo com uma câmara simples ou o telemóvel. Passei grande parte da infância em frente ao computador, não só a jogar, mas principalmente a aprender, explorar e criar. Fazia desenhos digitais, construía objetos com papel, editava imagens, e procurava sempre ferramentas novas para dar forma às minhas ideias. O meu gosto por Multimédia foi crescendo naturalmente, à medida que percebia que podia juntar todas essas paixões, arte, tecnologia, linguagem num só caminho. Foi essa mistura que me trouxe até ao curso de Multimédia e não me arrependo nada!";
    }
    else if (sobre === 'futuro'){
        document.getElementById('quemsou').classList.remove('active');
        document.getElementById('gostos').classList.remove('active');
        document.getElementById('passado').classList.remove('active');
        document.getElementById('futuro').classList.add('active');
        document.getElementById('sobretexto').innerHTML="Desde que cheguei à EPAD, senti-me imediatamente em casa. Adorei a escola, os colegas que conheci, as disciplinas novas e as aplicações que comecei a explorar. Foi aqui que descobri o meu gosto especial pela programação! Uma paixão que pretendo levar comigo para o futuro. O meu maior objetivo é tornar-me uma grande programadora, com competências em várias áreas: desenvolvimento de jogos, programação web e muito mais. Quero ser excelente naquilo que faço e construir um caminho sólido naquilo que realmente me apaixona. Sei que o futuro pode ter surpresas, e se por algum motivo esse plano não resultar, não vou desistir. Também tenho interesse em edição de vídeo e imagem, fotografia e web design, áreas onde posso continuar a expressar a minha criatividade e talento. Independentemente do rumo que seguir, sei que vou lutar pelos meus objetivos. Estou pronta para trabalhar, aprender e ultrapassar os desafios que surgirem. Não vou desistir até conseguir alcançar aquilo que realmente quero.";
    }
}

//NAVEGACAO MENU
function nav(navigation){
    if (navigation === 'inicio'){
        document.getElementById('inicio').classList.add('active');
        document.getElementById('buttaoinicio').classList.remove('hide');
        document.getElementById('sobre').classList.remove('active');
        document.getElementById('buttaosobre').classList.add('hide');
        document.getElementById('projetos').classList.remove('active');
        document.getElementById('buttaoprojetos').classList.add('hide');
        document.getElementById('contactos').classList.remove('active');
        document.getElementById('buttaocontactos').classList.add('hide');
    }
    else if (navigation === 'sobre'){
        document.getElementById('inicio').classList.remove('active');
        document.getElementById('buttaoinicio').classList.add('hide');
        document.getElementById('sobre').classList.add('active');
        document.getElementById('buttaosobre').classList.remove('hide');
        document.getElementById('projetos').classList.remove('active');
        document.getElementById('buttaoprojetos').classList.add('hide');
        document.getElementById('contactos').classList.remove('active');
        document.getElementById('buttaocontactos').classList.add('hide');
    }
    else if (navigation === 'projetos'){
        document.getElementById('inicio').classList.remove('active');
        document.getElementById('buttaoinicio').classList.add('hide');
        document.getElementById('sobre').classList.remove('active');
        document.getElementById('buttaosobre').classList.add('hide');
        document.getElementById('projetos').classList.add('active');
        document.getElementById('buttaoprojetos').classList.remove('hide');
        document.getElementById('contactos').classList.remove('active');
        document.getElementById('buttaocontactos').classList.add('hide');
    }
    else if (navigation === 'contactos'){
        document.getElementById('inicio').classList.remove('active');
        document.getElementById('buttaoinicio').classList.add('hide');
        document.getElementById('sobre').classList.remove('active');
        document.getElementById('buttaosobre').classList.add('hide');
        document.getElementById('projetos').classList.remove('active');
        document.getElementById('buttaoprojetos').classList.add('hide');
        document.getElementById('contactos').classList.add('active');
        document.getElementById('buttaocontactos').classList.remove('hide');
    }
}