secondHand = document.querySelector('.sec-hand');
minHand = document.querySelector('.min-hand')
hourHand = document.querySelector('.hour-hand')
function setDate(){

const now = new Date();
// console.log(now)
const seconds = now.getSeconds();
const minute = now.getMinutes();
const hour = now.getHours()
const secondDegree = ((seconds / 60) * 360 ) + 90;
const minDegree = ((minute/60)*360) +90;
const hourDegree = (((hour % 12)/12)*360)+90;

secondHand.style.transform=`rotate(${secondDegree}deg)`
minHand.style.transform=`rotate(${minDegree}deg)`
hourHand.style.transform=`rotate(${hourDegree}deg)`
hourHand.style.background='#FFF37E';
minHand.style.background='#FFF37E';


}

setInterval(setDate, 1000);


