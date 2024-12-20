import {TStep} from "../types/TStep";

export {initialize};

const initialize = (args: {setHistory: Function, initialStep: TStep}) => () => {
  args.setHistory((ps: TStep[]) => [...ps, args.initialStep]);
  return;
}