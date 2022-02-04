const cats = ['Milo', 'Otis', 'Garfield'];

const destructivelyAppendCat = name => (cats.push("Ralph"));

const destructivelyPrependCat = name => (cats.unshift("Bob"));

const destructivelyRemoveLastCat = name => (cats.pop("Milo", "Otis"));

const destructivelyRemoveFirstCat = name => (cats.shift("Otis", "Garfield"));

const appendCat = name => [...cats, "Broom"];

const prependCat = name => ['Arnold', ...cats];

const removeLastCat = name => cats.slice(0, cats.length - 1);

const removeFirstCat = name => cats.slice(1, cats.length);




















// // Write your solution here!
// const cats =["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat(name){
//     cats.push("Ralph");
// }

// function destructivelyPrependCat(name){
//     cats.unshift("Bob");
// }

// function destructivelyRemoveLastCat(){
//     cats.splice(-1);
// }

// function destructivelyRemoveFirstCat(){
//     cats.splice(0,1);
// }

// function appendCat(name){
//     return [...cats, "Broom"];
// }

// function prependCat(name){
//     return ["Arnold", ...cats];
// }

// function removeLastCat (){
//     return cats.slice(0,-1);
// }
// function removeFirstCat (){
//     return cats.slice(1);
// }