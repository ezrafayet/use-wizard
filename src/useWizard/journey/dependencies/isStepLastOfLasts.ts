export {isStepLastOfLasts};

/** Checks if a step is the last of the wizard */
function isStepLastOfLasts(options: any, step: string): any {
  
  if(!options) {
    return false;
  }
  
  if(typeof options[options.length - 1] === "string") {
    return options[options.length - 1] === step;
  }
  
  for(let obj of Object.values(options[options.length - 1])) {
    
    if(isStepLastOfLasts(obj, step)) {
      return true;
    }
  }
  
}
