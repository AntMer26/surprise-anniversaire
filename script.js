// Déplacer le bouton "Non" partout sur l'écran après un délai
function startButtonAnimation() {
    const noBtn = document.getElementById('noBtn');
    
    // Commencer l'animation après 500ms
    setTimeout(() => {
        setInterval(moveButton, 2000);
    }, 500);
}

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Générer des positions aléatoires dans l'écran
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 50;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.pointerEvents = 'none';
}

// Aller à la page de la surprise
function goToSurprise() {
    const questionPage = document.getElementById('questionPage');
    const surprisePage = document.getElementById('surprisePage');
    
    questionPage.classList.add('hidden');
    surprisePage.classList.remove('hidden');
    
    // Lancer les confettis
    launchConfetti();
}

// Lancer des confettis
function launchConfetti() {
    const colors = ['#a8d5ff', '#d4a5ff', '#6ba3d4', '#ffd4e5'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        const duration = 2 + Math.random() * 1;
        const keyframes = `
            @keyframes confetti${i} {
                0% {
                    top: -10px;
                    opacity: 1;
                    transform: translateX(0) rotate(0deg);
                }
                100% {
                    top: 100vh;
                    opacity: 0;
                    transform: translateX(${(Math.random() - 0.5) * 200}px) rotate(360deg);
                }
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = keyframes;
        document.head.appendChild(style);
        
        confetti.style.animation = `confetti${i} ${duration}s ease-out forwards`;
        
        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

// Démarrer l'animation du bouton au chargement
window.addEventListener('load', startButtonAnimation);
