var expect = require("chai").expect;
var calculateTax = require("../tax");

describe("calculateTax", function () {
  it("should throw an error if not a number", function () {
    expect(function () {
      calculateTax("hello");
    }).to.throw(Error);
  });

  it("should return correct price with tax", function () {
    expect(calculateTax(1.0)).to.equal("1.08");
  });

  it("should return two decimals always", function () {
    expect(calculateTax(1)).to.equal("1.08");
  });

  it("should return two decimals always", function () {
    expect(calculateTax(1.0)).to.equal("1.08");
  });
});
