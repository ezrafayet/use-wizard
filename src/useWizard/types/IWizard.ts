export interface IWizard {
  nextStep: Function;
  previousStep: any;
  nPreviousSteps: number;
  nForwardSteps: number;
  forwardStep: Function;
  initialize: Function;
  jumpSteps: (jumpSize: number) => void;
  goToStep: Function;
  history: (string | number)[];
  stepIndex: Function;
  wizardLength: Function;
}