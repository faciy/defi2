
const secondDiv = document.querySelector('.second-hand');
const minDiv = document.querySelector('.min-hand');
const heureDiv = document.querySelector('.heure-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secDeg = ((seconds/60) * 360 + 90);
    secondDiv.style.transform = `rotate(${secDeg}deg)`;

    const mins = now.getMinutes();
    const minDeg = ((mins/60) * 360) + ((seconds/60)*6) + 90;
    minDiv.style.transform = `rotate(${minDeg}deg)`;

    const heures = now.getHours();
    const heureDeg = ((heures/12) * 360) + ((mins/60)*30) + 90;
    heureDiv.style.transform = `rotate(${heureDeg}deg)`;
    
}

setInterval(setDate,1000);

