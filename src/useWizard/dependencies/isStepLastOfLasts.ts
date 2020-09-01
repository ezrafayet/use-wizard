export {isStepLastOfLasts};

/** Checks if a step is the last of the wizard */
function isStepLastOfLasts(options: any, step: string) {
  
  if(typeof options[options.length - 1] === "string") {
    return options[options.length - 1] === step;
  }
  
  return isStepLastOfLasts(options[options.length - 1], step);
}
