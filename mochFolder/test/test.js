const expect = require("chai").expect;

const titleize = require("../titleize");

describe("titleize", function () {
  it("should return an error if it is a number", function () {
    expect(function () {
      titleize(256);
    }).to.throw(Error);
  });

  it("should capitalize the first letter of each word if all lowercase", function () {
    expect(titleize("a tale of two cities")).to.equal("A Tale Of Two Cities");
  });

  it("should capitalize the first letter of each word and make all other letters lowercase", function () {
    expect(titleize("A TALE OF TWO CITIES")).to.equal("A Tale Of Two Cities");
  });
});
