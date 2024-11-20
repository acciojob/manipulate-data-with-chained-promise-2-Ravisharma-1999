// Function that returns a promise resolving with an array of numbers after 3 seconds
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]); // Input array
        }, 3000);
    });
}

// Function to filter out odd numbers
function filterOdds(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = numbers.filter((num) => num % 2 === 0); // Filter even numbers
            resolve(evenNumbers);
        }, 1000);
    });
}

// Function to multiply even numbers by 2
function multiplyByTwo(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedNumbers = numbers.map((num) => num * 2); // Multiply by 2
            resolve(multipliedNumbers);
        }, 2000);
    });
}

// Perform the operations with promise chaining
getNumbers()
    .then((numbers) => {
        // Step 1: Filter out odd numbers
        return filterOdds(numbers).then((evenNumbers) => {
            document.getElementById("output").innerText = evenNumbers.join(","); // Update output div
            return evenNumbers; // Pass to the next chain
        });
    })
    .then((evenNumbers) => {
        // Step 2: Multiply even numbers by 2
        return multiplyByTwo(evenNumbers).then((multipliedNumbers) => {
            document.getElementById("output").innerText = multipliedNumbers.join(","); // Update output div
        });
    });
