// Follow along with the examples heres

function say(greeting, firstName) {
    console.log("First Name: ", firstName);
    console.log("Greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}

say("Goodbye", "Julio");
say("Julio", "Hello");

// Add function

function add(x, y){
    return x + y;
}

console.log(add(1, 2));
console.log(add(9000, 80));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
}

console.log("Hello", "Liz");
console.log(add(1, 2));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
}

console.log(say("howdy", "partner"));