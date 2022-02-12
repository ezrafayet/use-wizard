const {getInitialStep} = require("../lib/cjs/useWizard/dependencies/getInitialStep");

test("Test with numbers, no initialStep set", ()=>{
  const a = getInitialStep();
  expect(a).toBe(1);
});

test("Test with numbers, no initialStep set", () => {
  const a = getInitialStep(8);
  expect(a).toBe(8);
});

test("Test with linear strings steps", ()=>{
  const a = getInitialStep(["a", "b", "c"]);
  expect(a).toBe("a");
});

test("Test with complex strings steps", ()=>{
  const a = getInitialStep(["a", "b", {
    "1": ["c", "d"]
  }]);
  expect(a).toBe("a");
});