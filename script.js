myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

class InvalidInputError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidInputError";
    }
}

function validateNumber(input) {
    if (typeof input !== "number") {
        throw new InvalidInputError("Input must be a number.");
    }
    if (input < 0 || input > 100) {
        throw new InvalidInputError("Input must be between 0 and 100.");
    }
    console.log("Valid input: " + input);
}

try {
    validateNumber(150);
} catch (error) {
    if (error instanceof InvalidInputError) {
        console.error("Custom Exception Caught: " + error.message);
    } else {
        console.error("An unexpected error occurred: " + error.message);
    }
}

try {
    validateNumber(85);
} catch (error) {
    console.error("An unexpected error occurred: " + error.message);
}
