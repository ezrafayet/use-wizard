import {WizardHandler} from "./WizardHandler";
import {useState} from "react";
import {getInitialStep} from "./dependencies/getInitialStep";

export {useWizard};

interface IWizard {
  nextStep: () => void,
  previousStep: () => void,
  initialize: () => void,
  jumpSteps: (jumpSize: number) => void,
  goToStep: Function,
}

const useWizard = (options?: (string|any)[] | number) => {
  
  const initialStep = getInitialStep(options);
  
  const [step, setStep]: [number|string, Function] = useState(initialStep);
  
  const wizardHandler = new WizardHandler(setStep, options);
  
  const wizard: IWizard = {
    nextStep: wizardHandler.nextStep,
    previousStep: wizardHandler.previousStep,
    initialize: wizardHandler.initialize,
    jumpSteps: wizardHandler.jumpSteps,
    goToStep: wizardHandler.goToStep,
  };

  return [step, wizard] as [number, IWizard];
  
}

