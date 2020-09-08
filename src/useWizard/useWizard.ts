import {useState} from "react";
import {getInitialStep} from "./journey/dependencies/getInitialStep";
import {nextStep} from "./journey/nextStep";
import {previousStep} from "./journey/previousStep";
import {goToStep} from "./journey/goToStep";
import {jumpSteps} from "./journey/jumpSteps";
import {initialize} from "./journey/initialize";

export {useWizard};

interface IWizard {
  nextStep: Function,
  previousStep: Function,
  initialize: Function,
  jumpSteps: (jumpSize: number) => void,
  goToStep: Function,
  history: (string | number)[],
}

/**
 * Testing a v2 with no class
 * @param options
 */
const useWizard = (options?: (string | any)[] | number) => {
  
  const initialStep = getInitialStep(options);
  
  const [history, setHistory]: [(number | string)[], Function] = useState([initialStep]);
  
  const wizard: IWizard = {
    nextStep: nextStep(history, setHistory)(history[history.length - 1], options),
    previousStep: previousStep(setHistory)(history[history.length - 1], options),
    initialize: initialize(setHistory, initialStep),
    jumpSteps: jumpSteps(setHistory, options),
    goToStep: goToStep(setHistory),
    history: history,
  };
  
  return [history[history.length - 1], wizard] as [number | string, IWizard];
  
}
