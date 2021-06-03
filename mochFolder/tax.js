var calculateTax = function (price) {
  if (typeof price !== "number") {
    throw new Error("must be a number!");
  }

  let newPrice = price * 1.08;
  return newPrice.toFixed(2);
};

module.exports = calculateTax;
