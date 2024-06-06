window.onload=function(){
    fondo1=document.getElementById("fondo1")
    fondo2=document.getElementById("fondo2")
    moto=document.getElementById("moto")
    pararmover=setInterval(mover,50)
    setInterval(repetir,2250)
    
}
dezplazar=0;
function mover(){
    dezplazar-=10;
    dezplazar2=dezplazar+450;
    position=dezplazar+"px"
    position2=dezplazar2+"px"
    fondo1.style.left=position
    fondo2.style.left=position2
}
function repetir(){
    fondo1.style.left="0"
    fondo2.style.left="450px"
dezplazar=0
}


let numero1 = "";
        let numero2 = ""; 
        let operacion = ""; 
        
     
        
   
        function agregarNumero(num) {
            if (operacion === "") {
                numero1 += num;
                document.getElementById('result').value = numero1;
            } else {
                numero2 += num;
                document.getElementById('result').value = numero2;
            }
        }

        function sumar() {
            operacion = "sumar";
            document.getElementById('result').value = numero1+" + ";
        }
        function restar(){
            operacion="restar";
            document.getElementById('result').value = numero1+" - ";
        }
        function multiplicar(){
            operacion="multiplicar";
            document.getElementById('result').value = numero1+" X ";
        }
        function dividir(){
            operacion="dividir";
            document.getElementById('result').value = numero1+" / ";
        }
        function calcular() {
            let resultado;
            if (operacion === "sumar") {

                resultado = parseInt(numero1) + parseInt(numero2);
                document.getElementById('result').value = resultado;
            }
            if (operacion === "restar") {
              
                resultado = parseInt(numero1) - parseInt(numero2);
                document.getElementById('result').value = resultado;
            }
            if (operacion === "multiplicar") {
              
                resultado = parseInt(numero1) * parseInt(numero2);
                document.getElementById('result').value = resultado;
            }
            if (operacion === "dividir") {
              if(parseInt(numero2)===0){
                document.getElementById('result').value = "OPERACION NO VALIDA";
              }
              else{
                resultado = parseInt(numero1) / parseInt(numero2);
                document.getElementById('result').value = resultado;
              }
                
            }
        }
        function limpiar(){
         
            numero1 = "";
            numero2 = "";
            operacion = "";
            document.getElementById('result').value = "";
      
        }


        document.addEventListener("DOMContentLoaded", () => {
            titulo = document.getElementById("titulo")
            const visor = document.getElementById("visor");
          
        
            
        
        
        });
        function mifoto(num){
            
           
            const clickedImg = document.querySelector(`img[name="foto${num}"]`);
            const visorImg = document.querySelector('img[name="fotovisor"]');
            
            if (clickedImg && visorImg) {
                visorImg.src = clickedImg.src;
                visorImg.alt = clickedImg.alt;
                titulo.innerHTML = clickedImg.alt;}
        }
        