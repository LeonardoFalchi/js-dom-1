//SELEZIONE
const miaLampadina = document.querySelector(".myLamp");
console.log(miaLampadina);

const mioBottone = document.getElementById("myButton");
console.log("mioBottone");

//aggiungo evento su bottone
mioBottone.addEventListener('click',
    function() {
        miaLampadina.src="img/yellow_lamp.png"
    });