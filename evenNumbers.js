function printNumbers() {
    console.log("Numbers from 1 to 10:");
    for (let i = 1; i <= 10; i++) {
        console.log(i); // Log each number from 1 to 10
    }
}

// Function to print even numbers from 1 to 10
function printEvenNumbers() {
    console.log("Even numbers from 1 to 10:");
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i); // Log even numbers
        }
    }
}