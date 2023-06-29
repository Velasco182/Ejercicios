alert("BIENVENIDO A CONFIAPP");

let nombre = [], menor = [];

for(let i=0;i<3;i++){
    nombre[i] = prompt("Ingresa tu nombre:");
    menor[i] = prompt("Ingrese el nombre del menor:");
    tutor = {nombre, menor};   
    
    
}

function tutor(nombre, menor){
    this.nombre=nombre;
    this.menor=menor;

    nombre.push(nombre[0]);
    nombre.unshift(nombre[2]);
    menor.push(menor[0]);
    menor.unshift(menor[2]);
    // nombre.shift();
    // menor.shift();
    // nombre.pop();
    // menor.pop();
}

    console.table(tutor);