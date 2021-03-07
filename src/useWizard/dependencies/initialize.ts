import {TStep} from "../types/TStep";

export {initialize};

const initialize = (args: {setHistory: Function, initialStep: TStep}) => () => {
  return args.setHistory((ps: TStep[]) => [...ps, args.initialStep]);
}