// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const x = randomNumber(0,9);
const y = randomNumber(0,9);

const middle_num = (array, x, y) => {
    const new_array = array.filter((num) => {
        if (num < array[y] && num > array[x]) {
            return true;
        }
        return false;
    });
    return new_array;
};
console.log(array);
console.log("Posizione :", x, "-", y);
console.log(middle_num(array, x, y));

// funzione per generare un numero casuale
function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
