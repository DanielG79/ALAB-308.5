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