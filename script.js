//SELEZIONE
const miaLampadina = document.querySelector(".myLamp");
console.log(miaLampadina);

const mioBottone = document.getElementById("myButton");
console.log("mioBottone");

//aggiungo evento su bottone
/* mioBottone.addEventListener('click',
    function () {
        miaLampadina.src = "img/yellow_lamp.png"
    }); */


//BONUS

//gestisco evento su bottone
mioBottone.addEventListener("click", accesaSpenta);

//creo funzione
function accesaSpenta() {
    if (miaLampadina.src.includes("white")) {
        miaLampadina.src="img/yellow_lamp.png";
        mioBottone.textContent = "Spegni";
    } else {
        miaLampadina.src="img/white_lamp.png";
        mioBottone.textContent = "Accendi";
    }
}