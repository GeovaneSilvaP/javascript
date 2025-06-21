//click menu

const especialidade = document.querySelector("#btn-especialidade");
const btnEspecialidade = document.querySelector("#btn-btn-hability")
const sobreMin = document.querySelector("#text-sobre");
const btnsobre = document.querySelector("#btn-sobre");


btnEspecialidade.addEventListener("click", () => {
  especialidade.scrollIntoView({ behavior: "smooth" });
});

btnsobre.addEventListener("click", () =>{
  sobreMin.scrollIntoView({behavior: "smooth"});
})


// Seleciona o container e a sessão
const container = document.querySelector("#container-imgs");
const sessao = document.querySelector("#gatilho");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      container.classList.add('visivel');
    } else {
      container.classList.remove('visivel');
    }
  });
}, {
  threshold: 0.5
});

observer.observe(sessao)


// Create geometric shapes
function createShapes() {
  const background = document.getElementById('geometric-background');
  const shapeTypes = ['square', 'circle', 'triangle', 'rectangle'];
  
  for (let i = 0; i < 40; i++) {
    const shape = document.createElement('div');
    const shapeClass = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    shape.className = `shape ${shapeClass}`;
    
    // Random positions
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Random animation properties
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 10;
    
    // Apply styles
    shape.style.left = `${posX}%`;
    shape.style.top = `${posY}%`;
    shape.style.animationDelay = `${delay}s`;
    shape.style.animationDuration = `${duration}s`;
    
    background.appendChild(shape);
  }
}

// Create particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random positions
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Random animation properties
    const delay = Math.random() * 8;
    const duration = Math.random() * 4 + 4;
    
    // Apply styles
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    
    particlesContainer.appendChild(particle);
  }
}

// Mouse movement interaction
function addMouseInteraction() {
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
      const speed = 0.05;
      const shapeX = parseFloat(shape.style.left);
      const shapeY = parseFloat(shape.style.top);
      
      shape.style.left = `${shapeX + (x - 0.5) * speed}%`;
      shape.style.top = `${shapeY + (y - 0.5) * speed}%`;
    });
  });
}

// Initialize animation
document.addEventListener('DOMContentLoaded', () => {
  createShapes();
  createParticles();
  addMouseInteraction();
});

//LOGO


const logo = document.querySelector('.logo');
    const button = document.getElementById('rotateBtn');
    let rotations = 0;

    // Bouncing animation (loop)
    anime({
      targets: '.logo',
      scale: [
        { value: 1.25, duration: 1000, easing: 'easeInOutQuad' },
        { value: 1, duration: 1000, easing: 'easeOutElastic(1, .5)' }
      ],
      loop: true,
      direction: 'alternate',
      delay: 250
    });

//img gato
const gato = document.querySelector(".img-sobre");
const gatoPonto = document.querySelector("#gatoPonto");

const observeGato = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gato.classList.add('visivel');
    } else {
      gato.classList.remove('visivel');
    }
  });
}, {
  threshold: 0.5
});

observeGato.observe(gatoPonto);
