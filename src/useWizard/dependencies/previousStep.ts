import {TStep} from "../types/TStep";

export {previousStep};

const previousStep = (args: {
  history: TStep[];
  setHistory: Function;
  setPoppedHistory: Function;
}) => () => {
  if(args.history.length > 1) {
    const currentStep = args.history[args.history.length - 1];
    args.setHistory((ps: TStep[]) => [...ps.slice(0, -1)]);
    args.setPoppedHistory((ps: TStep[]) => [...ps, currentStep]);
    return;
  }
  return;
}