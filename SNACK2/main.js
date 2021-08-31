// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const array_squad = [
    {nome:"Z0", punti:0, falli:0},
    {nome:"Z1", punti:0, falli:0},
    {nome:"Z2", punti:0, falli:0},
    {nome:"Z3", punti:0, falli:0},
    {nome:"Z4", punti:0, falli:0},
    {nome:"Z5", punti:0, falli:0},
    {nome:"Z6", punti:0, falli:0},
    {nome:"Z7", punti:0, falli:0},
    {nome:"Z8", punti:0, falli:0},
    {nome:"Z9", punti:0, falli:0}  
];

const array_falli =[]
for (let i = 0; i < array_squad.length; i++) {
    array_squad[i].falli= randomNumber(0,10);
    array_squad[i].punti= randomNumber(0,10);
    const {nome, falli} = array_squad[i];
    array_falli.push({nome, falli});

}

console.log(array_falli);

// funzione per generare un numero casuale
function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
