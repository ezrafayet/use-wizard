
export {goToStep};

const goToStep = (setHistory: Function) => (stepToGoTo: number | string) => {
  
  setHistory((ps: (string|number)[]) => [...ps, stepToGoTo]);
}