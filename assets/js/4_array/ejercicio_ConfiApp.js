function Arrays() {
    const tutores = [
        { nombre: "Elkin", edad: 50, correo: "Elkin@Dura.com" },
        { nombre: "Samuel", edad: 40, correo: "Samuel@Dura.com" },
        { nombre: "Gloria", edad: 30, correo: "Gloria@Dura.com" },
    ];

    const menores = [
        { nombre: "Santi", edad: 15, correo: "Santi@Dura.es" },
        { nombre: "Cami", edad: 12, correo: "Cami@Dura.es" },
        { nombre: "Nico", edad: 17, correo: "Nico@Dura.es" },
    ];

    const notasContainer = document.querySelector('.notas');
    notasContainer.innerHTML = '';

    for (let t = 0; t < tutores.length; t++) {
        const tutor = tutores[t];
        const menor = menores[t];
        const tutorInfo = `<p>El nombre del tutor es: ${tutor.nombre}, y ${menor.nombre} es el menor</p>`;
        const tutorTable = `<table class="table table-hover"><tr><th>Nombre</th><th>Edad</th><th>Correo</th></tr><tr><td>${tutor.nombre}</td><td>${tutor.edad}</td><td>${tutor.correo}</td></tr></table>`;
        const menorTable = `<table class="table table-hover"><tr><th>Nombre</th><th>Edad</th><th>Correo</th></tr><tr><td>${menor.nombre}</td><td>${menor.edad}</td><td>${menor.correo}</td></tr></table>`;

        const row = document.createElement('div');
        row.innerHTML = tutorInfo + tutorTable + menorTable;
        notasContainer.appendChild(row);

        console.log(`El nombre del tutor es: ${tutores[t].nombre}, y ${menores[t].nombre} es el menor`);
        console.table(tutores[t]);
        console.table(menores[t]);

    }
}


