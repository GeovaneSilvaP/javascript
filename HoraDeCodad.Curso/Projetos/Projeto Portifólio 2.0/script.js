//click menu

const especialidade = document.querySelector("#btn-especialidade");
const btnEspecialidade = document.querySelector("#btn-btn-hability")
const sobreMin = document.querySelector("#text-sobre");
const btnsobre = document.querySelector("#btn-sobre");
const projetos = document.querySelector("#projetos");
const btnProjet = document.querySelector("#btn-btn-projet")

btnEspecialidade.addEventListener("click", () => {
  especialidade.scrollIntoView({ behavior: "smooth" });
});

btnsobre.addEventListener("click", () =>{
  sobreMin.scrollIntoView({behavior: "smooth"});
})

btnProjet.addEventListener("click", () =>{
  projetos.scrollIntoView({behavior: "smooth"})
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



//projetos scoll
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.titulos, .text-title, .section-title', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.projetos, .image-1, .info', {delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.text-box', {delay: 700, origin: 'right'});
ScrollReveal().reveal('.projet-icons i', {delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.projeto-02, .image-2, .projeto-03, .image-3', {delay: 500, origin: 'top'});
ScrollReveal().reveal('.media-info li', {delay: 500, origin: 'left', interval: 200 });