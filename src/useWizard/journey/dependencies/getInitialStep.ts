
export {getInitialStep};

const getInitialStep = (options?: (string|any)[] | number): number | string => {
  
  if(!options) {
    return 1;
  }

  if(typeof options === "number") {
    return options as number;
  }

  if(!!options && Array.isArray(options)  && typeof options[0] !== "string") {
    throw new Error("Wizard: for now the entry step of the complex wizard must always be a simple string");
  }

  if(!!options && Array.isArray(options)  && typeof options[0] === "string") {
    return options[0];
  }

  throw new Error("Wizard: initialStep could not be set...");
  
}