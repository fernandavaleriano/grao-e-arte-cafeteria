const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    reset: true
});

sr.reveal('.hero', { delay: 100 });
sr.reveal('.secao-sobre', { delay: 200 });
sr.reveal('.coluna-imagem', { origin: 'left', delay: 300 });
sr.reveal('.coluna-texto', { origin: 'right', delay: 300 });

sr.reveal('.subtitulo-cardapio', { delay: 200 });
sr.reveal('.flex-destaques', { delay: 300 });
sr.reveal('.cardapio-lista', { delay: 500 });

// Função para pausar/dar play no vídeo ao clicar
const video360 = document.getElementById('video-360');

video360.addEventListener('click', () => {
    if (video360.paused) {
        video360.play();
    } else {
        video360.paused = true;
    }
});