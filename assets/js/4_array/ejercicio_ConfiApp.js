const tutores = [
    {nombre:"Elkin", edad:50, correo:"Elkin@Dura.com"},
    {nombre:"Samuel", edad:40, correo:"Samuel@Dura.com"},
    {nombre:"Gloria", edad:30, correo:"Gloria@Dura.com"},
    
   ];

const menores = [
    {nombre:"Santi", edad:15, pasta:"Santi@Dura.es"},
    {nombre:"Cami", edad:12, pasta:"Cami@Dura.es"},
    {nombre:"Nico", edad:17, pasta:"Nico@Dura.es"},
];

for(let t=0;t<tutores.length;t++){
    console.log(`El nombre del tutor es: ${tutores[t].nombre}, y ${menores[t].nombre} es el menor`);
    console.table(tutores[t]);
    console.table(menores[t]);

    // document.querySelector("div").innerHTML = JSON.stringify(tutores[t]);
    document.getElementById("info").innerHTML = "Los menores son" + menores[t];

    // document.write(tutores[t], menores[t]);
}