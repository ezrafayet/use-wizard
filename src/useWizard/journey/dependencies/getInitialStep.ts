
export {getInitialStep};

const getInitialStep = (options?: (string|any)[] | number): number | string => {
  
  let initialStep: string | number | null = null;
  
  if(!options) {
    initialStep = 1;
  }
  
  if(!!options && typeof options === "number") {
    initialStep = 1;
  }
  
  if(!!options && Array.isArray(options)  && typeof options[0] !== "string") {
    throw new Error("Wizard: for now the entry step of the complex wizard must always be a simple string");
  }
  
  if(!!options && Array.isArray(options)  && typeof options[0] === "string") {
    initialStep = options[0];
  }
  
  if(!initialStep) {
    throw new Error("Wizard: initialStep could not be set...");
  }
  
  return initialStep;
  
}