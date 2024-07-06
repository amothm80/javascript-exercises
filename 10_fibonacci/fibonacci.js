const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }
  return Math.floor(
    // (((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n) /
    //   Math.sqrt(5)
    (((1 + Math.sqrt(5)) / 2)**n)/Math.sqrt(5) + (1/2)
  );
};

// Do not edit below this line
module.exports = fibonacci;
