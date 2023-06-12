function playSound(elementoAudio){
    elemento = document.querySelector(elementoAudio);
    if (elemento != null && elemento.localName === 'audio'){
            elemento.play();
    }
    else {
        console.log('elemento nao localizado')
    }
     }

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

for (let contador = 0; contador < listaDeTeclas.length; contador++){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const aud = '#som_' + instrumento;
    console.log(contador);
   // console.log(aud);


    tecla.onclick = function (){
        playSound(aud)
        
    }
    
    
    tecla.onkeydown = function(event){
        console.log(event.code)
        if (event.code === 'Enter'  || event.code === 'Space') {
        tecla.classList.add('ativa')
        }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
        }
    }    
    
    
   // console.log(contador)

}
