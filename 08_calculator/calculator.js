const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	return a.reduce((total, number)=>{
    return total+number
  },0)
};

const multiply = function(a) {
	return a.reduce((total, number)=>{
    return total*number
  },1)
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	fact = 1;
  if (a==0){
    return 1;
  }
  while (a > 0){
    fact *= a;
    a--; 
  }
  return fact;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
