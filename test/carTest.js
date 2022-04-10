const assert = require("chai").assert;
// const chai = require("chai"); //imports chai to use it to assert

const shouldBuyCar = require("../shouldBuyCar"); // import shouldBuyCar function

describe("shouldBuyCar()", function () {
  //describe the function we are testing
  it("should return true if color is pink", function () {
    const car = {
      color: "pink",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  it("should return false if there are not details about the car", function () {
    const car = {};
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("should return false if it's a hatchback", function () {
    //adds expectation that it should return false
    const car = {
      type: "hatchback",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("should return true if type = hatchback && color = pink", function () {
    const car = {
      type: "hatchback",
      color: "pink",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("SHould return true for litres per 100km = 6 && Price <= 5000", function () {
    const car = {
      price: 5000,
      litresPer100km: 6,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  it("SHould return true for litres per 100km = 11 && Price <= 5000", function () {
    const car = {
      price: 5000,
      litresPer100km: 11,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  it("SHould return false for litres per 100km = 6 && Price > 5000", function () {
    const car = {
      price: 6000,
      litresPer100km: 6,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("SHould return false for litres per 100km = 11 && Price > 5000", function () {
    const car = {
      price: 6000,
      litresPer100km: 11,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("SHould return true for litres per 100km = 6 && Price <= 5000", function () {
    const car = {
      price: 6000,
      litresPer100km: 11,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("SHould return false for litres per 100km < 6 && Price <= 5000", function () {
    const car = {
      price: 4000,
      litresPer100km: 5,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("SHould return false for litres per 100km > 11 && Price <= 5000", function () {
    const car = {
      price: 4000,
      litresPer100km: 12,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("SHould return false for litres per 100km > 11 && Price <= 5000", function () {
    const shouldBuy = shouldBuyCar();
    assert.isUndefined(shouldBuy);
  });
});
