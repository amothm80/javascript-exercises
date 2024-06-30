const sumAll = function(firstNumber, lastNumber) {
    let sum = 0;
    if (typeof firstNumber != 'number' || 
        typeof lastNumber != 'number' ||
        firstNumber < 0 ||
        lastNumber < 0){
        return 'ERROR';
    }
    if (firstNumber < lastNumber){
        firstNumberLocal = firstNumber;
        lastNumberLocal = lastNumber;
    }else{
        firstNumberLocal = lastNumber;
        lastNumberLocal = firstNumber;
    }

    for (let i = firstNumberLocal; i<=lastNumberLocal; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
