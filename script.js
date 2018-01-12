function exerciseOne() {
    var number = prompt("Enter a Number!");
    var outcome = 0;

    for (var i = 1; i <= number; i++) {
        outcome += i;
    }
    console.log("Output: " + outcome);
}

function exerciseTwo() {
    var play = prompt("Do you want to play?");

    if (play === "yes") {
        var outcome = "";
        do {
            var word = prompt("Enter a word!");
            play = prompt("Do you want to play again?");
            outcome += word;
            if (play === "yes") {
                outcome += " ";
            }
        }
        while (play === "yes");
        
        console.log(outcome);
    }
}

function exerciseThree() {
    var answer = prompt("Would you like to print your name?");
    
    if (answer === "yes") {
        var name = prompt("Enter your name.");
        var print = "Hello, my name is " + name;
        console.log(print)
        while (answer === "yes") {
            answer = prompt("Would you like to print this again?");
            if (answer === "yes") {
                print += "!";
                console.log(print);
            }
        }
    }
}

function exerciseFour() {
    var time = prompt("What time of day is it?");
    var meal = "";
    var food = "";

    if (time === "morning") {
        meal = "breakfast";
        food = "eggs and toast";
    } else if (time === "noon") {
        meal = "lunch";
        food = "a salad";
    } else if (time === "evening") {
        meal = "dinner";
        food = "chicken and rice";
    } else {
        meal = "some real food";
        food = "nails and screws";
    }
    console.log("Since it is " + time + " you should be eating " + meal + ". We suggest " + food + ".");
}

exerciseOne();
exerciseTwo();
exerciseThree();
exerciseFour();