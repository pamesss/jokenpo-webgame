function verificar() {
    //computador escolhe entre pedra, papel, tesoura
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let computerName; 

    //transformado numero em string do computador com SWITCH
    switch (computerChoice) {
        case 1:
            computerName = 'Pedra';
            break;
        case 2:
            computerName = 'Papel';
            break;
        case 3:
            computerName = 'Tesoura';
            break;
    }

    //a escolha do valor é transformada em um número de 1-3
    let userValue = window.document.getElementById('userInput');
    let userChoice = userValue.value;
    let userName;

    //transformado numero em string do usuario com IF ELSE
    if (userChoice == 1) {
        userName = 'Pedra';
    } else if (userChoice == 2) {
        userName = 'Papel';
    } else if (userChoice == 3) {
        userName = 'Tesoura';
    }

    // criando caixa de resultado:
    let resultBox = window.document.getElementById('resultado')
    //imprimir a escolha da maquina e do usuario:

    resultBox.innerHTML = `<p>Você escolheu <strong>${userName}</strong>!<br> E o computador escolheu <strong>${computerName}</strong>!</p>`

    //se o usuario escolher pedra(1)
    if (userChoice == 1 && computerChoice == 1) {
        resultBox.innerHTML += `<strong>${userName}</strong> com <strong>${computerName}</strong> não funciona. EMPATE!`
    }
    else if (userChoice == 1 && computerChoice == 2 ) {
        resultBox.innerHTML += `<strong>${userName}</strong> perde para <strong>${computerName}</strong>. O computador VENCEU!`
    }
    else if (userChoice == 1 && computerChoice == 3) {
        resultBox.innerHTML += `<strong>${userName}</strong> destrói <strong>${computerName}</strong>. Você VENCEU!`
    }
    //se o usuario escolher papel(2)
    else if (userChoice == 2 && computerChoice == 1) {
        resultBox.innerHTML += `<strong>${userName}</strong> cobre <strong>${computerName}</strong>. Você VENCEU!`
    }
    else if (userChoice == 2 && computerChoice == 2) {
        resultBox.innerHTML += `<strong>${userName}</strong> com <strong>${computerName}</strong> não funciona. EMPATE!`
    }
    else if (userChoice == 2 && computerChoice == 3) {
        resultBox.innerHTML += `<strong>${userName}</strong> perde para <strong>${computerName}</strong>. O computador VENCEU!`
    }
    //se o usuario escolher tesoura(3)
    else if (userChoice == 3 && computerChoice == 1) {
        resultBox.innerHTML += `<strong>${userName}</strong> perde para <strong>${computerName}</strong>. O computador VENCEU!`
    }
    else if (userChoice == 3 && computerChoice == 2) {
        resultBox.innerHTML += `<strong>${userName}</strong> corta <strong>${computerName}</strong>. Você VENCEU!`
    }
    else if (userChoice == 3 && computerChoice == 3) {
        resultBox.innerHTML += `<strong>${userName}</strong> com <strong>${computerName}</strong> não funciona. EMPATE!`
    }
}