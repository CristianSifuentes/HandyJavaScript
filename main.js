let name = "Cristian";
let lastName = "Sifuentes";
let user_name = "csc090890";
let age = 32;
let email = "sifuentescovarrubiasitsl@gmail.com";
let adult = true;
let savedMoney = 34000;
let debtMoney = 600000;

var name_c = name + " " + lastName;

console.log(`My complete name is : ${name_c}`);

var realMoney = debtMoney - savedMoney;

console.log(`Real money is : ${realMoney}`);

function myPresentation(name, lastName){
    console.log(`Hi, it´s me from function, my name is ${name} ${lastName}`)
}

myPresentation(name, lastName);


const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis usando if");
}else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes usando if");
}else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año usando if");
}else if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año if");
} else{
    console.log("Opción no encontrada");
}
