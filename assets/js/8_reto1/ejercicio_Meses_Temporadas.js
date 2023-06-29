let x; 
let i=0;
let temporada = ["Invierno","Primavera","Verano", "Otoño"];
let meses = ["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE","DICIEMBRE"];

do{

    alert("ADVERTENCIA: ¡Solo son válidos números entre 1 y 12!");
    x = parseInt(prompt("Ingresa el número del mes que quieres evaluar!"));
    i++;

}while(x==0 || x<1 && x>12);

switch(x){
    case 1:
        console.log("El mes es ENERO y tiene 31 días.");
        document.write("El mes es ENERO y tiene 31 días.<br>");
        
        console.log(`Temprorada: ${temporada[0]}`);
        document.write(`Temprorada: ${temporada[0]}<br>`);

        console.log(`${meses[0]}`);
        document.write(`${meses[0]}<br>`);
        console.log(`${meses[1]}`);
        document.write(`${meses[1]}<br>`);
        console.log(`${meses[2]}`);
        document.write(`${meses[2]}<br>`);

    break;
    case 2:
        console.log("El mes es FEBRERO y tiene normalmente 28 días, cada cuatro años tiene 29 días.");
        document.write("El mes es FEBRERO y tiene normalmente 28 días, cada cuatro años tiene 29 días.<br>");

        console.log(`Temprorada: ${temporada[0]}`);
        document.write(`Temprorada: ${temporada[0]}<br>`);

        console.log(`${meses[0]}`);
        document.write(`${meses[0]}<br>`);
        console.log(`${meses[1]}`);
        document.write(`${meses[1]}<br>`);
        console.log(`${meses[2]}`);
        document.write(`${meses[2]}<br>`);

    break;
    case 3:
        console.log("El mes es MARZO y tiene 31 días.");
        document.write("El mes es MARZO y tiene 31 días.<br>");

        console.log(`Temprorada: ${temporada[0]}`);
        document.write(`Temprorada: ${temporada[0]}<br>`);

        console.log(`${meses[0]}`);
        document.write(`${meses[0]}<br>`);
        console.log(`${meses[1]}`);
        document.write(`${meses[1]}<br>`);
        console.log(`${meses[2]}`);
        document.write(`${meses[2]}<br>`);

    break;
    case 4:
        console.log("El mes es ABRIL y tiene 30 días.");
        document.write("El mes es ABRIL y tiene 30 días.<br>");

        console.log(`Temprorada: ${temporada[1]}`);
        document.write(`Temprorada: ${temporada[1]}<br>`);

        console.log(`${meses[3]}`);
        document.write(`${meses[3]}<br>`);
        console.log(`${meses[4]}`);
        document.write(`${meses[4]}<br>`);

    break;
    case 5:
        console.log("El mes es MAYO y tiene 31 días.");
        document.write("El mes es MAYO y tiene 31 días.<br>");

        console.log(`Temprorada: ${temporada[1]}`);
        document.write(`Temprorada: ${temporada[1]}<br>`);

        console.log(`${meses[3]}`);
        document.write(`${meses[3]}<br>`);
        console.log(`${meses[4]}`);
        document.write(`${meses[4]}<br>`);

    break;
    case 6:
        console.log("El mes es JUNIO y tiene 30 días.");
        document.write("El mes es JUNIO y tiene 30 días.<br>");

        console.log(`Temprorada: ${temporada[2]}`);
        document.write(`Temprorada: ${temporada[2]}<br>`);

        console.log(`${meses[5]}`);
        document.write(`${meses[5]}<br>`);
        console.log(`${meses[6]}`);
        document.write(`${meses[6]}<br>`);
        console.log(`${meses[7]}`);
        document.write(`${meses[7]}<br>`);

    break;
    case 7:
        console.log("El mes es JULIO y tiene 31 días.");
        document.write("El mes es JULIO y tiene 31 días.<br>");

        console.log(`Temprorada: ${temporada[2]}`);
        document.write(`Temprorada: ${temporada[2]}<br>`);

        console.log(`${meses[5]}`);
        document.write(`${meses[5]}<br>`);
        console.log(`${meses[6]}`);
        document.write(`${meses[6]}<br>`);
        console.log(`${meses[7]}`);
        document.write(`${meses[7]}<br>`);

    break;
    case 8:
        console.log("El mes es AGOSTO y tiene 31 días.");
        document.write("El mes es AGOSTO y tiene 31 días.<br>");

        console.log(`Temprorada: ${temporada[2]}`);
        document.write(`Temprorada: ${temporada[2]}<br>`);

        console.log(`${meses[5]}`);
        document.write(`${meses[5]}<br>`);
        console.log(`${meses[6]}`);
        document.write(`${meses[6]}<br>`);
        console.log(`${meses[7]}`);
        document.write(`${meses[7]}<br>`);

    break;
    case 9:
        console.log("El mes es SEPTIEMBRE y tiene 30 días.");
        document.write("El mes es SEPTIEMBRE y tiene 30 días.<br>");

        console.log(`Temprorada: ${temporada[3]}`);
        document.write(`Temprorada: ${temporada[3]}<br>`);

        console.log(`${meses[8]}`);
        document.write(`${meses[8]}<br>`);
        console.log(`${meses[9]}`);
        document.write(`${meses[9]}<br>`);
        console.log(`${meses[10]}`);
        document.write(`${meses[10]}<br>`);
        console.log(`${meses[11]}`);
        document.write(`${meses[11]}<br>`);

    break;
    case 10:
        console.log("El mes es OCTUBRE y tiene 31 días.");
        document.write("El mes es OCTUBRE y tiene 31 días.<br>");

        console.log(`Temprorada: ${temporada[3]}`);
        document.write(`Temprorada: ${temporada[3]}<br>`);

        console.log(`${meses[8]}`);
        document.write(`${meses[8]}<br>`);
        console.log(`${meses[9]}`);
        document.write(`${meses[9]}<br>`);
        console.log(`${meses[10]}`);
        document.write(`${meses[10]}<br>`);
        console.log(`${meses[11]}`);
        document.write(`${meses[11]}<br>`);

    break;
    case 11:
        console.log("El mes es NOVIEMBRE y tiene 30 días.");
        document.write("El mes es NOVIEMBRE y tiene 30 días.<br>");

        console.log(`Temprorada: ${temporada[3]}`);
        document.write(`Temprorada: ${temporada[3]}<br>`);

        console.log(`${meses[8]}`);
        document.write(`${meses[8]}<br>`);
        console.log(`${meses[9]}`);
        document.write(`${meses[9]}<br>`);
        console.log(`${meses[10]}`);
        document.write(`${meses[10]}<br>`);
        console.log(`${meses[11]}`);
        document.write(`${meses[11]}<br>`);

    break;
    case 12:
        console.log("El mes es DICIEMBRE y tiene 31 días.");
        document.write("El mes es DICIEMBRE y tiene 31 días.<br>");
        console.log("¡FELIZ AÑO!");
        document.write("¡FELIZ AÑO!<br>");


        console.log(`Temprorada: ${temporada[3]}`);
        document.write(`Temprorada: ${temporada[3]}<br>`);

        console.log(`${meses[8]}`);
        document.write(`${meses[8]}<br>`);
        console.log(`${meses[9]}`);
        document.write(`${meses[9]}<br>`);
        console.log(`${meses[10]}`);
        document.write(`${meses[10]}<br>`);
        console.log(`${meses[11]}`);
        document.write(`${meses[11]}<br>`);

    break;
    default:
    break;
}