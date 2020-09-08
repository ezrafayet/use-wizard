export {isStepLastOfLasts};

/** Checks if a step is the last of the wizard */
function isStepLastOfLasts(options: any, step: string): any {
  
  if(!options) {
    return false;
  }
  
  if(typeof options[options.length - 1] === "string") {
    return options[options.length - 1] === step;
  }
  
  return isStepLastOfLasts(options[options.length - 1], step);
}
