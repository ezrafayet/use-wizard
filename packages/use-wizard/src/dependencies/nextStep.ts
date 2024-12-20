import {isStepLastOfLasts} from "./nextStep/isStepLastOfLasts";
import {getNextStep} from "./nextStep/getNextStep";
import {TStep} from "../types/TStep";
import {TWizardOptions} from "../types/TWizardOptions";
import {TWizardType} from "../types/TWizardType";
import {getWizardType} from "./nextStep/getWizardType";

export {nextStep};

const nextStep = (args: { wizardType: TWizardType, history: TStep[], setHistory: Function, setPoppedHistory: Function, options: TWizardOptions }) => () => {
  
  args.setPoppedHistory([]);
  
  if(args.wizardType === "linearN") {
    return args.setHistory((ps: number[]) => [...ps, ps[ps.length - 1] + 1]);
  }
  
  if(isStepLastOfLasts(args.options, args.history[args.history.length - 1] as string)) {
    return console.log("Wizard warning: impossible to process nextStep(), you hit the last step");
  }
  
  args.setHistory((ps: any) => [...ps, getNextStep(args.history[args.history.length - 1] as string, args.options)]);
  
  return;
}