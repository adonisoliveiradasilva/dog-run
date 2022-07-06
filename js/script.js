
window.addEventListener('keyup', function(e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var space = codigoTecla == 32;
    if (space) {
        document.querySelector('.dog').classList.add('jump');  
        this.setTimeout(() => {
            document.querySelector('.dog').classList.remove('jump');
        } ,1000);
    };
  
  });

const loop = setInterval(()=> {

    const pipePosition = document.querySelector('.pipe').offsetLeft;
    const dogPosition  =+ window.getComputedStyle(document.querySelector('.dog')).bottom.replace('px', '');

    console.log(dogPosition);

    if(document.querySelector('.pipe').offsetLeft <= 110 &&  document.querySelector('.pipe').offsetLeft > 0 && dogPosition <= 110 ){

        document.querySelector('.pipe').style.animation = 'none';
        document.querySelector('.pipe').style.left = `${pipePosition}px`;

        document.querySelector('.dog').style.animation = 'none';
        document.querySelector('.dog').style.bottom = `${dogPosition}px`;

        document.querySelector('.dog').src = "./img/game-over.png";
        document.querySelector('.dog').style.width = '135px';
        document.querySelector('.dog').style.marginLeft = '5px';

        clearInterval(loop);
        
    }


}, 10);