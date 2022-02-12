# Use a wizard Harry

<div align="center">
    <div><br/></div>
    <img src="https://static.adzaria.co/miniatures/wizard.png" alt="use-wizard" width="200"/>
    <div><br/></div>
    <div>The React.JS hook useWizard is an easy-to-use state manager that handles multi-paths, multi-steps wizards and navigate through them.</div>
    <div><br/></div>
        <div>Join on <a href="https://github.com/use-wizard/use-wizard" alt="GitHub">GitHub</a> to follow, test, raise issues and join !</div>
    <div><br/></div>
    <div>
        <img src="https://img.shields.io/badge/react-v17.0.x-brightgreen" />
        <img src="https://img.shields.io/badge/min--react-v16.13.x-brightgreen" />
        <img src="https://img.shields.io/badge/stage-ready-brightgreen" />
    </div>
    <div><br/></div>
</div>
    
![alt use-wizard-sample](https://static.adzaria.co/npm/use-wizard-sample.jpg)

# Real-life examples :
* A basic example for a linear wizard with numbers: <a href="https://codesandbox.io/s/use-wizard-1-bkj5d">
  use-wizard-1
  </a>
* A linear wizard with strings: <a href="https://codesandbox.io/s/use-wizard-2-q243g">
* A non-linear wizard: link to come
* An example with conditional steps: link to come

# What does it do ?

* It handles the creation of multi-steps and multi-paths complex wizards in a simple declarative way,
* It allows your user to navigate through them through useful method,
* It gives you the ability to generate custom wizards for your users,
* It makes refactoring / maintaining your wizard extremely easy.

# The 3 kind of wizards

Below you will find 3 examples. Each of them describe a different way of declaring your wizard.
* The linear wizard with numbers: each step is a number, it starts with step 1.
* The linear wizard with strings: you have to initialize your wizard with an array of strings, each of them being a different step. The first one is the first step.
* The nested wizard: this one allows you to define wizards with nested routes.

# Installing and initializing it


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

## Declare useWizard like any other hook

```
// For a linear wizard with numbers
const [step, wizard] = useWizard(); 

or

// For a linear wizard with strings
const [step, wizard] = useWizard(['splash', 'name', 'email', 'terms', 'validation']); 

or

// For a nested wizard 
const [step, wizard] = useWizard(["A", "B", {
        "1": ["C", "D", "E"],
        "2": ["F", "G"]
    }, "H"]);

```
There you go, that's all. 

Now you can just use a switch to display content according to steps and use methods stored in wizard to navigate.

## Methods compatibility

<table>

<tr>
<td></td>
<td>linear wizard (numbers)</td>
<td>linear wizard (strings)</td>
<td>nested wizard</td>
</tr>

<tr>
<td>history</td>
<td>✔</td>
<td>✔</td>
<td>✔</td>
</tr>

<tr>
<td>nextStep</td>
<td>✔</td>
<td>✔</td>
<td>✔</td>
</tr>

<tr>
<td>previousStep</td>
<td>✔</td>
<td>✔</td>
<td>✔</td>
</tr>

<tr>
<td>nPreviousSteps</td>
<td>✔</td>
<td>✔</td>
<td>✔</td>
</tr>

<tr>
<td>nForwardSteps</td>
<td>✔</td>
<td>✔</td>
<td>✔</td>
</tr>

<tr>
<td>forwardStep</td>
<td>✔</td>
<td>✔</td>
<td>✔</td>
</tr>

<tr>
<td>initialize</td>
<td>✔</td>
<td>✔</td>
<td>✔</td>
</tr>

<tr>
<td>goToStep</td>
<td>✔</td>
<td>✔</td>
<td>✔</td>
</tr>

<tr>
<td>jumpSteps</td>
<td>✔</td>
<td>❌</td>
<td>❌</td>
</tr>

<tr>
<td>stepIndex</td>
<td>❌</td>
<td>✔</td>
<td>❌</td>
</tr>

<tr>
<td>wizardLength</td>
<td>❌</td>
<td>✔</td>
<td>❌</td>
</tr>

</table>

# Get started the simple way

In this ultra-basic lizard (linear-wizard) scenario, each step is a number. Look at figure 1.1 bellow to see what we will achieve.
![alt exaltation](https://static.adzaria.co/npm/usewizard1.jpg)
*figure 1.1*

## declare it
```
const [step, wizard] = useWizard();
```

## And just use it

* **step** gives you the current step
* **wizard** gives you a set of methods (see at the end to see a list of all methods):
    * **nextStep()** increments step by 1
    * **goToStep(n)** sets step to n
    * **previousStep()** got to previous step (even if you jumped)
    * **forwardStep()** return to where you where when you used previousStep()
    * **initialStep()** go back to step1
    * **jumpSteps(n)** allows you to literally jump n steps (positive or negative integer)
    * **nPreviousSteps()** gives you the length of the history stack
    * **nForwardSteps()** gives you the length of the forward stack
     
# Get started the crazy way

Instead of numbers, we will now use names (strings) for our steps.

We will first study a lizard scenario. We will then study two non-linear wizards.

## The linear wizard with strings

This scenario is very close to the one above, but each step of the wizard is now a string. Look at figure 2.1 bellow to see what we will achieve.
![alt exaltation](https://static.adzaria.co/npm/usewizard2.jpg)
*figure 2.1*

Declare your wizard with an array of strings like so:

```
const [step, wizard] = useWizard(["A", "B", "C"]);
```
* Each value is the name of your step.
* Each step name must be unique.
* The entry point will always be the first value of the array.
* **All wizard methods described above work out of the box**.


## The non-linear wizard (1 sub-path deep)
    
useWizard allows you to create non-linear paths in a simple declarative way. Look at figure 2.2 bellow to see what we will achieve.
![alt exaltation](https://static.adzaria.co/npm/usewizard3.jpg)
*figure 3.1*

All we have to do is to declare the wizard like above, but we will use an object instead of a string when we have different possible paths. 
* Declare parallel paths in an object, where paths' keys are "1", "2", "3" ...
* Each array must always start with a string.
* Each object (at index n) must follow a string (at index n-1), so you give user a choice.

The example of the figure 3.1 would be written like this:
```
const path = ["A", "B", {
        "1": ["C", "D", "E"],
        "2": ["F", "G"]
    }, "H"];

const [step, wizard] = useWizard(path);
```

Again, most methods described in the first example works out of the box (see table bellow). 

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

As deep as you need it to be, you can nest parallel paths as much as you need to

# Under the hood

This hook relies on two stacks stored as states. One is the history-stack, used to store the actual path the user took. The other one is the popped-history-stack, so the user can go forward when he went backward (see examples).

This hook heavily relies on recursion to identify steps in a nested pattern.

# Go further

useWizard "only" helps you to handle multi-paths wizards. If you need to handle data (let's say you are using big nested forms), I invite you to check [use-formidable](https://github.com/use-wizard/use-formidable). 

# What's next ?

Do not hesitate to ask for features / PR / or join

* [x] ~~Unit testing for all functions~~
* [x] ~~Move the master branch to main~~
* [x] ~~Write examples~~
* [ ] Add a minifier / linter / webpack ... list to be determined, not urgent
* [ ] Test it with react-native
