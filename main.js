const ok = document.querySelector('.ok');
const instruc = document.querySelector('.instruc');
const container = document.querySelector('.container');

const form = document.querySelector('form')

ok.addEventListener('click', function(){
    instruc.style.display = "none";
    container.style.display = "block";
})

form.addEventListener('submit', function(e){
    e.preventDefault();

    let campoA = document.querySelector('#campoA');
        campoA = Number(campoA.value);
    let campoB = document.getElementById('campoB');
        campoB = Number(campoB.value);
    function validaForm(){
        if(campoB > campoA){
            return true
        }else{
            return false
        }
    }    
    if(validaForm()){
        alert(campoB - campoA)
    }else{
        alert(`O valor no ${campoA} e maior que o valor no ${campoB} deixando o formulario invalido`)
    }
})

