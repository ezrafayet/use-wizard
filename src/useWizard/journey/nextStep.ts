import {getWizardStrategy} from "./dependencies/getWizardStrategy";
import {isStepLastOfLasts} from "./dependencies/isStepLastOfLasts";
import {getNextStep} from "./dependencies/getNextStep";

export {nextStep};

const nextStep = (history: (number|string)[], setHistory: Function) => (currentStep: string|number, options?: (string | any)[] | number) => () => {
  
  const wizardStrategy = getWizardStrategy(options);
  
  if(wizardStrategy === "simple") {
    return setHistory((ps: number[]) => [...ps, ps[ps.length - 1] + 1]);
  }
  
  if(isStepLastOfLasts(options, history[history.length - 1] as string)) {
    return console.log("Wizard: impossible to process to next step, step is already last");
  }
  // const nextStep = getNextStep(options, history[history.length - 1] as string);
  
  setHistory((ps: any) => [...ps, getNextStep(history[history.length - 1] as string, options)]);
  
}