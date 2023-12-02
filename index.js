
let cuotas = Number; 
let interes_porcentaje;
let credito=Number;
let interes;

askCuotas();
checkInteres();

askCredito();
checkCredito();



function askCuotas () {
  cuotas = parseInt(prompt("En cuantas cuotas desea financiar su credito?"))
}

function checkInteres (){
  while (cuotas > 12 || isNaN(cuotas)==true){
    alert("Campo obligatiorio. Solo puede ingresar numeros. Las cuotas no pueden ser mas de 12");
    askCuotas();
  }

  if (cuotas >3 && cuotas <=5){
    interes_porcentaje=7;
    console.log("El interes es de " + interes_porcentaje + "%");
  }
  else if (cuotas >5 && cuotas <=8){
    interes_porcentaje=10;
    console.log("El interes es de " + interes_porcentaje + "%");
  }
  else if(cuotas>5 && cuotas <=12){
    interes_porcentaje=15;
    console.log("El interes es de " + interes_porcentaje + "%");
  }
  else{
    interes_porcentaje=5;
    console.log("El interes es de " + interes_porcentaje + "%");
  }
}

function askCredito (){
  credito = parseInt(prompt("Cuanto dinero necesita para su prestamo?"))
}

function checkCredito (){
  while (credito < 10000 || isNaN(credito)==true){
    alert("Campo obligatorio. Solo puede ingresar numeros. El prestamo no puede ser menor a 10.000");
    askCredito();
  }

  interes= credito * (interes_porcentaje/100);
  credito_total= credito + interes;

  console.log ("El interes total a pagar es de $" + interes);
  alert ("El prestamo total es de $"+ credito_total + " a pagar en " + cuotas + " cuotas con un interes del " + interes_porcentaje + "% , que corresponde a $" + interes);
}


