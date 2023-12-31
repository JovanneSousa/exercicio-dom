const ok = document.querySelector('.ok');
const instruc = document.querySelector('.instruc');
const container = document.querySelector('.container');

const form = document.querySelector('form');
let campoA = document.querySelector('#campoA');
let campoB = document.querySelector('#campoB');


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
            return true;
        }else{
            return false;
        }
    }    

    if(validaForm()){
        let res = campoB - campoA
        const txt = document.querySelector('.txt-sucess')

        txt.style.display = 'flex'
        txt.innerHTML = `Parabéns, você tem ${res} anos de idade <img src="./img/niver.png" alt="imagem minimalista de confetes">`
        document.querySelector('#txt-menor').style.display = 'none';
        document.querySelector('#txt-maior').style.display = 'none';
        document.querySelector('#campoA').classList.remove('error-form');
        document.querySelector('#campoB').classList.remove('error-form');
        document.querySelector('#campoA').value = '';
        document.querySelector('#campoB').value = '';

    }else{
        document.querySelector('#campoA').classList.add('error-form');
        document.querySelector('#campoB').classList.add('error-form');
        document.querySelector('#txt-menor').style.display = 'block';
        document.querySelector('#txt-menor').innerHTML = `insira um valor <b>menor</b> que ${campoB}`
        document.querySelector('#txt-maior').innerHTML = `insira um valor <b>maior</b> que ${campoA}`
        document.querySelector('#txt-maior').style.display = 'block';
        document.querySelector('#campoA').value = '';
        document.querySelector('#campoB').value = '';
    }
})

