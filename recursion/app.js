// function factorial(n) {
//   var result = 1;
//   for (let i = n; i > 0; i--) {
//     result *= i;
//   }
//   return result;
// }

function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}

factorial(3);

// 3 * 2 * 1