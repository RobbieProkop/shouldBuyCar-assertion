const assert = require("chai").assert;
// const chai = require("chai"); //imports chai to use it to assert

const shouldBuyCar = require("../shouldBuyCar"); // import shouldBuyCar function

describe("shouldBuyCar()", function () {
  //describe the function we are testing
  const car = {
    type: "hatchback",
    color: "pink",
    litresPer100km: 6,
    price: 5000,
  };
  it("should return false if it's a hatchback", function () {
    //adds expectation that it should return false
    // const car = {
    //   type: "hatchback",
    // };
    const shouldBuy = shouldBuyCar(car.type && car.type.toLowerCase());
    assert.isFalse(shouldBuy);
  });
  // it("should return true if color is pink", function () {
  //   const car = {
  //     color: "pink",
  //   };
  //   const shouldBuy = shouldBuyCar(
  //     car.color && car.color.toLowerCase() === "pink"
  //   );
  //   assert.isTrue(shouldBuy);
  // });
});
