function Factura() {
    let nombre = prompt('¿Cuál es tu nombre?');
  
    let notasDiv = document.querySelector('.notas');
    notasDiv.innerHTML = `SUPERMERCADO ADSO <br>
                          FACTURA DE VENTA N° 0001<br>---------<br>Nombre: ${nombre}<br>`;
  
    let productos = [];
    let precio = [];
    let tprecio, descuento, iva, total;
    let precios0, precios1, precios2, precios3;
  
    for (let index = 0; index < 4; index++) {
      productos[index] = prompt('Ingrese producto ' + (parseInt(index) + 1) + ':');
      let precios = prompt('Ingrese precio de producto ' + (parseInt(index) + 1) + ':');
      eval(" precios" + index + " =" + precios);
      precio[index] = precios;
  
      tprecio = (precios0 + precios1 + precios2 + precios3);
      descuento = (tprecio * 0.10);
      iva = (tprecio * 0.19);
      total = (tprecio - descuento + iva);
    }
  
    for (let index = 0; index < 4; index++) {
      let productoElement = document.createElement('p');
      productoElement.innerHTML = `Producto: ${productos[index]} Precio Unitario: ${precio[index]}`;
      notasDiv.appendChild(productoElement);
    }
  
    let subtotalElement = document.createElement('p');
    subtotalElement.innerHTML = `Subtotal: ${tprecio}`;
    notasDiv.appendChild(subtotalElement);
  
    let ivaElement = document.createElement('p');
    ivaElement.innerHTML = `IVA 19%: ${iva}`;
    notasDiv.appendChild(ivaElement);
  
    let descuentoElement = document.createElement('p');
    descuentoElement.innerHTML = `Descuento 10%: ${descuento}`;
    notasDiv.appendChild(descuentoElement);
  
    let totalElement = document.createElement('p');
    totalElement.innerHTML = `Total a Pagar: ${total}`;
    notasDiv.appendChild(totalElement);
  
    console.log("Factura N° 0001\n ---- \nNombre: ", nombre);
    console.log("Producto: ", productos[0], " Precio: ", precio[0]);
    console.log("Producto: ", productos[1], " Precio: ", precio[1]);
    console.log("Producto: ", productos[2], " Precio: ", precio[2]);
    console.log("Producto: ", productos[3], " Precio: ", precio[3]);
    console.log("----");
    console.log("Subtotal: ", tprecio);
    console.log("IVA 19%: ", iva);
    console.log("Descuento 10%: ", descuento);
    console.log("----");
    console.log("Total a Pagar: ", total);
  }
  