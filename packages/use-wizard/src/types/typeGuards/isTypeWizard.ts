import {TWizardOptions} from "../TWizardOptions";
import {isTypeLinearS} from "./isTypeLinearS";
import {isTypeNested} from "./isTypeNested";
import {isTypeLinearN} from "./isTypeLinearN";

export {isTypeWizard};

const isTypeWizard = (input: unknown): input is TWizardOptions => {
  
  if(isTypeLinearN(input)) return true;
  
  if(isTypeLinearS(input)) return true;
  
  return !!isTypeNested(input);
  
}