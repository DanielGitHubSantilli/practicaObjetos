//se usa el igual porque se está asignando un valor. 
//el punto es para acceder a las propiedades.
//el punto y coma es para terminar la sentencia.
//Los parámetros son las propiedades de la clase y se asignan en el constructor
//Los argumentos son los valores que se le pasan al constructor.
//para que un parametro no salga undefined, agrego el signo = "desconocido".

function Persona(nombre,edad,sexo,estadoCivil,signo = "desconocido"){
  this.nombre = nombre;
  this.edad = edad; 
  this.sexo = sexo;
  this.estadoCivil = estadoCivil;
  this.signo = signo
}

let persona = new Persona("pedro", 20, "masculino", "soltero")
console.log(persona);
let persona1 = new Persona("Daniel", 47, "masculino", "concubino")
console.log(persona1);
let persona2 = new Persona("Ana", 45, "femenino", "casado","Aries")
console.log(persona2);
let persona3 = new Persona("Marta", 20, "femenino", "soltera","Capricornio")
console.log(persona3);
