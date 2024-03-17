
let num;


// Array of nouns
const nouns = ["cat", "dog", "tree", "house", "car", "book", "computer", "beach", "mountain", "pizza"];

// Array of adjectives
const adjectives = ["happy", "sad", "big", "small", "green", "red", "fast", "slow", "loud", "quiet"];

// Array of verbs
const verbs = ["runs", "jumps", "sleeps", "eats", "reads", "flies", "swims", "laughs", "cries", "dances"];

function nounCount() {
    num = Math.floor(Math.random() * 10);
    return num;
}

nounCount();


console.log(`${adjectives[num]} ${nouns[num]} ${verbs[num]}`);