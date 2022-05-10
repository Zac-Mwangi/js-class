var friends = [{
        name: "Kiro",
        age: 15
    },
    {
        name: "Patty",
        age: 17
    },
    {
        name: "Sandy",
        age: 14
    }
];

console.log(friends[1]); // Wambui's second friend is index 1
console.log(friends[1].name); // "Patty


// Example 2"
var kiro = {
    name: "Kiro",
    age: 15,
    favoriteAnimals: ["Duck", "Monkey", "Whale"]
};
var patty = {
    name: "Patty",
    age: "17",
    favoriteAnimals: ["Snake", "Lion", "Zebra"]
};
var sandy = {
    name: "Sandy",
    age: "16",
    favoriteAnimals: ["Flamingo", "Chicken", "Gecko"]
};

var friends = [kiro, patty, sandy]; //array to hold our objects.

console.log(friends[1].favoriteAnimals)