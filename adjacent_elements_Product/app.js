function adjacentElementsProduct(inputArray) {

    let longest = inputArray[0] * inputArray[1];

    for (let i = 0; i < inputArray.length; i++) {
        let first = inputArray[i];
        let second = inputArray[i + 1];

        let total = first * second;

        if (total > longest) {
            longest = total;
        }
    }
    return longest;

}

console.log(adjacentElementsProduct([3, 0, 5, 0, 1, 1, 20]));


function adjacentElementsProductTwo(inputArray) {
    let longest = inputArray[0] * inputArray[1];

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] * inputArray[i + 1] >= longest) {
            longest = inputArray[i] * inputArray[i + 1];
        }
    }
    return longest;

}
console.log(adjacentElementsProductTwo([3, 0, 5, 0, 1, 1, 20]));

