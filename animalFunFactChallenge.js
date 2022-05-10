var animal = {};

animal = {
    zebra: {
        classification: "Mammal",
        appearance: ["white with black strips", "4 legs", "Looks like a donkey"],
        habitat: "Grasslands",
        lifespan_in_years: 25,
        diet: "hearbivore",
        friendly: true
    },
    crocodile: {
        classification: "Reptile",
        appearance: ["Long", "wide mouth with many teeth", "Close relatives to dinosaurs", "Looks like a big lizard"],
        habitat: "Grasslands",
        lifespan_in_years: 100,
        diet: "Carnivore",
        friendly: true
    }
};

//adding new fact about a new animal

var ostrich = {
        classification: "Bird",
        appearance: ["Big, tall bird", "2 legs", "Has a long neck"],
        habitat: "Grasslands",
        lifespan_in_years: 45,
        diet: "Herbivore",
        friendly: true
    }
    // addding ostrich object to animal object
animal.ostrich = ostrich;
console.log(animal)

var shark = {
    classification: "Fish",
    appearance: ["Sharp teeth", "Has fins", "Has gills"],
    habitat: "Water",
    lifespan: 30,
    diet: "Carnivore",
    friendly: true
}

animal.shark = shark;

console.log(animal)