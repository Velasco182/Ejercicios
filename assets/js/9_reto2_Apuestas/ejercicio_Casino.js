function Apuestas() {
    let dinero = 5000;
    let i = 0;
    let apuestaNumero, apuesta, saldo;

    const notasContainer = document.querySelector('.notas');
    // notasContainer.innerHTML = '';
  
    do {
      apuestaNumero = prompt("¿A qué número quieres apostar?");
      apuesta = parseInt(prompt("¿Cuánto dinero quieres apostar?"));
  
      saldo = dinero - apuesta;
  
      console.log(`Tu saldo es: $${saldo}`);
      notasContainer.innerHTML += `Tu saldo es: $${saldo}<br>`;
  
      let random = Math.floor(Math.random() * 10 + 1);
  
      if (apuestaNumero == random) {
        saldo = dinero + apuesta * 3;
  
        console.log(`Tu saldo es: $${saldo}`);
        notasContainer.innerHTML += `Tu saldo es: $${saldo}<br>`;
      } else {
        console.log(`Perdiste. Tu saldo es: $${saldo}`);
        notasContainer.innerHTML += `Perdiste. Tu saldo es: $${saldo}<br>`;
      }
  
      if (saldo >= 10000) {
        console.log(`¡GANASTE! Tu saldo es: $${saldo}`);
        notasContainer.innerHTML += `¡GANASTE! Tu saldo es: $${saldo}<br>`;
      }
  
      dinero = saldo; // Actualizar el valor de dinero con el nuevo saldo
  
      console.log(random);
      console.log(apuestaNumero);
  
      i++;
    } while (saldo > 0 && saldo < 10000);
  }
  

    




