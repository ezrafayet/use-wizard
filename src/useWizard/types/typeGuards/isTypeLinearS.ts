export {isTypeLinearS};

const isTypeLinearS = (input: unknown): input is string[] => {
  
  if(!Array.isArray(input)) return false;
  
  for(let element of input) {
    if(typeof element !== "string") return false;
  }
  
  return true;
}