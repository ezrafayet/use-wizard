# use-wizard

![alt react](https://img.shields.io/badge/react-v16.13.x-brightgreen)
![alt react](https://img.shields.io/badge/stage-production-brightgreen)

Use wizard is a small hook to manage multi-steps in a wizard. V1 is ultra simple, it is a step-stone for a greater wizard. It does a great job when being used with useForm. Together they let you handle huge multi-steps wizards.

![alt exaltation](https://static.adzaria.co/usewizard.png)


# What's great about it ⭐

* Together with useForm they achieve to manage huge nested multi-steps wizards.

# Get started 🚀

## Install it 
```
npm i use-wizard
```

## Call it
```
const useWizard = require('use-wizard');

or

import {useWizard} from "use-wizard";

```

## Declare useWizard like you would declare useState or any other hook

```
    const [step, wizard] = useWizard();
```

And there you go, the first step will be 1. You can pass a number to set a different initial step.

## And finally just use it 🔖

* **step** gives you the current step
* *wizard* comes with a few methods:
    * **nextStep()** increments step by 1
    * **previousStep()** decrements step by 1
    * **initialize()** sets step back to initial step
    * **jumpSteps(n)** n must be a positive or negative integer, allowing you to litterally jump n steps
    * **goToStep(n)** sets step to n (can be used with previous step value : setStep(previousStep => previousStep) )
    
# useWizard Won't do

* Make you latte ☕️
* Make your grades better (but exalt-grade will so check it)
