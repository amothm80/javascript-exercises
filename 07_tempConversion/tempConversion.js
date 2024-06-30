const convertToCelsius = function (fahrenheit) {
  celsius = ((fahrenheit - 32) * 5) / 9;
  if (celsius != 0) {
    return Number(celsius.toFixed(1));
  } else {
    return 0;
  }
};

const convertToFahrenheit = function (celcius) {
  fahrenheit = (celcius * 9) / 5 + 32;
  if (fahrenheit != 0) {
    return Number(fahrenheit.toFixed(1));
  } else {
    return 0;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
