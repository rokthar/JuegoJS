document.getElementById('player').addEventListener("click",sumarPuntos);
document.getElementById('enemy').addEventListener("mouseover",restarPuntos);


let puntos=0;
let tiempo=60;
const necesario = 50;
function restarPuntos(){
    puntos--;
    document.getElementById('puntos').innerHTML = "Puntos: <b>" + puntos + "</b>";
}

function sumarPuntos(){
    puntos++;
    document.getElementById('puntos').innerHTML = "Puntos: <b>" + puntos + "</b>";
    posx = Math.round(Math.random()*300);
    posy = Math.round(Math.random()*300);

    document.getElementById('player').style.marginTop = posy+"px";
    document.getElementById('player').style.marginLeft = posx+"px";

    if(puntos == necesario){
        alert("Ganaste Bro");
        window.location.reload();
    }
}

function moverPlayer(){
    posx = Math.round(Math.random()*300);
    posy = Math.round(Math.random()*300);

    document.getElementById('player').style.marginTop = posy+"px";
    document.getElementById('player').style.marginLeft = posx+"px";
}

function moverEnemy(){
    posx = Math.round(Math.random()*300);
    posy = Math.round(Math.random()*300);

    document.getElementById('enemy').style.marginTop = posy+"px";
    document.getElementById('enemy').style.marginLeft = posx+"px";
}

setInterval(pasarTiempo,1000);
setInterval(moverPlayer,1000);
setInterval(moverEnemy,1500);

function pasarTiempo(){
    tiempo--;
    document.getElementById('tiempo').innerHTML = "Tiempo: "+tiempo+"s";
    if(tiempo == 0){
        alert("Has Perdido");
        window.location.reload();
    }
}