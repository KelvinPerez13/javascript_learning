function playSound(elementoAudio){
    document.querySelector(elementoAudio).play();
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

while (contador < listaDeTeclas.length){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const aud = '#som_' + instrumento;
    //console.log(instrumento);
   // console.log(aud);


    tecla.onclick = function (){
        playSound(aud)
        
    }
    
    contador = (contador + 1);
   // console.log(contador)

}
