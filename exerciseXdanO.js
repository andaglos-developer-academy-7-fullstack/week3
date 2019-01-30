
/*
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function angkan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
*/

function xo(str) {
    // you can only write your code here!
    var oStr = 0
    var xStr = 0

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'o') {
            oStr += 1
        } else if (str[i] === 'x') {
            xStr += 1
        }
    }

    // if (oStr === xStr) {
    //     return true
    // } else {
    //     return false
    // }
    return oStr === xStr ? true : false  // metode percabangan 

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
