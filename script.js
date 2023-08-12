

// Do not change the code above this
// add your promises to the array `promises`
window.promises = [];

// Function to create a promise that resolves after a random time
function createPromise() {
    return new Promise(resolve => {
        const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
        setTimeout(() => {
            resolve(randomTime);
        }, randomTime);
    });
}

// Populate the promises array with 5 promises
for (let i = 0; i < 5; i++) {
    window.promises.push(createPromise());
}

// Use Promise.any() to wait for the first promise to resolve
Promise.any(window.promises)
    .then(result => {
        // Print the result to the output div
        const outputDiv = document.getElementById("output");
        outputDiv.textContent = `First promise resolved with time: ${result} milliseconds`;
    })
    .catch(error => {
        console.error("All promises rejected:", error);
    });

