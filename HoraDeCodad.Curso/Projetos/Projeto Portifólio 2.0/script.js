const btnSobre = document.querySelector("#btn-sobre");
const sobre = document.querySelector("#sobre");
const especialidade = document.querySelector("#btn-especialidade");
const btnEspecialidade = document.querySelector("#btn-btn-hability")
const container = document.querySelector("#container-imgs");
const sessao = document.querySelector("#gatilho");

//click menu
btnSobre.addEventListener("click", () =>{
  sobre.scrollIntoView({behavior: "smooth"});
});

btnEspecialidade.addEventListener("click", () => {
  especialidade.scrollIntoView({behavior: "smooth"});
});

// Seleciona o container e a sessão
const observer = new IntersectionObserver((entries) =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      container.classList.add('visivel');
    }else{
      container.classList.remove('visivel')
    }
  });
}, {
  threshold: 0.5
});

observer.observe(sessao)