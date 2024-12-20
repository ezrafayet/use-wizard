import {TStep} from "../types/TStep";

export {goToStep};

const goToStep = (args: {setHistory: Function, setPoppedHistory: Function}) => (step: unknown) => {
  
  if(typeof step !== "string" && typeof step !== "number") return console.log("Wizard warning: step to go to invalid type, it should be a string or a number");
  
  args.setPoppedHistory([]);
  
  args.setHistory((ps: TStep[]) => [...ps, step]);
  
  return;
}