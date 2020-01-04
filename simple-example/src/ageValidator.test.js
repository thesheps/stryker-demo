const calc = require("./ageValidator");

describe("Age Validator", () => {
  it("validates an 18 year old user", () => {
    expect(calc.isUserOldEnough({ age: 18 })).toBe(true);
  });
});
