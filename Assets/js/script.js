const { post } = require("request");

document.querySelector(".burguer").addEventListener("click", aBurguer);

var line1= document.querySelector(".line1");
var line2= document.querySelector(".line2");
var line3= document.querySelector(".line3");
var hyper= document.querySelector(".login");
var side= document.querySelector(".side");

function aBurguer(){
    line1.classList.toggle("activeline1");
    line2.classList.toggle("activeline2");
    line3.classList.toggle("activeline3");
    
    hyper.classList.toggle("logins");
    side.classList.toggle("sidekick");
}





//arrays
const carrito = [];
let prodDisp = [
    playera1 = { Sku: 1001, precio: 800, Talla: "Extra Chica", imagen: "/Assets/Store assets/Papás/mens-premium-heavyweight-tee-black-right-front-62de360d06753.png" },
    playera2 = {Sku: 1002,precio: 800,Talla: "Chica", imagen :"/Assets/Store assets/Papás/mens-premium-heavyweight-tee-black-left-front-62de360d06848.png"},
    playera3 = {Sku: 1003, precio: 700, Talla: "Extra Chica", imagen:"/Assets/Store assets/Papás/mens-premium-heavyweight-tee-black-front-2-62de360d06961.png"},
    chamarra1 = {Sku: 1004,precio: 1800,Talla: "Chica", imagen: "/Assets/Store assets/Chamarra.jpeg"},
    chamarra2 = {Sku: 1005,precio: 1800,Talla: "Chica", imagen: "/Assets/Store assets/Chamarra.jpeg"},
    chamarra3 = {Sku: 1006, precio: 2000, Talla: "Extra Grande" , imagen: "/Assets/Store assets/Chamarra.jpeg" },
    playera4 = {Sku: 1007,precio: 800,Talla: "XChica", imagen:"/Assets/Store assets/No Gameplay No hype/unisex-lightweight-t-shirt-white-front-62de31b8449f8.png"},
    playera5 = {Sku: 1008,precio: 800,Talla: "Chica", imagen: "/Assets/Store assets/No Gameplay No hype/unisex-lightweight-t-shirt-white-front-62de31b8447a6.png"},
    playera6 = {Sku: 1009,precio: 800,Talla: "Mediana", imagen:"/Assets/Store assets/No Gameplay No hype/unisex-lightweight-t-shirt-true-red-front-62de31b844262.png"},
    ]
    
//Variables
let PAIndex = carrito.indexOf('playera1.qty') 
let PBIndex = carrito.indexOf('playera2.qty')     
let PCIndex = carrito.indexOf('playera3.qty')   
let total = 0
// let contador=1
// let contador2=1

 
//Funciones 

  // Erase
document.querySelector(".erase").addEventListener("click",elimina, true);



function elimina(){
    let goma =0
    contador = goma
    contador2 = goma
    console.log(`${contador}  Producto(s)  agregado al carrito}`)
}
//Playera A
document.querySelector(".btn").addEventListener("click", addCart1, true);

 function addCart1()
{
//-1 is a value that returns if there is none on the array
if (PAIndex === -1){
let playeraA = document.createElement("carro");
playeraA.innerHTML = `<div class="cartAside" >
<img class= "pAI"src="/Assets/Store assets/Papás/mens-premium-heavyweight-tee-black-right-front-62de360d06753.png" alt="Chica">
<p>Chica</p>
<textarea class="qtyA" name="" id="qty" cols="10" rows="1"> 1 </textarea>
<button class= "c+A"> + </button> <button class= "c-A"> - </button>
</div>`;
document.querySelector(".side").appendChild(playeraA)
playera1.qty = 1
carrito.push(playera1) 
PAIndex = 1
}
else{
    
    playera1.qty +=1;
    document.querySelector(".qtyA").value = playera1.qty
        }
}
//Playera B
document.querySelector(".btnB").addEventListener("click", addCart2, true);

function addCart2()
{
//-1 is a value that returns if there is none on the array
if (PBIndex === -1){
let playeraB = document.createElement("carro");
playeraB.innerHTML = `<div class="cartAside" >
<img class= "pBI"src="/Assets/Store assets/Papás/mens-premium-heavyweight-tee-black-left-front-62de360d06848.png" alt="Chica">
<p>Chica</p>
<textarea class="qtyB" name="" id="qty" cols="10" rows="1"> 1 </textarea>
<button class= "c+C"> + </button> <button class= "c-C"> - </button>
</div>`;
document.querySelector(".side").appendChild(playeraB)
playera2.qty = 1
carrito.push(playera2) 
PBIndex = 1
}
else{
   
   playera2.qty +=1;
   document.querySelector(".qtyB").value = playera2.qty
       }
}
//Playera C
 document.querySelector(".btnC").addEventListener("click", addCart3, true);

 function addCart3()
{
//-1 is a value that returns if there is none on the array
if (PCIndex === -1){
let playeraC = document.createElement("carro");
playeraC.innerHTML = `<div class="cartAside" >
<img class= "pCI"src="/Assets/Store assets/Papás/mens-premium-heavyweight-tee-black-front-2-62de360d06961.png" alt="Chica">
<p>Chica</p>
<textarea class="qtyC" name="" id="qty" cols="10" rows="1"> 1 </textarea>
<button class= "c+C"> + </button> <button class= "c-C"> - </button>
</div>`;
document.querySelector(".side").appendChild(playeraC)
playera3.qty = 1
carrito.push(playera3) 
PCIndex = 1
}
else{
    
    playera3.qty +=1;
    document.querySelector(".qtyC").value = playera3.qty
        }
}



document.querySelector(".calc").addEventListener("click", getTotal, true);

const pagar = ( playera1.precio * playera1.qty)
console.log (pagar)
 function getTotal() {
    if (carrito.length === 0){
document.querySelector(".qtyC").value
//document.querySelector(".totalT").style.display = none
    }
    else{
    document.querySelector(".totalT").value = pagar
 }
}


let busqueda = document.querySelector(".lupa");
busqueda.addEventListener("click", busca);

function busca ()
{
    let monto =document.querySelector(".look").value;
    let searchresult =  prodDisp.filter ((producto) => producto.precio >= monto)

}

// Erase
document.querySelector(".erase").addEventListener("click",CarroErase, true)

function CarroErase(){
    if (carrito.length===0){
    Swal.fire({
        title: 'Nada en el carro',
        text: 'No hemos hecho nada',
        icon: 'error',
        confirmButtonText: 'Ok'
      })}
      else{

      let borro =document.querySelector(".cartAside")
      borro.remove()
      PAIndex = carrito.indexOf('playera1.qty') 
      PBIndex = carrito.indexOf('playera2.qty')     
      PCIndex = carrito.indexOf('playera3.qty')   
      carrito.length=0
      Swal.fire({
        title: 'Compras Borradas',
        text: 'Los haz eliminado a todos',
        icon: 'error',
        confirmButtonText: 'Muy mal'
      })}
      }



document.querySelector(".sMail").addEventListener("click",SendMail,true)

function SendMail()
{
    post('https://api.emailjs.com/api/v1.0/email/send')
    var dataM = {
        service_id: 'service_awj2n9l',
        template_id: 'YOUR_TEMPLATE_ID',
        user_id: 'YOUR_PUBLIC_KEY',
        template_params: {
            'username': 'James',
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
        }
    };
     
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        dataM: JSON.stringify(dataM),
        contentType: 'application/json'
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
}