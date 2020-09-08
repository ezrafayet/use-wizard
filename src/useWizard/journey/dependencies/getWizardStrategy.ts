
export {getWizardStrategy};

const getWizardStrategy = (options?: (string|any)[] | number): "simple" | "complex" => {
  
  let strategy: "simple" | "complex" | null = null;
  
  if(!options) {
    strategy = "simple";
  }
  
  if(!!options && typeof options === "number") {
    strategy = "simple";
  }
  
  if(!!options && Array.isArray(options) && typeof options[0] !== "string") {
    throw new Error("Wizard: for now the entry step of the complex wizard must always be a simple string");
  }
  
  if(!!options && Array.isArray(options) && typeof options[0] === "string") {
    strategy = "complex";
  }
  
  if(!strategy) {
    throw new Error("Wizard: wizardStrategy could not be set...");
  }
  
  return strategy;
  
}