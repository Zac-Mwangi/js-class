// // let num1 = 5;
// // let num2 = 6;
// // let num3 = 7;
// // let num4 = 71;
// // let num5 = 12;
// // let num6 = 1;
// // let num7 = 6;

// let numArray = [5, 6, 7, 71, 12, 1, 6, "mary"];
// let numArray2 = [8, "fridah"]

// // Indexing of arrays - starts from 0

// // accessing arrays - we use the indexes

// console.log(numArray[2]);

// // finding the length of an array .length()

// console.log(numArray.length)

// // .concat concantinate 2 arrays

// console.log(numArray.concat(numArray2))

// // push - add a value in the array

// numArray2.push("Moringa");

// console.log(numArray2);

// numArray2.pop();

// console.log(numArray2);

// // To add an item to the top of our list we can use .unshift() method.

// numArray2.unshift("Moringa");
// console.log(numArray2);


let students = ["Vinn", "Karis", "Amos", "Sifuna", "Peter"]

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// while (i < students.length) {
//     console.log(students[i]);
//     i++;
// }

let i = 0;

do {
    console.log(students[i]);
    i++;
} while (i < students.length)