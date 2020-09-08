const {getWizardStrategy} = require("../lib/cjs/useWizard/journey/dependencies/getWizardStrategy");


test("Simple strategy with no option", () => {

  const a = getWizardStrategy();
  expect(a).toBe("simple");
});

test("Simple strategy with a first step", () => {

  const a = getWizardStrategy(4);
  expect(a).toBe("simple");
});

test("Complex wizard with linear strategy", () => {

  const a = getWizardStrategy(["a", "b", "c"]);
  expect(a).toBe("complex");
});

test("Complex wizard from double nested path", () => {

  const a = getWizardStrategy(["a", "b", "c", {
    "1": ["d", "e", {
      "1": ["i", "j"]
    }],
    "2": ["g", "h"],
  }]);
  expect(a).toBe("complex");
});