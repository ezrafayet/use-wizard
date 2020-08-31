import {getInitialStep} from "./dependencies/getInitialStep";
import {getWizardStrategy} from "./dependencies/getWizardStrategy";

export class WizardHandler {
  
  private readonly wizardStrategy: "simple" | "complex";
  private readonly options: (string | any)[] | number | undefined;
  private readonly initialStep: number | string;
  private readonly setStep: Function;
  
  /** Not used in simple mode */
  private currentStep: number | string;
  private path: (string | number)[];
  
  constructor(setStep: Function, options?: (string | any)[] | number) {
    
    this.setStep = setStep;
    this.options = options || undefined;
    this.initialStep = getInitialStep(options);
    this.wizardStrategy = getWizardStrategy(options);
    this.currentStep = this.initialStep;
    this.path = [this.initialStep];
    
  }
  
  public nextStep = () => {
    
    if(this.wizardStrategy === "simple") {
      return this.setStep((previousStep: any) => previousStep + 1);
    }
    
    if(this.wizardStrategy === "complex") {
    
    }
  }
  
  public previousStep = () => {
  
    if(this.wizardStrategy === "simple") {
      return this.setStep((previousStep: any) => previousStep - 1);
    }
  
    if(this.wizardStrategy === "complex") {
    
    }
  }
  
  public initialize = () => {
    
    this.setStep(this.initialStep);
    
    if(this.wizardStrategy === "complex") {
      this.currentStep = this.initialStep;
      this.path = [this.initialStep];
    }
  }
  
  public jumpSteps = (jumpSize: number) => {
    
    if(this.wizardStrategy === "simple") {
      return this.setStep((previousStep: any) => previousStep + jumpSize);
    }
  
    if(this.wizardStrategy === "complex") {
    
    }
  }
  
  public goToStep = (step: number|string) => {
    
    this.setStep(step);
  
    if(this.wizardStrategy === "complex") {
      this.currentStep = step;
      // Must handle the path, put some undefined to fill if necessary
    }
  }
  
  public nextNode = () => {
    
    if(this.wizardStrategy === "simple") {
      return this.nextStep();
    }
  
    if(this.wizardStrategy === "complex") {
    
    }
  }
  
}