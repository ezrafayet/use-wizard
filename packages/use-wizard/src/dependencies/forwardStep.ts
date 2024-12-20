import {TStep} from "../types/TStep";

export {forwardStep};

const forwardStep = (args: {
  poppedHistory: TStep[];
  setHistory: Function;
  setPoppedHistory: Function;
}) => () => {
  if(args.poppedHistory.length !== 0) {
    const previousStep = args.poppedHistory[args.poppedHistory.length - 1];
    args.setPoppedHistory((ps: TStep[]) => [...ps.slice(0, -1)]);
    args.setHistory((ps: TStep[]) => [...ps, previousStep]);
    return;
  }
  return;
}