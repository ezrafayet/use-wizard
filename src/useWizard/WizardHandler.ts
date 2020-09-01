import {getInitialStep} from "./dependencies/getInitialStep";
import {getWizardStrategy} from "./dependencies/getWizardStrategy";
import {isStepLastOfLasts} from "./dependencies/isStepLastOfLasts";
import {getNextStep} from "./dependencies/getNextStep";

export class WizardHandler {
  
  private readonly wizardStrategy: "simple" | "complex";
  private readonly options: (string | any)[] | number | undefined;
  private readonly initialStep: number | string;
  private readonly setStep: Function;
  
  /** saved data on history, current step is the last element in it */
  private setHistory: Function;
  
  constructor(setStep: Function, setHistory: Function, options?: (string | any)[] | number) {
    
    this.setStep = setStep;
    this.setHistory = setHistory;
    this.options = options || undefined;
    this.initialStep = getInitialStep(options);
    this.wizardStrategy = getWizardStrategy(options);
    
  }
  
  public nextStep = (history: any) => () => {
    
    if(this.wizardStrategy === "simple") {
      this.setHistory((ps: any) => [...ps, history[history.length - 1] + 1]);
      return this.setStep((previousStep: any) => previousStep + 1);
    }
    
    if(isStepLastOfLasts(this.options, history[history.length - 1] as string)) {
      return console.log("Wizard: step is the last, impossible to process to next step, step is already last");
    }
    
    const nextStep = getNextStep(this.options, history[history.length - 1] as string);
  
    this.setHistory((ps: any) => [...ps, nextStep]);
    return this.setStep(nextStep);
  }
  
  public previousStep = (history: any) => async() => {

      this.setHistory((ps: any) => [...ps.slice(0,-1)]);
      return this.setStep(history[history.length - 2]);
  }
  
  public initialize = () => {
  
    this.setHistory((ps: any) => [...ps, this.initialStep]);
    this.setStep(this.initialStep);
  }
  
  public jumpSteps = (jumpSize: number) => {
    
    if(this.wizardStrategy === "simple") {
      this.setHistory((ps: any) => [...ps, ps[ps.length - 1] + jumpSize]);
      return this.setStep((previousStep: any) => previousStep + jumpSize);
    }
    
    console.log("Wizard: jump is not handled yet for complex forms");
    
  }
  
  public goToStep = (step: number | string) => {
    
    this.setStep(step);
    this.setHistory((ps: any) => [...ps, step]);
  }
  
  
}