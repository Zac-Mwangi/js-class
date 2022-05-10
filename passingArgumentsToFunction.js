var greeting = function(name) {
    console.log("Hello " + name + "!");
};

greeting("Mary");

// passing multiple aurguments
var jumpingJacks = function(numberOfTimes, whatToDo) {
    for (var i = 1; i < numberOfTimes; i++) {
        console.log(i + " " + whatToDo);
    }
};

jumpingJacks(11, "Running Jacks"); //this will loop the function and display it 10 times.