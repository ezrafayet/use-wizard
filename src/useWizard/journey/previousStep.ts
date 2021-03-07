export {previousStep};

const previousStep = (setHistory: Function, setPoppedHistory: Function) => () => {
  
  setHistory((ps: (number|string)[]) => [...ps.slice(0,-1)]);
}