// function centuryFromYear(year) {
//     if (year % 100 === 0) {
//         return year / 100;
//     }
//     return Math.floor(year/100) + 1;
// }

function centuryFromYear(year) {
    return Math.floor(--year/100) + 1;
}

console.log(centuryFromYear(2010));