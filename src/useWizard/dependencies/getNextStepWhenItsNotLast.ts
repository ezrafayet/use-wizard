export {getNextStepWhenItsNotLast};

function getNextStepWhenItsNotLast(options: any, step: string): string {
  
  if(options.includes(step)) {
    
    if(typeof options[options.indexOf(step) + 1] !== "string") {
      if(typeof options[options.indexOf(step) + 1]["1"][0] !== "string") {
        throw new Error("Wizard: the first entry must always be a string");
      }
      return options[options.indexOf(step) + 1]["1"][0];
    }
  
    return options[options.indexOf(step) + 1]
  }
  
  for(let option of options) {
    if(typeof option !== "string") {
      
      const nextStepWhenItsNotLast = getNextStepWhenItsNotLast(Object.values(option), step);
      if(!!nextStepWhenItsNotLast) {
        return nextStepWhenItsNotLast;
      }
    }
  }
  
  return "";
  
}
