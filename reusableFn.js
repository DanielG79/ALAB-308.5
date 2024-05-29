function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function averageArray(arr) {
    return arr.length === 0 ? 0 : sumArray(arr) / arr.length;
}

function longestString(arr) {
    return arr.reduce((longest, str) => str.length > longest.length ? str : longest, '');
}

function stringsLongerThan(arr, length) {
    return arr.filter(str => str.length > length);
}

function printNumbers(n) {
    if (n === 0) {
    return;
    }
    printNumbers(n - 1);
    console.log(n);
}   

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(averageArray([1, 2, 3, 4, 5])); // Output: 3
console.log(longestString(['say', 'hello', 'in', 'the', 'morning'])); // Output: 'morning'
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)); // Output: ['hello', 'morning']
printNumbers(5); // Output: 1, 2, 3, 4, 5

function printNumbers(n, result = []) {
    if (n === 0) {
    return result;
    }
    return printNumbers(n - 1, [n, ...result]);
}

console.log(printNumbers(5)); // Output: [1, 2, 3, 4, 5]    

// Part 2: Thinking Methodically
// data
const people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// sorting array by age

const sortedByAge = people.sort((a, b) => parseInt(a.age) - parseInt(b.age));
console.log("Sorted by age:", sortedByAge);

// Filter the array to remove entries with an age greater than 50
const under50 = people.filter(person => parseInt(person.age) <= 50);
console.log("Filtered to under 50:", under50);

// Map the array to change the "occupation" key to "job" and increment every age by 1
const modifiedPeople = people.map(person => ({
    id: person.id,
    name: person.name,
    job: person.occupation,
    age: parseInt(person.age) + 1
}));
console.log("Modified people:", modifiedPeople);

// Use the reduce method to calculate the sum of the ages
const totalAge = people.reduce((sum, person) => sum + parseInt(person.age), 0);
console.log("Total age:", totalAge);

// Calculate the average age
const averageAge = totalAge / people.length;
console.log("Average age:", averageAge);    

// Part 3: Thinking Critically

function incrementAge(obj) {
  // Check if the object has an 'age' field, and create it if it doesn't exist
    if (!obj.hasOwnProperty('age')) {
    obj.age = 0;
    }

  // Increment the 'age' field
    obj.age++;

  // Update the 'updated_at' field with the current time
    obj.updated_at = new Date();

    return obj;
}   