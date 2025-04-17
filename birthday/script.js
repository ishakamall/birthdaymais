// Heart Animation
const btn = document.getElementById('surpriseBtn');
const colors = ['#ff4081', '#d81b60', '#c2185b', '#ad1457', '#880e4f'];

btn.addEventListener('click', () => {
    // Create 30 floating hearts
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
    // Change background color
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);
    
    // Remove hearts after 5 seconds
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Bubble and Envelope Functionality
const loveBtn = document.getElementById('loveBtn');
const envelopePopup = document.getElementById('envelopePopup');
const closeBtn = document.getElementById('closeBtn');

loveBtn.addEventListener('click', () => {
    // Create bubble burst effect
    createBubbles();
    
    // Show envelope after a short delay
    setTimeout(() => {
        envelopePopup.style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.envelope-flap').style.transform = 'rotateX(180deg)';
            document.querySelector('.letter').style.transform = 'translateY(0)';
        }, 500);
    }, 800);
});

closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelector('.letter').style.transform = 'translateY(100%)';
    document.querySelector('.envelope-flap').style.transform = 'rotateX(0deg)';
    setTimeout(() => {
        envelopePopup.style.display = 'none';
    }, 500);
});

function createBubbles() {
    for (let i = 0; i < 30; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.top = Math.random() * 100 + 'vh';
        bubble.style.width = (Math.random() * 30 + 10) + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.animationDuration = (Math.random() * 0.5 + 0.3) + 's';
        bubble.style.backgroundColor = getRandomPastelColor();
        document.body.appendChild(bubble);
        
        setTimeout(() => {
            bubble.remove();
        }, 500);
    }
}

function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsla(${hue}, 100%, 85%, 0.7)`;
}

// Calendar Functionality
const dateBtn = document.getElementById('dateBtn');
const calendarPopup = document.getElementById('calendarPopup');

dateBtn.addEventListener('click', () => {
    calendarPopup.style.display = 'flex';
});

// Close popups when clicking outside
envelopePopup.addEventListener('click', (e) => {
    if (e.target === envelopePopup) {
        closeBtn.click();
    }
});

calendarPopup.addEventListener('click', (e) => {
    if (e.target === calendarPopup) {
        calendarPopup.style.display = 'none';
    }
});