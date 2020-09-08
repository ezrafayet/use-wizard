# Use a wizard harry


<div align="center">
    <div><br/></div>
    <img src="https://static.adzaria.co/miniatures/wizard.png" alt="use-wizard" width="200"/>
    <div><br/></div>
    <div>An easy-to-use react hook to handle multi-paths, multi-steps wizards and navigate through them.</div>
    <div><br/></div>
        <div>Join on <a href="https://github.com/use-wizard/use-wizard" alt="GitHub">GitHub</a> to follow, test, raise issues and join !</div>
    <div><br/></div>
    <div>
        <img src="https://img.shields.io/badge/react-v16.13.x-brightgreen" />
        <img src="https://img.shields.io/badge/stage-ready-brightgreen" />
    </div>
    <div><br/></div>
</div>
    
![alt use-wizard-sample](https://static.adzaria.co/npm/use-wizard-sample.jpg)

# What does it do

* It handles creation of multi-steps and multi-paths complex wizards in a simple declarative way
* It gives you many ways to navigate through them
* Types are included for typescript, it is lightweight and has no dependencies,
* Use it with [use-formidable](https://github.com/use-wizard/use-formidable) to handle complex multi-path, multi-steps nested forms.

```
There are two ways of using the wizard, the simple way with numbers, and the crazy way with names.
```

# Get started the simple way 🚀

In this ultra-basic lizard (linear-wizard) scenario, each step of the wizard is a number. Look at figure 1.1 bellow to see what we will achieve.
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
There you go, that's all. The default first step will be 1, you can then use the methods within the wizard object. If you want the wizard to start to another step, just pass it when initializing like so: useWizard(2)

## And finally just use it

* **step** gives you the current step
* *wizard* comes with a few methods. They are available in all scenarios:
    * **wizard.nextStep()** increments step by 1
    * **wizard.previousStep()** decrements step by 1
    * **wizard.initialStep()** go back to the first step
    * **wizard.goToStep(n)** sets step to n (can be used with previous step value : setStep(previousStep => previousStep) )
    * **wizard.jumpSteps(n)** n must be a positive or negative integer, allowing you to literally jump n steps
    
# Get started the crazy way 🚀

Instead of numbers, we will now use names (strings) for our steps.

We will first study a lizard (linear-wizard) scenario. We will then study two non-linear wizards.

The first two steps ("install it" and "import it") are the same as above.

## The linear wizard with strings

This scenario is very close to the one above, but each step of the wizard is now a string. Look at figure 2.1 bellow to see what we will achieve.
![alt exaltation](https://static.adzaria.co/npm/usewizard2.jpg)
*figure 2.1*

Declare your wizard with an array of strings like so:

```
const [step, wizard] = useWizard(["A", "B", "C"]);
```
* Each string is the name of your step,
* Each step name must be unique,
* With a string-wizard, the entry point will always be the first value of the array, 
* The first value of each array must always be a string,
* **All wizard methods above work out of the box**. The only difference is for jumpToStep(n) where n must be a string.


## The non-linear wizard (1 sub-path deep)
    
useWizard allows you to create non-linear paths in a simple declarative way. Look at figure 2.2 bellow to see what we will achieve.
![alt exaltation](https://static.adzaria.co/npm/usewizard3.jpg)
*figure 3.1*

All we have to do is to declare the wizard like above, but we will use an object {} when we have different possible paths. 
* Declare parallel paths in an object, where keys are "1", "2", ...
* Each array must always start with a string (= single component),
* Each object must have a string before it, it is impossible to have an objects following an object, use a string between them

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
The first step would be again the step "A", and you can use all methods from the wizard object like above.

## How deep does it get ?

As deep as you need it to be, you can nest parrallel paths as much as you need to

# Go further

useWizard "only" helps you to handle multi-paths wizards. If you need to handle data (let's say you are using big nested forms), I invite you to check [use-formidable](https://github.com/use-wizard/use-formidable). 

# What's next ?

Do not hesitate to ask to join or ask for features for your specific needs

* [ ] Add minifier / linter / webpack ... list to be determined, not urgent
* [x] ~~Unit testing for all functions~~ <--- done
* [ ] Unit testing using components
* [ ] See specificities for react-native
* [ ] Implement caching, maybe with useContext
