document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('surpriseBtn');
    const message = document.getElementById('message');

    btn.addEventListener('click', () => {
        message.textContent = "Happy Birthday Dharini! 🎉 Your friendship is the best gift! 💖";
        message.style.opacity = '1';
        
        // Add floating hearts animation
        for(let i = 0; i < 50; i++) {
            createHeart();
        }
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animation = `float ${Math.random() * 3 + 2}s linear`;
        heart.innerHTML = '💖';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }
});

// Add animation style
const style = document.createElement('style');
style.textContent = `
@keyframes float {
    to {
        transform: translateY(-100vh) rotate(360deg);
    }
}`;
document.head.appendChild(style);