const palindromes = function (sentence) {
    pal1 = sentence.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    pal2 = pal1.split("").reverse().join("")
    return pal1 == pal2;
};

// Do not edit below this line
module.exports = palindromes;
