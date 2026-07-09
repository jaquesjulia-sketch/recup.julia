document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Lógica para alternar o Tema Escuro
    // ==========================================
    const btnTema = document.getElementById('toggleTheme');
    
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            document.body.classList.toggle('tema-escuro');
            
            if (document.body.classList.contains('tema-escuro')) {
                btnTema.textContent = '☀️';
            } else {
                btnTema.textContent = '🌓';
            }
        });
    }

    // ==========================================
    // 2. Lógica para os contadores de reações nos artigos
    // ==========================================
    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        const btnLike = article.querySelector('.btn-like');
        const btnUp = article.querySelector('.btn-up');

        if (btnLike) {
            const countSpan = btnLike.querySelector('span');
            btnLike.addEventListener('click', () => {
                let currentCount = parseInt(countSpan.textContent, 10) || 0;
                countSpan.textContent = currentCount + 1;
            });
        }

        if (btnUp) {
            const countSpan = btnUp.querySelector('span');
            btnUp.addEventListener('click', () => {
                let currentCount = parseInt(countSpan.textContent, 10) || 0;
                countSpan.textContent = currentCount + 1;
            });
        }
    });

    // ==========================================
    // 3. NOVO: Cronômetro para Rolas (Treino)
    // ==========================================
    let tempoRestante = 300; // 5 minutos em segundos (tempo padrão de um rola)
    let timerId = null;
    const displayTimer = document.getElementById('timer-display');
    const btnStart = document.getElementById('btn-start-timer');
    const btnPause = document.getElementById('btn-pause-timer');

    function atualizarDisplay() {
        if (!displayTimer) return;
        const minutos = Math.floor(tempoRestante / 60);
        const segundos = tempoRestante % 60;
        displayTimer.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }

    if (btnStart && btnPause) {
        btnStart.addEventListener('click', () => {
            if (timerId !== null) return; // Evita duplicar o timer
            
            timerId = setInterval(() => {
                if (tempoRestante > 0) {
                    tempoRestante--;
                    atualizarDisplay();
                } else {
                    clearInterval(timerId);
                    timerId = null;
                    alert("Tempo esgotado! Parou o rola!");
                    tempoRestante = 300; // Reseta para 5 minutos
                    atualizarDisplay();
                }
            }, 1000);
        });

        btnPause.addEventListener('click', () => {
            clearInterval(timerId);
            timerId = null;
        });
    }

    // ==========================================
    // 4. NOVO: Filtro de Posições/Técnicas por Faixa
    // ==========================================
    const filtroFaixa = document.getElementById('filtro-faixa');
    const tecnicas = document.querySelectorAll('.tecnica-item');

    if (filtroFaixa) {
        filtroFaixa.addEventListener('change', (e) => {
            const faixaSelecionada = e.target.value;

            tecnicas.forEach(tecnica => {
                // Se for 'todas' ou o dataset da técnica bater com a faixa, mostra. Se não, esconde.
                if (faixaSelecionada === 'todas' || tecnica.dataset.faixa === faixaSelecionada) {
                    tecnica.style.display = 'block';
                } else {
                    tecnica.style.display = 'none';
                }
            });
        });
    }
});
