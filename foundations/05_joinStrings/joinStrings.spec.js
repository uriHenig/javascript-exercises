const values = require("./joinStrings");

describe("step 2", () => {
  test("firstName is Johnny", () => {
    expect(values.firstName).toEqual("Johnny");
  });
  test("lastName is Krispy", () => {
    expect(values.lastName).toEqual("Krispy");
  });
  test("thisYear is 2026", () => {
    expect(values.thisYear).toEqual(2026);
  });
  test("birth year is 1989", () => {
    expect(values.birthYear).toEqual(1989);
  });
  test("greeting is properly output", () => {
    expect(values.greeting).toEqual(
      "Hello! My name is Johnny Krispy and I am 37 years old.",
    );
  });
});

describe("step 3", () => {
  test("fullName is Carlos Stevenson", () => {
    expect(values.fullName).toEqual("Carlos Stevenson");
  });
  test("age is 18", () => {
    expect(values.age).toEqual(18);
  });
});
