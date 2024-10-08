//oggetti
//i n tutti i linguaggi di programmazione, rappresenta la modellazione in codice
//di un vero e proprio oggetto del mondo reale.
//Si tratta di un tipo di dato complesso, ovvero una collezione di -coppie chiave:valore-
//queste coppie chiave:valore vengono solitamente definite "proprietá"

const test ={} // gia un oggetto valido, peró vuoto :(

// negli oggetti l'operatore di assegnazione sono i due punti 
const smartphone = {
    brand: "Apple",
    model: "iPhone 16",
    capacity: 128,
    newModel:true,
    color:"yellow",
    "is-unlocked": true, //negli oggetti se viene utilizzato un carattere non supporato nel nome, si possono mettere le virgolette
    screen: {
        resolutionX: 1179,
        resolutionY: 2556,
        technology: "oled",
    },
}

//un oggetto puo contenere infinite ciavi:valore 

console.log("SMARTPHONE", smartphone)

console.log(
    "Ho uno smartphone di marc "+ 
    smartphone.brand + ", di colore "+
     smartphone.color
    ) 

    console.log(
        "il mio nuovo smartphone ha una risoluzione di "+ 
        smartphone.screen.resolutionX + "x"+
         smartphone.screen.resolutionY
        )



console.log(smartphone["is-unlocked"]) //true
console.log(smartphone.model)

let property = "capacity"

//NB!
// casistica in cui vogliamo leggere un valore di un oggetto (capacity di smartphone) 
//da una variabile 
console.log(smartphone[property]) //vado a leggere il valore di property, 
// e lo uso come proprietá di smartphone

//AGGIUNGERE UNA PROPRIETÁ AD UN OGGETTO GIA ESISTENTE
//
smartphone.carrier = "Tim" //nuova proprietá con valore di stringa
console.log("SMARTPHONE DOPO AGGIUNTA DI CARRIER", smartphone)

//PER MODIFICARE UNA PROPRIETÁ
smartphone.color= "green"

// ELIMINARE PROPRIETÁ 
delete smartphone.model

console.log("smartphone", smartphone)

//ARRAY 
//É UNA COLLEZIONE DI VALORI DETTA ANCHE LISTA 

const test2 = [] //array vuoto
const names = ["anna", "philipp","giulia","mark"]
const numbers = [ 0, 71, 6, 2]
const bool = [true, true, false, 90]

//un array di oggetti valore
const smartphones = [{
    brand1: "Apple",
    model1:"IPhone 16 pro",

},
{
    brand1: "Samsung",
    model1:"s24",

},
{
    brand1: "Apple",
    model1:"IPad Pro M1",

}]

//un array non identifica i propri elementi tramite "nome"
//la posizione identifica gli elementi
// le posizioni JS iniziano da 0

const firstSmartphone = smartphones [0]
const secondSmartphone = smartphones [1]
const thirdSmartphone = smartphones [2]

console.log(smartphones[0].brand)
console.log(smartphones[2].model)

//RECUPERO NOME GIULIA E LO FACCIO DIVENTZARAE MAIUSCOLO
console.log(names[2].tuUpperCase())// "GIULIA"

