// let factura="001";
                                                    
let nombre = prompt('¿Cuál es tu nombre?');

document.querySelector('.factura').innerHTML = `SUPERMERCADO ADSO <br>
                                                    FACTURA DE VENTA N° 0001<br>---------<br>Nombre:`+" "+`${nombre}<br>`;
console.log("SUPERMERCADO ADSO\n Factura N° 0001\n ---- \nNombre: ");
// let i = prompt('¿Cuántos productos vas a ingresar?');
let productos = [];
let precio = [];
let tprecio, descuento, iva, total;
let precios0, precios1, precios2, precios3;

for (let index = 0; index < 4; index++) {
    // const productos = productos[index];
    // let i=index+1;  
    // let prod, pre;
    productos[index] = prompt('Ingrese producto ' + (parseInt(index) + 1) +':');
    

    // precio[index] = Number.parseInt(prompt('Ingrese precio de producto ' + (parseInt(index) + 1) +':'));
    let precios = prompt('Ingrese precio de producto ' + (parseInt(index) + 1) +':');
    
    eval(" precios" + index + " =" + precios);
    precio[index] = precios;

    tprecio = (precios0 + precios1 + precios2 + precios3);

    

    descuento = (tprecio * 0.10);
    iva = (tprecio * 0.19);

    total = (tprecio - descuento + iva);

}      
    for (let index = 0; index < 1; index++) {
        
        document.write(`Producto:  ${productos[0]} Precio Unitario:  ${precio[0]}<br>`);
    }
    for (let index = 0; index < 1; index++) {
        
        document.write(`Producto:  ${productos[1]} Precio Unitario: ${precio[1]}<br>`);
    }    
    for (let index = 0; index < 1; index++) {
        
        document.write(`Producto:  ${productos[2]} Precio Unitario:  ${precio[2]}<br>`);
    }
    for (let index = 0; index < 1; index++) {
        
        document.write(`Producto:  ${productos[3]} Precio Unitario:  ${precio[3]}<br>-----------<br>`);
        document.write(`                           Subtotal:  ${tprecio}<br>`);
        document.write(`                           IVA 19%:  ${iva}<br>`);
        document.write(`                           Descuento 10%:  ${descuento}<br>-----------<br>`);
        document.write(`                           Total a Pagar:  ${total}`);

        console.log("Factura N° 0001\n ---- \nNombre: ",nombre);
        console.log("Producto: ", productos[0], " Precio: ",precio[0]);
        console.log("Producto: ", productos[1], " Precio: ",precio[1]);
        console.log("Producto: ", productos[2], " Precio: ",precio[2]);
        console.log("Producto: ", productos[3], " Precio: ",precio[3]);
        console.log("----");
        console.log("Subtotal: ",tprecio);
        console.log("IVA 19%: ",iva);
        console.log("Descuento 10%: ",descuento);
        console.log("----");
        console.log("Total a Pagar: ",total);

        
    } 

    // if(index==0){

    // } else{

    //     let productos = [prompt('Ingrese producto '+ i + ': ')];
    //     let precio = [prompt('Ingrese precio de producto ' + i + ': ')];
        
    //     console.log(productos);
    //     console.log(precio);
    // }
// for (let index = 0; index < i; index++) {
    
//     // document.querySelector('.productos').innerHTML = `<h1>${productos[index]}</h1><h1>${precio[index]}</h1><br>`;  
//     // document.getElementsByClassName('.productos').innerHTML = `<h1>${precio[index]}</h1><br>`;
// }   
    // productos.forEach(function(elemento, indice) {
    //     console.log(elemento, indice);

    //         // let pre1 = precio[index];
    //         // let pre = 0;
    //         // pre = pre1 + pre;

    //         // console.log(pre);

    //     document.getElementsByClassName('.producto').innerHTML = `${productos[indice]}`;  
    // })

    

    // precio.forEach(function(elemento, indice) {
    //     console.log(elemento, indice);

    //         // let pre1 = precio[index];
    //         // let pre = 0;
    //         // pre = pre1 + pre;

    //         // console.log(pre);
    //     document.getElementsByClassName('.precio').innerHTML = `${precio[indice]}`;
    // })
    // Manzana 0
    // Banana 1        

    // frutas.forEach(function(elemento, indice, array) {
    //     console.log(elemento, indice);
    // })

    // let productos = [prompt('Ingrese producto '+ i + ': ')];
    // console.log(productos);
    // let pr = productos[index] + productos[index];
    


// const pro1 = prompt('Ingrese producto 1: ');
// const pre1 = prompt('Ingrese precio de producto 1: ');
// const pro2 = prompt('Ingrese producto 2: ');
// const pro3 = prompt('Ingrese producto 3: ');
// const pro4 = prompt('Ingrese producto 4: ');



// document.querySelector('.contenido').innerHTML = `SUPER MERCADO ADSO <br>
//                                                     FACTURA DE VENTA N° ${factura}<br>

//                                                     ${nombre}`;

// console.log(nombre);


