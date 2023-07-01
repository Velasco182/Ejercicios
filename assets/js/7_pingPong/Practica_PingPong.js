function pingPong() {
    alert("Bienvenido a Ping - Pong.");
    let x, i = 0;

    do {
        alert("Ingresa un número entero y par.");
        x = prompt("Ingresa el número");
        i++;
    } while (x / x !== 0 && x % 2 !== 0);
    // Valida el cociente para que no sea decimal o flotante // Valida el residuo para que solo ingresen pares

    let j = 1;

    const notasContainer = document.querySelector('.notas');
    notasContainer.innerHTML = '';

    function printToConsoleAndHTML(message) {
        console.log(message);
        const row = document.createElement('div');
        row.textContent = message;
        notasContainer.appendChild(row);
    }

    do {
        printToConsoleAndHTML(`${j}`);

        if (j % 5 === 0 && j % 3 === 0) {
            printToConsoleAndHTML(`${j} Ping Pong`);
        } else if (j % 5 === 0) {
            printToConsoleAndHTML(`${j} Pong`);
        } else if (j % 3 === 0) {
            printToConsoleAndHTML(`${j} Ping`);
        }
        
        j++;
    } while (j <= x);
}


    



