function Iteradores() {
    alert("BIENVENIDO A CONFIAPP");

    let nombres = [], menores = [];

    for (let i = 0; i < 3; i++) {
        nombres[i] = prompt("Ingresa tu nombre:");
        menores[i] = prompt("Ingrese el nombre del menor:");
        
        function Tutor(nombre, menor) {
            this.nombre = nombre;
            this.menor = menor;

            nombres.push(nombres[1]);
            nombres.unshift(nombres[1]);
            nombres.push(nombres[1]);

            menores.push(menores[1]);
            menores.unshift(menores[1]);
            menores.push(menores[1]);
            
            nombres.splice(0,1);
            menores.splice(0,1);
            nombres.splice(1,1);
            menores.splice(1,1);
            nombres.splice(0,1);
            menores.splice(0,1);
        }
    }

    

    

    const tutor = new Tutor(nombres, menores);

    const notasContainer = document.querySelector('.notas');
    notasContainer.innerHTML = '';

    // const tutorInfo = `<p>Nombre: ${tutor.nombre.join(', ')}</p>`;
    // const menorInfo = `<p>Menor: ${tutor.menor.join(', ')}</p>`;
    const tutorInfo =`<table class="table table-hover"><tr><th>Nombre</th><th>Menor</th></tr><tr><td>${tutor.nombre}</td><td>${tutor.menor}</td></tr></table>`

    const row = document.createElement('div');
    row.innerHTML = tutorInfo;
    console.table(tutor);
    notasContainer.appendChild(row);
}

