const contador = document.getElementById("contador");
const soma = document.getElementById("mais__produto");
const sub = document.getElementById("menos__produto");

const b8 = document.getElementById("b8one")

let numero = 0;

soma.addEventListener("click", ()=> {

    if(numero == 3){
        alert('Limite de estoque atingido')
    }

    else{
        numero++;
        contador.innerHTML = numero;

    }
   
});

sub.addEventListener("click", ()=> {

    if(numero == 0){}
        else{

            numero--;
            contador.innerHTML = numero;

        }
    

    
});

b8.addEventListener("click", ()=> {

    alert('Hugo, Me contrata! <3')    

    
});



