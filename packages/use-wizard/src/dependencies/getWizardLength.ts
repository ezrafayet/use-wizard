import {isTypeLinearS} from "../types/typeGuards/isTypeLinearS";

export {getWizardLength};

const getWizardLength = (args: { options: any }) => (): number => {
  if(!isTypeLinearS(args.options)) {
    console.log('Wizard warning: method getWizardLength does not work with this type of wizard');
    return -1;
  }
  return args.options.length;
}