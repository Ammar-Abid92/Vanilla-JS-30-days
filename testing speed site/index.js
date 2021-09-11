


const words = "Pakistan officially the Islamic Republic of Pakistan is a country in South Asia It is the world's fifth-most populous country with a population exceeding 225.2 million Software engineering is the systematic application of engineering approaches to the development of software A physician medical practitioner medical doctor or simply doctor is a professional who practices medicine which is concerned with promoting maintaining or restoring health through the study diagnosis prognosis and treatment of disease injury and other physical and mental impairments";
var old = words.split(" "); 
var arr = [...new Set(old)]
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
shuffle(arr)
var right = 0;
var total = 0;
console.log(arr)
const para = document.querySelector(".para")
para.innerHTML = arr.join(" ")
const writings = document.querySelector(".values")

const new_arr = []

setTimeout(function() {
    $('input').fadeOut('slow');

}, 2000);

function findMatch(wordTomatch)
{    
    total ++;
    writings.innerHTML += "  " + `${wordTomatch}`;
    for(let i = 0; i <= arr.length; i++)
    {     
        if(arr[i] === wordTomatch)
        {
            new_arr.push(wordTomatch);
            right ++;
        }
    }
}
function start(){
    $('input').fadeIn('slow');
    countdown();
    }

function countdown() {
    
    var seconds = 60;
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 && seconds >= 10 ) {
            setTimeout(tick, 1000);
        }
        else if (seconds > 0 && seconds < 10) {
            setTimeout(tick, 1000);
            counter.style.color = "#ff0000";
        } else {
            output();
        } 
    }
    tick();
}


function displayMatches(){   
    findMatch(this.value)

}
function output(){
    const result = document.querySelector(".result")
    result.innerHTML = 
    `
    Your writing speed is: ${right} WPM <br>
     Total words: ${total} <br>
     Accuracy:  ${right/total * 100} % <br>
     Wrong Words: ${total - right}
     `
    setTimeout(function() {
        $('input').fadeOut('slow');
        $('.play').fadeOut('slow');
    }, 5000);
}

function addItem(){
    document.querySelector("input").value = "";
  }

var input = document.querySelector("input");
input.addEventListener("keyup", function(e) {
    e.preventDefault();
    if (e.keyCode === 13 || e.keyCode == 32) {
      addItem();
    }
  
  });

document.querySelector("input").addEventListener('change', displayMatches)

