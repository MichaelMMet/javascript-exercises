const ftoc = function (fNum) {
  let celcius = 0;
  celcius = (fNum - 32) * (5 / 9);
  celcius = Math.round(celcius * 10) / 10;

  celcius = parseFloat(celcius.toFixed(1));
  return celcius;
};

const ctof = function (cNum) {
let farenheit = 0;
farenheit = (cNum * (9/5)) + 32;
farenheit = Math.round(farenheit * 10) / 10;
farenheit = parseFloat(farenheit.toFixed(1));
return farenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
