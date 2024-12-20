import {TStep} from "./TStep";

export interface IWizard {
  nextStep: () => void;
  previousStep: () => void;
  nPreviousSteps: number;
  nForwardSteps: number;
  forwardStep: () => void;
  initialize: () => void;
  jumpSteps: (jump: number) => void;
  goToStep: (step: TStep) => void;
  history: TStep[];
  stepIndex: () => number;
  wizardLength: () => number;
}