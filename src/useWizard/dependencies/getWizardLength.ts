import {isTypeLinearS} from "../types/typeGuards/isTypeLinearS";

export {getWizardLength};

const getWizardLength = (args: { options: any }) => (): number => {
  if(!isTypeLinearS(args.options)) {
    console.log('Wizard warning: ');
    return -1;
  }
  return args.options.length;
}