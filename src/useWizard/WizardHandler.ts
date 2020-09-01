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
  private history: (string | number)[];
  
  constructor(setStep: Function, options?: (string | any)[] | number) {
    
    this.setStep = setStep;
    this.options = options || undefined;
    this.initialStep = getInitialStep(options);
    this.wizardStrategy = getWizardStrategy(options);
    this.history = [this.initialStep];
    
  }
  
  public nextStep = () => {
    
    if(this.wizardStrategy === "simple") {
      this.history.push((this.history[this.history.length - 1] as number) + 1);
      return this.setStep((previousStep: any) => previousStep + 1);
    }
    
    if(isStepLastOfLasts(this.options, this.history[this.history.length - 1] as string)) {
      return console.log("Wizard: step is the last, impossible to process to next step, step is already last");
    }
    
    const nextStep = getNextStep(this.options, this.history[this.history.length - 1] as string);
  
    this.history.push(nextStep);
    return this.setStep(nextStep);
  }
  
  public previousStep = () => {
  
    this.history.pop();
    return this.setStep(this.history[this.history.length - 1]);
  }
  
  public initialize = () => {
  
    this.history.push(this.initialStep);
    this.setStep(this.initialStep);
  }
  
  public jumpSteps = (jumpSize: number) => {
    
    if(this.wizardStrategy === "simple") {
      this.history.push((this.history[this.history.length - 1] as number) + jumpSize)
      return this.setStep((previousStep: any) => previousStep + jumpSize);
    }
    
    console.log("Wizard: jump is not handled yet for complex forms");
    
  }
  
  public goToStep = (step: number | string) => {
    
    this.setStep(step);
    this.history.push(step);
  }
  
  
}