
export {previousStep};

const previousStep = (setHistory: Function) => (currentStep: string|number, options?: (string | any)[] | number) => () => {
  
  setHistory((ps: (number|string)[]) => [...ps.slice(0,-1)]);
}