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
  history: (string | number)[],
}

const useWizard = (options?: (string | any)[] | number) => {
  
  const initialStep = getInitialStep(options);
  
  const [history, setHistory]: [(number | string)[], Function] = useState([initialStep]);
  const [step, setStep]: [number | string, Function] = useState(initialStep);
  
  const wizardHandler = new WizardHandler(setStep, setHistory, options);
  
  const wizard: IWizard = {
    nextStep: wizardHandler.nextStep(history),
    previousStep: wizardHandler.previousStep(history),
    initialize: wizardHandler.initialize,
    jumpSteps: wizardHandler.jumpSteps,
    goToStep: wizardHandler.goToStep,
    history: history,
  };
  
  return [step, wizard] as [number | string, IWizard];
  
}

