// Déplacer le bouton "Non" partout sur l'écran
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Générer des positions aléatoires
    const randomX = (Math.random() - 0.5) * 400;
    const randomY = (Math.random() - 0.5) * 400;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Changer le bouton "Non" en "Oui"
function changeToYes() {
    const noBtn = document.getElementById('noBtn');
    noBtn.textContent = 'Oui';
    noBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    noBtn.style.color = 'white';
    noBtn.style.border = '2px solid transparent';
    noBtn.onmouseover = null;
    noBtn.onclick = goToSurprise;
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
    const colors = ['#667eea', '#764ba2', '#ff6b6b', '#4ecdc4'];
    
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
