const passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("input", function() {
    const password = this.value;

    const strengthIndicador = document.querySelector("#password-strength-indicador");

    const strengthText = document.querySelector("#password-strength-text");

    const strengths = {
        0: "Muito fraca", 
        1: "Fraca",
        2: "Moderada",
        3: "Forte",
        4: "Muito Forte",
    }

    let score = 0;

    //Requisitos
    if(password.length >= 8) score++;
    if(password.match(/[a,z]/)) score++;
    if(password.match(/[A,Z]/)) score++;
    if(password.match(/[0-9]/)) score++;
    if(password.match(/[^^a-zA-Z0-9]/)) score++;

    //Calculo da %, pq a largura  vai ser em %
    const width = (score/4) * 100;

    switch (score) {
        case 1:
            strengthIndicador.style.backgroundColor = "#FF0000"
            break;
        case 2:
            strengthIndicador.style.backgroundColor = "#ff7b00"
            break;    
        case 3:
            strengthIndicador.style.backgroundColor = "#e5ff00"
            break;
        case 4:
            strengthIndicador.style.backgroundColor = "#3cff00"
            break;    
        default:
            strengthIndicador.style.backgroundColor = "transparent"
            break;
    }

    strengthIndicador.style.width = `${width}%`;

    if(password.length > 0){
        strengthText.innerHTML = `Força: ${strengths[score]}`
    }else{
        strengthText.innerHTML = "";
    }
})