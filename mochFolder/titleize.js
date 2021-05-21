let titleize = function (str) {
  if (typeof str === "number") {
    throw new Error("The title cannot be a number.");
  }

  let aryStr = str.toLowerCase().split("");
  for (let i = 0; i < aryStr.length; i++) {
    const letter = aryStr[i];

    if (i === 0) {
      aryStr[i] = letter.toUpperCase();
    } else {
      const previousElement = aryStr[i - 1];
      if (previousElement === " ") {
        aryStr[i] = letter.toUpperCase();
      }
    }
  }

  return aryStr.join("");
};

module.exports = titleize;
