function Notas() {
    let nombres = [];
    let notas = [];
    let finales = [];

    let notasContainer = document.querySelector('.notas');
    notasContainer.innerHTML = `NOTAS FINALES ADSO <br>
                                IV TRIMESTRE<br>`;

    for (let index = 0; index < 3; index++) {
        alert("NOTAS DE ADSO");
        nombres[index] = prompt('¿Cuál es el nombre del ' + (parseInt(index) + 1) + ' aprendiz? :');

        notas[index] = []; // Arreglo para almacenar las notas individuales de cada estudiante

        for (let i = 0; i < 3; i++) {
            let nota = prompt('Ingrese nota ' + (parseInt(i) + 1) + ' :');
            notas[index][i] = parseFloat(nota);
        }

        // Calcular la nota final del estudiante
        let nota1 = notas[index][0] * 0.2;
        let nota2 = notas[index][1] * 0.2;
        let nota3 = notas[index][2] * 0.6;
        let final = nota1 + nota2 + nota3;
        finales[index] = final;
    }

    for (let index = 0; index < 3; index++) {
        notasContainer.innerHTML += `<br>Aprendiz: ${nombres[index]}<br>`;
        console.log(`Aprendiz: ${nombres[index]}`);
        notasContainer.innerHTML += `Nota 1: ${notas[index][0]}<br>`;
        console.log(`Nota 1: ${notas[index][0]}`);
        notasContainer.innerHTML += `Nota 2: ${notas[index][1]}<br>`;
        console.log(`Nota 2: ${notas[index][1]}`);
        notasContainer.innerHTML += `Nota 3: ${notas[index][2]}<br>`;
        console.log(`Nota 3: ${notas[index][2]}`);
        notasContainer.innerHTML += `Nota Final: ${finales[index]}<br>`;
        console.log(`Nota Final: ${finales[index]}`);
    }
}




