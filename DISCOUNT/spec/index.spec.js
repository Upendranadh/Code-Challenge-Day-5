describe("Test Case 1", function () {
  it("should determine Discount Amount", function () {
    expect(find_DiscountAmount(20, 45, 10)).toEqual(58.5);
  });

  it("should determine Discount ", function () {
    expect(find_Discount(20, 45, 10)).toEqual(6.5);
  });
});

describe("Test Case 2", function () {
  it("should determine Discount Amount", function () {
    expect(find_DiscountAmount(50, 20, 7)).toEqual(65.1);
  });

  it("should determine Discount ", function () {
    expect(find_Discount(50, 20, 7)).toEqual(4.9);
  });
});

describe("Test Case 3", function () {
  it("should determine Discount Amount", function () {
    expect(find_DiscountAmount(70, 70, 20)).toEqual(112);
  });

  it("should determine Discount ", function () {
    expect(find_Discount(70, 70, 20)).toEqual(28);
  });
});

describe("Test Case 4", function () {
  it("should determine Discount Amount", function () {
    expect(find_DiscountAmount(15, 5, 0.5)).toEqual(19.9);
  });

  it("should determine Discount ", function () {
    expect(find_Discount(15, 5, 0.5)).toEqual(0.1);
  });
});

describe("Test Case 5", function () {
  it("should determine Discount Amount", function () {
    expect(find_DiscountAmount(22, 33, 4)).toEqual(52.8);
  });

  it("should determine Discount ", function () {
    expect(find_Discount(22, 33, 4)).toEqual(2.2);
  });
});
