import {getWizardStrategy} from "./dependencies/getWizardStrategy";

export {jumpSteps};

const jumpSteps = (setHistory: Function, options?: (string | any)[] | number) => (jumpSize: number) => {
  
  const wizardStrategy = getWizardStrategy(options);
  
  if(wizardStrategy === "simple") {
    throw new Error("Wizard: steps jumping does not currently work with strings");
  }
  
  return setHistory((ps: number[]) => [...ps, ps[ps.length - 1] + jumpSize]);
}