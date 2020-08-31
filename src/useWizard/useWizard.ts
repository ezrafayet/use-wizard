import {useState} from "react";

export {useWizard};

const useWizard = (initialState: any) => {
  
  const [step, setStep]: [number, Function] = useState(initialState);
  
  const nextStep = () => setStep((ps: number) => ps + 1);
  const previousStep = () => setStep((ps: number) => ps - 1);
  const initialStep = () => setStep(initialState);
  const jumpSteps = (jumpSize: number) => setStep((ps: number) => ps + jumpSize);
  
  const wizard = {
    nextStep: nextStep,
    previousStep: previousStep,
    initialStep: initialStep,
    jumpSteps: jumpSteps,
    setStep: setStep,
  };
  
  return [step, wizard];
  
}