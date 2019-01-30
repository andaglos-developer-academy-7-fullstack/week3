/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', '', 'o', '', '', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/


function targetTerdekat(arr) {
    // you can only write your code here!
    var result = 0
    var temp = 0;
    var jarak = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'x' && temp === 'o') {
            result += jarak;
        } else if (arr[i] === 'o' && temp === 'x') {
            result += jarak;
        }
        if (arr[i] === 'x') {
            jarak = 1;
            temp = 'x';
        } else if (arr[i] === 'o') {
            jarak = 1;
            temp = 'o';
        } else {
            jarak += 1
        }
    }
    return result;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
