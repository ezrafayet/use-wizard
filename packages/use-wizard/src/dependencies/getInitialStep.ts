import {TStep} from "../types/TStep";
import {TWizardOptions} from "../types/TWizardOptions";
import {TWizardType} from "../types/TWizardType";

export {getInitialStep};

const getInitialStep = (args: {
  options: TWizardOptions;
  wizardType: TWizardType;
}): TStep => {
  
  switch(args.wizardType) {
    
    case 'linearN':
      return 1;
    
    case 'linearS':
    case 'nested':
      return (args.options ?? [])[0];
    
    default:
      throw new Error("Wizard error: wrong first step, open an issue");
  
  }
  
}