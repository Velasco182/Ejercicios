function Objetos() {
    alert("BIENVENIDO A LA PRUEBA 1 DE CONFIAPP");

    alert("INGRESE LOS DATOS DEL TUTOR:");
    const tutor = {
        t_identificacion_Tutor: prompt("Tipo de documento:"),
        n_identificacion_Tutor: prompt("Número de documento:"),
        nombres_Tutor: prompt("Ingresa tu nombre:"),
        apellidos_Tutor: prompt("Ingresa tu apellido:"),
        edad_Tutor: prompt("Ingresa tu edad:"),
        correo_Tutor: prompt("Ingresa tu correo:"),
        celular_Tutor: prompt("Ingresa tu celular:"),
        ocupacion_Tutor: prompt("Ingresa tu ocupación:"),
    }

    alert("INGRESE LOS DATOS DEL MENOR:");
    const menor = {
        t_identificacion_Menor: prompt("Tipo de documento:"),
        n_identificacion_Menor: prompt("Número de documento:"),
        nombres_Menor: prompt("Ingresa su nombre:"),
        apellidos_Menor: prompt("Ingresa su apellido:"),
        colegio_Menor: prompt("¿Dónde estudia el menor?:"),
        edad_Menor: prompt("Ingresa su edad:"),
        celular_Menor: prompt("Ingresa su celular:")
    }

    alert("INGRESE LOS DATOS DE LA RUTA:");

    let H_inicio = Number.parseInt(prompt("Hora de inicio de la ruta:"));
    let H_final = Number.parseInt(prompt("Hora de fin de la ruta:"));
    let estimado = (H_final - H_inicio);

    const ruta = {
        L_inicio: prompt("Lugar de inicio de la ruta:"),
        L_final: prompt("Lugar de finalización de la ruta:"),
        F_ruta: prompt("Fecha de la ruta:"),
        T_transporte: prompt("¿En qué tipo de transporte viaja el menor?:")
    }

    ruta.T_estimado =  estimado ;
    const datosTM = Object.assign(tutor, menor);
    const datosR = Object.assign(datosTM, ruta)

    const notasContainer = document.querySelector('.notas');
    notasContainer.innerHTML = '';

    Object.entries(datosR).forEach(([key, value]) => {
        const row = document.createElement('p');
        row.textContent = `${key}: ${value}`;
        console.log(`${key}: ${value}`);
        notasContainer.appendChild(row);
    });
}



