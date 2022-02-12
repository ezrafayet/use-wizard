const {isStepLastOfLasts} = require("../lib/cjs/useWizard/dependencies/nextStep/isStepLastOfLasts");

test("Last of lasts #1", () => {

  const a = isStepLastOfLasts(["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }], "a");
  expect(!!a).toBe(false);
});

test("Last of lasts #2", () => {

  const a = isStepLastOfLasts(["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }], "c");
  expect(!!a).toBe(false);
});

test("Last of lasts #3, last is a string", () => {

  const a = isStepLastOfLasts(["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }, "u"], "u");
  expect(!!a).toBe(true);
});

test("Last of lasts #4", () => {

  const a = isStepLastOfLasts(["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }], "h");
  expect(!!a).toBe(true);
});

test("Last of lasts #5", () => {

  const a = isStepLastOfLasts(["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }], "j");
  expect(!!a).toBe(true);
});

test("Last of lasts #6", () => {

  const a = isStepLastOfLasts(["a", "b", {
    "1": ["x", "y", "z"]
  } , "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }], "z");
  expect(!!a).toBe(false);
});