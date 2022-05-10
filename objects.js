var person = {
    name: "Wambui Kinyua",
    age: 16,
    gender: "female",
    hobbies: ["Dancing", "Reading", "Nature trails", "Cooking"],
};

console.log(person);


// ACESSING VALUES IN OBJECT
console.log(person.age); //acessing the object
console.log(person.hobbies[2]);

person.isAwesome = true;

console.log(person)

// DELETING 
delete person.isAwesome;
console.log(person)