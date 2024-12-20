import {TWizardType} from "../../types/TWizardType";
import {isTypeLinearS} from "../../types/typeGuards/isTypeLinearS";
import {isTypeNested} from "../../types/typeGuards/isTypeNested";

export {getWizardType};

const getWizardType = (args: { options: unknown }): TWizardType => {
  
  if(!args.options) return 'linearN';
  
  if(isTypeLinearS(args.options)) return 'linearS';
  
  if(isTypeNested(args.options)) return 'nested';
  
  throw new Error("Wizard error: wrong wizard type, open an issue");
  
}