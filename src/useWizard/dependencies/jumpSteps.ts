import {TWizardType} from "../types/TWizardType";
import {TWizardOptions} from "../types/TWizardOptions";

export {jumpSteps};

const jumpSteps = (args: { wizardType: TWizardType, options: TWizardOptions, setHistory: Function }) => (jump: number) => {
  
  if(args.wizardType !== "linearN") return console.log("Wizard warning: steps-jumping does not work with this kind of wizard");
  
  args.setHistory((ps: number[]) => [...ps, ps[ps.length - 1] + jump]);
  return;
}
