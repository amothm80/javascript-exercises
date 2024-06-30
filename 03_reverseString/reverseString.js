const reverseString = function(string) {
    // let revStr = '';
    // for (let i = 1; i <= string.length; i++){
    //     revStr += string.at(-1 * i)
    // }
    // return revStr;
    return string.split("").reverse().join("");


};

// Do not edit below this line
module.exports = reverseString;
