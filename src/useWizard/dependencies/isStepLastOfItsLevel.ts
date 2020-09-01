export {isStepLastOfItsLevel};

/** Checks if a step is the last of its level */
function isStepLastOfItsLevel(options: any, step: string): any {
  
  if(options[options.length - 1] === step) {
    return true;
  }
  
  for(let option of options) {
    
    if(typeof option !== "string") {
      
      for(let a of Object.values(option)) {
  
        if(isStepLastOfItsLevel(a, step)) {
          
          return true;
        }
      }
    }
  }
}
