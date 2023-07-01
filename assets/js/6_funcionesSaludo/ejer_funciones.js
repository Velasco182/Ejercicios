function Funciones() {
  alert("¡BIENVENIDO A CONFIAPP!");
  alert("¡Regístrate ahora!");
  nom = prompt("Ingresa tu nombre: ");
  apellido = prompt("Ingresa tu apellido: ");
  ciudad = prompt("Ingresa tu ciudad: ");
  pwd = prompt("Ingresa una contraseña");
  alert("¡Registro Exitoso!");

  inicio(nom, pwd);

  function inicio(nom, pwd) {
    let nombre = prompt("Ingresa tu usuario: ");
    let pw = prompt("Ingresa tu contraseña: ");

    if (nombre == nom && pw == pwd) {
      alert("Inicio de sesión exitoso.");
      console.log(`Bienvenido ${nombre}, te encuentras en ${ciudad}.`);
      mostrarInformacion(nombre, ciudad);
    } else {
      alert("Usuario o contraseña inválido");
    }
  }

  function mostrarInformacion(nombre, ciudad) {
    const notasContainer = document.querySelector('.notas');
    notasContainer.innerHTML = '';

    const mensaje = `<p>Bienvenido ${nombre}, te encuentras en ${ciudad}.</p>`;

    const row = document.createElement('div');
    row.innerHTML = mensaje;
    notasContainer.appendChild(row);
  }
}

