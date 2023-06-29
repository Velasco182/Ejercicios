alert("BIENVENIDO A LA PRUEBA 1 DE CONFIAPP");

alert("INGRESE LOS DATOS DEL TUTOR:");
const tutor = {
    t_identificacion: prompt("Tipo de documento:"),
    n_identificacion: prompt("Número de documento:"),
    nombres: prompt("Ingresa tu nombre:"),
    apellidos: prompt("Ingresa tu apellido:"),
    edad: prompt("Ingresa tu edad:"),
    correo:prompt("Ingresa tu correo:"),
    celular: prompt("Ingresa tu celular:"),
    ocupacion: prompt("Ingresa tu ocupación:"),
}
alert("INGRESE LOS DATOS DEL MENOR:");
const menor = {
    t_identificacion: prompt("Tipo de documento:"),
    n_identificacion: prompt("Número de documento:"),
    nombres: prompt("Ingresa tu nombre:"),
    apellidos: prompt("Ingresa tu apellido:"),
    colegio: prompt("¿Dónde estudia el menor?:"),
    edad: prompt("Ingresa tu edad:"),
    celular: prompt("Ingresa tu celular:")
}

alert("INGRESE LOS DATOS DE LA RUTA:");

let H_inicio = Number.parseInt(prompt("Hora de inicio de la ruta:"));
let H_final = Number.parseInt(prompt("Hora de fin de la ruta:"));
let estimado = ( H_final - H_inicio );



const ruta = {
    L_inicio: prompt("Lugar de inicio de la ruta:"),
    L_final: prompt("Lugar de inicio de la ruta:"),
    F_ruta: prompt("Fecha de la ruta:"),
    T_transporte: prompt("¿En qué tipo de transporte viaja el menor?:")
}

ruta.T_estimado = {estimado};
const datosTM = Object.assign(tutor, menor);
const datosR = Object.assign(datosTM,ruta)

console.log(datosR);
document.write(`${datosR}`);
