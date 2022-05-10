var person = {
    name: "Wambui Kinyua",
    age: 16,
    gender: "Female",
    hobbies: ["Dancing", "Reading", "Nature trails", "Cooking"],
    isAwesome: true,
    sibling: { //this is the nested object
        name: "Mwangi Kinyua",
        age: 13
    },

};

console.log(person.sibling.name)