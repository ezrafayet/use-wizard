import {isTypeLinearS} from "../types/typeGuards/isTypeLinearS";

export {getWizardIndex};

const getWizardIndex = (args: { options: any, step: unknown }) => (): number => {
  if(!isTypeLinearS(args.options)) {
    console.log('Wizard warning: ');
    return -1;
  }
  if(typeof args.step !== "string") {
    console.log('Wizard warning: ');
    return -1;
  }
  return args.options.indexOf(args.step);
}