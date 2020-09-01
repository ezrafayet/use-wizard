import {isStepLastOfLasts} from "./isStepLastOfLasts";
import {isStepLastOfItsLevel} from "./isStepLastOfItsLevel";
import {getNextStepWhenItsNotLast} from "./getNextStepWhenItsNotLast";
import {getNextStepWhenItsLast} from "./getNextStepWhenItsLast";

export {getNextStep};

function getNextStep(options: any, step: string): string {
  
  if(isStepLastOfLasts(options, step)) {
    return step;
  }
  
  const stepIsLastOfItsLevel: boolean = isStepLastOfItsLevel(options, step) ?? false;
  
  if(stepIsLastOfItsLevel) {
    return getNextStepWhenItsLast(options, step);
  }
  
  return getNextStepWhenItsNotLast(options, step);
  
}



