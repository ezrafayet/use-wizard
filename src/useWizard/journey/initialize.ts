
export {initialize};

const initialize = (setHistory: Function, initialStep: number | string) => () => {
  return setHistory((ps: (number | string)[]) => [...ps, initialStep]);
}