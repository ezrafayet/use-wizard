# Use a wizard harry

![alt react](https://img.shields.io/badge/react-v16.13.x-brightgreen)
![alt react](https://img.shields.io/badge/stage-needs.testing-orange)

An easy-to-use light-weight react hook to handle multi-paths wizards (and simple wizards too) and navigate into them.

**IMPORTANT**: The simple scenario (with numbers) IS READY FOR USE. The complex scenario needs testing, even if it most likely works - 

![alt exaltation](https://static.adzaria.co/usewizard.png)
**Don't hesitate to join on github if you want to test it / raise flags / add code ! See you soon !**

# What's great about it ⭐

* Together with useForm they achieve to manage big multi-paths wizards with many nested steps and/or data, in a very simple declarative way.
* useWizard only handles the steps of the wizard. useForm handles the form data.

There are two ways of using the wizard, the simple way with numbers, and the crazy way with names.

# Get started the simple way 🚀

In this ultra-basic scenario, each step of the wizard is a number. Look at figure 1.1 bellow to see what we will achieve.
![alt exaltation](https://static.adzaria.co/npm/usewizard1.jpg)
*figure 1.1*

## Install it 
```
npm i use-wizard
```

## Import it
```
const useWizard = require('use-wizard');

or

import {useWizard} from "use-wizard";
```

## Declare useWizard like you would declare useState or any other hook

```
const [step, wizard] = useWizard();
```
There you go, that's all. The default first step will be 1, you can then use the methods within the wizard object (check bellow). If you want the wizard to start to another step, just pass it when initializing like so: useWizard(2)

## And finally just use it

* **step** gives you the current step
* *wizard* comes with a few methods:
    * **wizard.nextStep()** increments step by 1
    * **wizard.previousStep()** decrements step by 1
    * **wizard.initialStep()** go back to the first step
    * **wizard.setStep(n)** sets step to n (can be used with previous step value : setStep(previousStep => previousStep) )
    * **wizard.jumpSteps(n)** n must be a positive or negative integer, allowing you to literally jump n steps
    
# Get started the crazy way 🚀

Instead of numbers, we will now use names (strings) for our steps.

We will first study a linear-wizard scenario. We will then study two non-linear wizards.

The first two steps ("install it" and "import it") are the same as above.

## The linear wizard with strings

This scenario is very close to the one above, but each step of the wizard is now a string. Look at figure 2.1 bellow to see what we will achieve.
![alt exaltation](https://static.adzaria.co/npm/usewizard2.jpg)
*figure 2.1*

Declare your wizard with an array of strings like so:

```
const [step, wizard] = useWizard(["A", "B", "C"]);
```
* Each string is the name of your step.
* All step names must be unique
* With a string-wizard, the entry point will always be the first value of the array. The first value of the array must always be a string.
* **All wizard methods above work out of the box**. The only difference is for jumpToStep(n) where n must be a string.


## The non-linear wizard (1 sub-path deep)
    
useWizard allows you to create non-linear paths in a simple declarative way. Look at figure 2.2 bellow to see what we will achieve.
![alt exaltation](https://static.adzaria.co/npm/usewizard3.jpg)
*figure 3.1*

All we have to do is to define the path with the same kind of array as above. 
* Each step is an element of the array
* If a branch divides, then the element must be in an object, all options are a different key/value pair where the key is the rank of the option and the value is an array of strings representing each sub-step.
* The rank of the options (the keys of each key/value pair) MUST always follow the pattern "1", "2", "3" ...

The example of the figure 3.1 would be written like this:
```
const path = ["A", "B", {
        "1": ["C", "D", "E"],
        "2": ["F", "G"]
    }, "H"];

const [step, wizard] = useWizard(path);
```

Again, all the methods described in the first example works out of the box. You really don't need to bother about the complex paths. Everything is handled for you (the nextStep function and the previousStep function are really a bliss regarding this ...). 

## Another non-linear wizard (2 sub-paths deep)

This example only takes complexity a step ahead to show you what you can achieve. I will just give you the figure 2.3 and the declarative wizard that goes with it.
![alt exaltation](https://static.adzaria.co/npm/usewizard4.jpg)
*figure 4.1*

The example of the figure 4.1 would be written like this:
```
const path = ["A", "B", {
        "1": ["C", "D", "E"],
        "2": ["F", {
            "1": ["G", "H"],
            "2": ["I", "J", "K"]
        }, "L"]
    }, "M"];

const [step, wizard] = useWizard(path);
```
The first step would be again the step "A" (there's no way at the time of writting to change that), and you can use all methods from the wizard object like above.

## How deep does it get ?

As deep as you need it to be

# What's next ?

useWizard "only" helps you to handle multi-paths wizards. If you need to handle data (let's say you are using big nested forms), I invite you to check useForm (from my account adzaria). 

