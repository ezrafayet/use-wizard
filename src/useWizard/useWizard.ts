import {useState} from "react";
import {getInitialStep} from "./dependencies/getInitialStep";
import {getWizardType} from "./dependencies/nextStep/getWizardType";
import {IWizard} from "./types/IWizard";
import {TStep} from "./types/TStep";
import {isTypeWizard} from "./types/typeGuards/isTypeWizard";
import {getWizardMethods} from "./dependencies/getWizardMethods";

export {useWizard};

const useWizard = (options?: unknown): [TStep, IWizard] => {
  
  if(!isTypeWizard(options)) throw new Error("Wizard error: wrong wizard options, check the doc");
  
  const wizardType = getWizardType({options});
  
  const [history, setHistory] = useState<TStep[]>([getInitialStep({options, wizardType})]);
  const [poppedHistory, setPoppedHistory] = useState<TStep[]>([]);
  
  const step = history[history.length - 1];
  
  const wizard = getWizardMethods({
    history,
    poppedHistory,
    setHistory,
    setPoppedHistory,
    wizardType,
    options
  });
  
  return [step, wizard];
  
}
