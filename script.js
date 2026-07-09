document.addEventListener('DOMContentLoaded', () => {
    // Lógica para alternar o Tema Escuro
    const btnTema = document.getElementById('toggleTheme');
    
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('tema-escuro');
        
        // Altera levemente o visual do botão dependendo do tema ativo
        if (document.body.classList.contains('tema-escuro')) {
            btnTema.textContent = '☀️';
        } else {
            btnTema.textContent = '🌓';
        }
    });

    // Lógica para os contadores de reações individualizados em cada artigo
    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        const btnLike = article.querySelector('.btn-like');
        const btnUp = article.querySelector('.btn-up');

        if (btnLike) {
            const countSpan = btnLike.querySelector('span');
            btnLike.addEventListener('click', () => {
                let currentCount = parseInt(countSpan.textContent, 10);
                countSpan.textContent = currentCount + 1;
            });
        }

        if (btnUp) {
            const countSpan = btnUp.querySelector('span');
            btnUp.addEventListener('click', () => {
                let currentCount = parseInt(countSpan.textContent, 10);
                countSpan.textContent = currentCount + 1;
            });
        }
    });
});
