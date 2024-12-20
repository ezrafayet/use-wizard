const {getNextStep} = require("../lib/cjs/useWizard/dependencies/nextStep/getNextStep");

test("Linear path from first step", () => {

  const a = getNextStep("a", ["a", "b", "c"]);
  expect(a).toBe("b");
});

test("Linear wizard from middle step", () => {

  const a = getNextStep("b", ["a", "b", "c"]);
  expect(a).toBe("c");
});

test("Linear wizard from last step", () => {

  const a = getNextStep("c", ["a", "b", "c"]);
  expect(a).toBe("c");
});

test("Complex wizard from first step to other string step", () => {

  const a = getNextStep("a", ["a", "b", "c", {
    "1": ["d", "e", "f"],
    "2": ["g", "h"],
  }, "i"]);
  expect(a).toBe("b");
});

test("Complex wizard from nested step first position", () => {

  const a = getNextStep("d", ["a", "b", "c", {
    "1": ["d", "e", "f"],
    "2": ["g", "h"],
  }, "i"]);
  expect(a).toBe("e");
});

test("Complex wizard from other nested step first position", () => {

  const a = getNextStep("g", ["a", "b", "c", {
    "1": ["d", "e", "f"],
    "2": ["g", "h"],
  }, "i"]);
  expect(a).toBe("h");
});

test("Complex wizard from nested step middle position", () => {

  const a = getNextStep("e", ["a", "b", "c", {
    "1": ["d", "e", "f"],
    "2": ["g", "h"],
  }, "i"]);
  expect(a).toBe("f");
});

test("Complex wizard from nested last position", () => {

  const a = getNextStep("f", ["a", "b", "c", {
    "1": ["d", "e", "f"],
    "2": ["g", "h"],
  }, "i"]);
  expect(a).toBe("i");
});

test("Complex wizard from string to next nested position (follows path 1)", () => {

  const a = getNextStep("c", ["a", "b", "c", {
    "1": ["d", "e", "f"],
    "2": ["g", "h"],
  }, "i"]);
  expect(a).toBe("d");
});

test("Complex wizard from double nested path, any position but last", () => {

  const a = getNextStep("i", ["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }]);
  expect(a).toBe("j");
});

test("Complex wizard from double nested path, last position", () => {

  const a = getNextStep("j", ["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }]);
  expect(a).toBe("j");
});
