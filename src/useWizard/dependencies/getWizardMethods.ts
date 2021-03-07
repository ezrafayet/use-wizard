import {IWizard} from "../types/IWizard";
import {forwardStep} from "./forwardStep";
import {goToStep} from "./goToStep";
import {initialize} from "./initialize";
import {jumpSteps} from "./jumpSteps";
import {nextStep} from "./nextStep";
import {previousStep} from "./previousStep";
import {TStep} from "../types/TStep";
import {TWizardType} from "../types/TWizardType";
import {TWizardOptions} from "../types/TWizardOptions";
import {getWizardLength} from "./getWizardLength";
import {getWizardIndex} from "./getWizardIndex";
import {getInitialStep} from "./getInitialStep";

export {getWizardMethods};

const getWizardMethods = (args: {
  history: TStep[];
  poppedHistory: TStep[];
  setHistory: Function;
  setPoppedHistory: Function;
  wizardType: TWizardType;
  options: TWizardOptions;
}): IWizard => {
  
  return ({
    forwardStep: forwardStep({
      poppedHistory: args.poppedHistory,
      setHistory: args.setHistory,
      setPoppedHistory: args.setPoppedHistory
    }),
    goToStep: goToStep({setHistory: args.setHistory}),
    history: args.history,
    initialize: initialize({
      setHistory: args.setHistory,
      initialStep: getInitialStep({options: args.options, wizardType: args.wizardType})
    }),
    jumpSteps: jumpSteps({wizardType: args.wizardType, options: args.options, setHistory: args.setHistory}),
    nextStep: nextStep({
      wizardType: args.wizardType,
      history: args.history,
      setHistory: args.setHistory,
      setPoppedHistory: args.setPoppedHistory,
      options: args.options
    }),
    nForwardSteps: args.poppedHistory.length,
    nPreviousSteps: args.history.length - 1,
    previousStep: previousStep({
      history: args.history,
      setHistory: args.setHistory,
      setPoppedHistory: args.setPoppedHistory
    }),
    stepIndex: getWizardIndex({options: args.options, step: args.history[args.history.length - 1]}),
    wizardLength: getWizardLength({options: args.options}),
  });
}