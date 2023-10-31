function validateInput(input) {
    input.addEventListener('input', function (event) {
        const value = event.target.value;
        event.target.value = value.replace(/[^0-9]/g, input.value); //Se o caracter digitado for '+' ou '-' o valor é apagado
    });
}

validateInput(document.querySelector('#vit'));
validateInput(document.querySelector('#der'));

function calc(win, loses){
    win = document.getElementById("vit").value;
    loses = document.getElementById("der").value;

    let result = win - loses;
    let categoria;
    if (result < 10) {
        categoria = "Ferro";
    } else if (result >= 11 && result <= 20) {
        categoria = "Bronze";
    } else if (result >= 21 && result <= 50) {
        categoria = "Prata";
    } else if (result >= 51 && result <= 80) {
        categoria = "Ouro";
    } else if (result >= 81 && result <= 90) {
        categoria = "Diamante";
    } else if (result >= 91 && result <= 100) {
        categoria = "Lendário";
    } else {
        categoria = "Imortal";
    }

    document.getElementById("categoria").textContent = "O Herói tem de saldo " + result + " vitórias e está no nível de " + categoria;
}