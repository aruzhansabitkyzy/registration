import {ReactElement, useState} from 'react';

export function useSteps(steps: ReactElement[]) {
     const [currentStep, setCurrentStep] = useState(0);
     const [title, setTitle] = useState('Sign UP');
     function nextStep() {
        setCurrentStep(st => {
            if(st >=steps.length - 1) return st
            return st+1
        })
     }
     function prevStep() {
        setCurrentStep(st => {
            if(st <= 0) return st
            return st-1
        })
     }
     function isLastStep() {
        return currentStep == steps.length - 1
     }
     function isFirstStep() {
        return currentStep == 0
     }
     return {
      nextStep,
      prevStep, 
      currentStep,
      step : steps[currentStep],
      steps,
      isLastStep, 
      isFirstStep
     }
}