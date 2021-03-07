import {TStep} from "../types/TStep";

export {goToStep};

const goToStep = (args: {setHistory: Function}) => (step: unknown) => {
  
  if(typeof step !== "string" && typeof step !== "number") return console.log("Wizard warning: step to go to invalid type, it should be a string or a number");
  
  return args.setHistory((ps: TStep[]) => [...ps, step]);
}