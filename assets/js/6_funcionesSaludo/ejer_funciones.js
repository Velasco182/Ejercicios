alert("¡BIENVENIDO A CONFIAPP!");
alert("¡Regístrate ahora!");
nom = prompt("Ingresa tu nombre: ");
apellido = prompt("Ingresa tu apellido: ");
ciudad = prompt("Ingresa tu ciudad: ");
pwd = prompt("Ingresa una contraseña");
alert("¡Registro Exitoso!");

inicio(nom, pwd);

/*function registro() {
  
  return nom, pwd;
}*/

function inicio(nom, pwd) {

  //registro();

  let nombre = prompt("Ingresa tu usuario: ");
  let pw = prompt("Ingresa tu contraseña: ");

  if (nombre == nom && pw == pwd) {
    alert("Inicio de sesión exitoso.")
    console.log(`Bienvenido ${nombre}, te encuentras en ${ciudad}.`)

  } else {
    alert("Usuario o contraseña inválido");
  }
}