import {isTypeLinearS} from "../types/typeGuards/isTypeLinearS";

export {getWizardIndex};

const getWizardIndex = (args: { options: any, step: unknown }) => (): number => {
  if(!isTypeLinearS(args.options)) {
    console.log('Wizard warning: method getWizardIndex does not work with this type of wizard');
    return -1;
  }
  if(typeof args.step !== "string") {
    console.log('Wizard warning: method getWizardLength does not work with this type of step');
    return -1;
  }
  return args.options.indexOf(args.step);
}