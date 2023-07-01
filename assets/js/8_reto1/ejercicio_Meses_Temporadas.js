function Estaciones() {
    let x;
    let i = 0;
    let temporada = ["Invierno", "Primavera", "Verano", "Otoño"];
    let meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];

    do {
        alert("ADVERTENCIA: ¡Solo son válidos números entre 1 y 12!");
        x = parseInt(prompt("Ingresa el número del mes que quieres evaluar!"));
        i++;
    } while (x == 0 || x < 1 || x > 12);

    const notasContainer = document.querySelector('.notas');
    notasContainer.innerHTML = '';

    function printToConsoleAndHTML(message) {
        console.log(message);
        const row = document.createElement('div');
        row.textContent = message;
        notasContainer.appendChild(row);
    }

    switch (x) {
        case 1:
            printToConsoleAndHTML("El mes es ENERO y tiene 31 días.");
            printToConsoleAndHTML(`Temporada: ${temporada[0]}`);
            printToConsoleAndHTML(`${meses[0]}`);
            printToConsoleAndHTML(`${meses[1]}`);
            printToConsoleAndHTML(`${meses[2]}`);
            break;
        case 2:
            printToConsoleAndHTML("El mes es FEBRERO y tiene normalmente 28 días, cada cuatro años tiene 29 días.");
            printToConsoleAndHTML(`Temporada: ${temporada[0]}`);
            printToConsoleAndHTML(`${meses[0]}`);
            printToConsoleAndHTML(`${meses[1]}`);
            printToConsoleAndHTML(`${meses[2]}`);
            break;
        case 3:
            printToConsoleAndHTML("El mes es MARZO y tiene 31 días.");
            printToConsoleAndHTML(`Temporada: ${temporada[0]}`);
            printToConsoleAndHTML(`${meses[0]}`);
            printToConsoleAndHTML(`${meses[1]}`);
            printToConsoleAndHTML(`${meses[2]}`);
            break;
        case 4:
            printToConsoleAndHTML("El mes es ABRIL y tiene 30 días.");
            printToConsoleAndHTML(`Temporada: ${temporada[1]}`);
            printToConsoleAndHTML(`${meses[3]}`);
            printToConsoleAndHTML(`${meses[4]}`);
            break;
        case 5:
            printToConsoleAndHTML("El mes es MAYO y tiene 31 días.");
            printToConsoleAndHTML(`Temporada: ${temporada[1]}`);
            printToConsoleAndHTML(`${meses[3]}`);
            printToConsoleAndHTML(`${meses[4]}`);
            break;
        case 6:
            printToConsoleAndHTML("El mes es JUNIO y tiene 30 días.");
            printToConsoleAndHTML(`Temporada: ${temporada[2]}`);
            printToConsoleAndHTML(`${meses[5]}`);
            printToConsoleAndHTML(`${meses[6]}`);
            printToConsoleAndHTML(`${meses[7]}`);
            break;
        case 7:
            printToConsoleAndHTML("El mes es JULIO y tiene 31 días.");
            printToConsoleAndHTML(`Temporada: ${temporada[2]}`);
            printToConsoleAndHTML(`${meses[5]}`);
            printToConsoleAndHTML(`${meses[6]}`);
            printToConsoleAndHTML(`${meses[7]}`);
            break;
        case 8:
            printToConsoleAndHTML("El mes es AGOSTO y tiene 31 días.");
            printToConsoleAndHTML(`Temporada: ${temporada[2]}`);
            printToConsoleAndHTML(`${meses[5]}`);
            printToConsoleAndHTML(`${meses[6]}`);
            printToConsoleAndHTML(`${meses[7]}`);
            break;
        case 9:
            printToConsoleAndHTML("El mes es SEPTIEMBRE y tiene 30 días.");
            printToConsoleAndHTML(`Temporada: ${temporada[3]}`);
            printToConsoleAndHTML(`${meses[8]}`);
            printToConsoleAndHTML(`${meses[9]}`);
            printToConsoleAndHTML(`${meses[10]}`);
            printToConsoleAndHTML(`${meses[11]}`);
            break;
        case 10:
            printToConsoleAndHTML("El mes es OCTUBRE y tiene 31 días.");
            printToConsoleAndHTML(`Temporada: ${temporada[3]}`);
            printToConsoleAndHTML(`${meses[8]}`);
            printToConsoleAndHTML(`${meses[9]}`);
            printToConsoleAndHTML(`${meses[10]}`);
            printToConsoleAndHTML(`${meses[11]}`);
            break;
        case 11:
            printToConsoleAndHTML("El mes es NOVIEMBRE y tiene 30 días.");
            printToConsoleAndHTML(`Temporada: ${temporada[3]}`);
            printToConsoleAndHTML(`${meses[8]}`);
            printToConsoleAndHTML(`${meses[9]}`);
            printToConsoleAndHTML(`${meses[10]}`);
            printToConsoleAndHTML(`${meses[11]}`);
            break;
        case 12:
            printToConsoleAndHTML("El mes es DICIEMBRE y tiene 31 días.");
            printToConsoleAndHTML("¡FELIZ AÑO!");
            printToConsoleAndHTML(`Temporada: ${temporada[3]}`);
            printToConsoleAndHTML(`${meses[8]}`);
            printToConsoleAndHTML(`${meses[9]}`);
            printToConsoleAndHTML(`${meses[10]}`);
            printToConsoleAndHTML(`${meses[11]}`);
            break;
        default:
            break;
    }
}


