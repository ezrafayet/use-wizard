import {isStepLastOfLasts} from "./isStepLastOfLasts";
import {isStepLastOfItsLevel} from "./isStepLastOfItsLevel";
import {getNextStepWhenItsNotLast} from "./getNextStep/getNextStepWhenItsNotLast";
import {getNextStepWhenItsLast} from "./getNextStep/getNextStepWhenItsLast";

export {getNextStep};

function getNextStep(step: string, options: any): string {
  
  if(typeof step === "number") {
    throw new Error("Wizard: internal error, step must be a string");
  }
  
  if(!options) {
    throw new Error("Wizard: a map must exist");
  }
  
  if(isStepLastOfLasts(options, step)) {
    console.log("Wizard: next() should not be called on the last element");
    return step;
  }
  
  // todo: check if next element is not an object
  // throw new Error("Wizard error: next item is an object, you can't use next()");
  
  const stepIsLastOfItsLevel: boolean = isStepLastOfItsLevel(options, step) ?? false;
  
  if(stepIsLastOfItsLevel) {
    return getNextStepWhenItsLast(options, step);
  }
  
  return getNextStepWhenItsNotLast(options, step);
  
}



