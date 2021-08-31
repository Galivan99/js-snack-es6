// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const array_bici = [
    {nome:"Z0", peso:99},
    {nome:"Z1", peso:79},
    {nome:"Z2", peso:29},
    {nome:"Z3", peso:35},
    {nome:"Z4", peso:49},
    {nome:"Z5", peso:59},
    {nome:"Z6", peso:36},
    {nome:"Z7", peso:75},
    {nome:"Z8", peso:438},
    {nome:"Z9", peso:59}  
];

let peso_minore = array_bici[0].peso;

array_bici.forEach((element, i) => {
    const { peso, nome } = array_bici[i];
    console.log(nome, peso);

    if (peso < peso_minore){
        peso_minore = peso;
        nome_minore = nome;
    };

});
console.log(
    `
    il nome della bici più leggera è ${nome_minore}
    il peso della bici più leggera è ${peso_minore}
    `
); 

