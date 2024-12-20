# Use a wizard Harry

<div style="background-color:rgba(199,147,16,0.37);padding:10px 20px;">
I am currently writing the version 5. If you are using it and I did not contact you, let me know your use cases, your struggles and your needs! (open an issue). It should be out during Q1 of 2025.
</div>

<br/>

<div align="center">
    <div><br/></div>
    <img src="./assets/logo.jpg" alt="use-wizard" width="350"/>
    <div><br/></div>
    <div>Use-wizard is a React hook that allows you to create multi-paths, multi-steps wizards. It exposes methods to navigate through them.</div>
    <div><br/></div>
    <div>
        <img src="https://img.shields.io/npm/dm/use-wizard" />
        <img src="https://img.shields.io/badge/stage-production--ready-brightgreen" />
        <img src="https://img.shields.io/github/stars/ezrafayet/use-wizard"/>
    </div>
</div>

<div>
![npm downloads]()
</div>

[//]: # (![alt use-wizard-sample]&#40;https://static.adzaria.co/npm/use-wizard-sample.jpg&#41;)

# Real-life examples :

- You can view a live demo here: [click here](https://ezrafayet.com/use-wizard/live-demo-v4/)
- The code for each wizard of the live demo is here: [click here](https://github.com/ezrafayet/use-wizard/tree/v5/packages/examples-v4/src/pages)

# What does it do ?

* It lets you create complex multi-steps and multi-paths wizards in a simple declarative way
* It allows your users to navigate through them with useful method
* It gives you the ability to generate wizards programmatically (where your users can generate wizards on demand for example, which was my main use case)
* It makes maintaining your wizard a lot easier

It is NOT:
- A library for forms (though you can use a form library with it if you want)

# The 3 kind of wizards

* The linear wizard with numbered steps: each step is a number, it starts with step 1.
* The linear wizard with named steps: you have to initialize your wizard with an array of strings, each of them being a different step. The first one is the first step.
* The nested wizard: this one allows you to define wizards with nested routes (as deep as needed).

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

[//]: # (![alt exaltation]&#40;https://static.adzaria.co/npm/usewizard1.jpg&#41;)
[//]: # (*figure 1.1*)

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

[//]: # (![alt exaltation]&#40;https://static.adzaria.co/npm/usewizard2.jpg&#41;)
[//]: # (*figure 2.1*)

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

[//]: # (![alt exaltation]&#40;https://static.adzaria.co/npm/usewizard3.jpg&#41;)
[//]: # (*figure 3.1*)

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

[//]: # (![alt exaltation]&#40;https://static.adzaria.co/npm/usewizard4.jpg&#41;)
[//]: # (*figure 4.1*)

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
