// Define an array with some integer elements.
const array = [12, 10, 22, 5, 25];

// Loop over the array with 'var' which will cause a problem.
for (var i = 0; i < array.length; i++) {
    // Set a timeout function to print each element after a delay of 5 seconds.
    setTimeout(function() {
        console.log("The element in position " + i + " is: " + array[i]);
    }, 5000);
}

// The element in position 5 is: undefined


// Explanation:
// - Using 'var' for the loop variable 'i' causes it to be shared across all loop iterations.
// - This results in 'i' being 5 (array length) when the timeout function executes, leading to an undefined array element.
// - A fix can be made by using 'let' instead of 'var', or by using an Immediately Invoked Function Expression (IIFE) to retain each loop's 'i' value.

// Solution 1: Using 'let' instead of 'var' to retain the value of 'i' in each loop iteration.
for (let i = 0; i < array.length; i++) {
    setTimeout(function() {
        console.log("The element in position " + i + " is: " + array[i]);
    }, 5000);
}

// Solution 2: Using an IIFE to retain 'i' in each iteration.
for (var i = 0; i < array.length; i++) {
    (function(index) {
        setTimeout(function() {
            console.log("The element in position " + index + " is: " + array[index]);
        }, 5000);
    })(i); // Pass the current value of 'i' to the function.
}
