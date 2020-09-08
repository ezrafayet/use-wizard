const {isStepLastOfItsLevel} = require("../lib/cjs/useWizard/journey/dependencies/isStepLastOfItsLevel");

test("Last of it's level #1", () => {

  const a = isStepLastOfItsLevel(["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }], "b");
  expect(!!a).toBe(false);
});

test("Last of it's level #2", () => {

  const a = isStepLastOfItsLevel(["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }], "d");
  expect(!!a).toBe(false);
});

test("Last of it's level #3", () => {

  const a = isStepLastOfItsLevel(["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }], "i");
  expect(!!a).toBe(false);
});

test("Last of it's level #4", () => {

  const a = isStepLastOfItsLevel(["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }], "c");
  expect(!!a).toBe(false);
});

test("Last of it's level #5", () => {

  const a = isStepLastOfItsLevel(["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }], "e");
  expect(!!a).toBe(false);
});

test("Last of it's level #6", () => {

  const a = isStepLastOfItsLevel(["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }], "j");
  expect(!!a).toBe(true);
});

test("Last of it's level #7", () => {

  const a = isStepLastOfItsLevel(["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }], "h");
  expect(!!a).toBe(true);
});