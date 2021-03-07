export {getNextStepWhenItsLast};

function getNextStepWhenItsLast(options: any, step: string): string {
  
  let index = 0;
  
  for(let option of options) {
    if(typeof option !== "string") {
      
      if(isElementInObjectShallow(option, step)) {
        if(typeof options[index + 1] !== "string") {
          throw new Error("Wizard: an element following an object must always be a string, there must always be a step between two objects");
        }
        return options[index + 1];
      }
      
      for(let obj of Object.values(option)) {
        const nextStepWhenItsLast = getNextStepWhenItsLast(obj, step);
  
        if(!!nextStepWhenItsLast) {
          return nextStepWhenItsLast;
        }
      }
      
    }
    index ++;
  }
  
  return "";
}

function isElementInObjectShallow(object: any, step: string): boolean {

  for(let elements of Object.values(object)) {
    if((elements as any[]).includes(step)) {
      return true;
    }
  }
  return false;
}