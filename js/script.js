const giorniEl = document.querySelector('#giorni');
const oreEl = document.querySelector('#ore');
const minutiEl = document.querySelector('#minuti');
const secondiEl = document.querySelector('#secondi');
const riquadroEl = document.querySelector('.riquadro');

const dataFinale = new Date("December 25 2023");
const dataFinaleInMs = dataFinale.getTime();

console.log(dataFinale);
console.log(dataFinaleInMs);

const secondiInMs = 1000;
const minutiInMs = 60 * secondiInMs;
const oreInMs = 60 * minutiInMs;
const giorniInMs = 24 * oreInMs;

// console.log(adessoMs);

// console.log(diff);

// console.log(diff / giorniInMs);
// console.log(diff % giorniInMs);


const contatore = setInterval(tempo, 1000);

function tempo() {
    // console.log("gaio come un gelataio chi legge")
    // in basso ricaviamo quanto è passato dal 1 gennaio 1970 ad ora
    const adessoMs = new Date().getTime();
    const diff = dataFinaleInMs - adessoMs;

    if (diff > 0) {
        giorniEl.innerHTML = Math.floor(diff / giorniInMs);
        oreEl.innerHTML = Math.floor( (diff % giorniInMs) / oreInMs);
        minutiEl.innerHTML = Math.floor((diff % oreInMs) / minutiInMs);
        secondiEl.innerHTML = Math.floor((diff % minutiInMs) / secondiInMs);
    } else {
        clearInterval(tempo);
        riquadroEl.innerHTML = "<h1>Buon Natale!🎅🏻</h1>";
    }
}
