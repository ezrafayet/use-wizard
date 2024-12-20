import {useWizard} from "use-wizard";
import Space from "../ui/Space";
import WizardCard from "../ui/WizardCard";
import Button from "../ui/Button";
import {Fragment} from "react";

const NestedWizard = () => {
    const [step, wizard] = useWizard([
        "chooseDoor", {
            "1": ["continue", "foundGold"],
            "2": ["monster"]
        }, "chooseWeapon", "finish"]);
    return <div>
        <WizardNavigation step={step} wizard={wizard}/>
        <Space/>
        {step === "chooseDoor" && <ChooseDoor wizard={wizard}/>}
        {step === "continue" && <Continue wizard={wizard}/>}
        {step === "foundGold" && <FoundGold wizard={wizard}/>}
        {step === "monster" && <Monster wizard={wizard}/>}
        {step === "chooseWeapon" && <ChooseWeapon wizard={wizard}/>}
        {step === "finish" && <Finish/>}
    </div>
};

const WizardNavigation = ({wizard, step}: any) => {
    const showPreviousStep = wizard.nPreviousSteps !== 0 && step !== "finish";
    const showForwardStep = wizard.nForwardSteps !== 0;
    return <div className={"flex flex-row justify-between text-gray-600"}>
        <div className={"w-28 "}>
            {showPreviousStep && <button className={"cursor-pointer"} onClick={() => wizard.previousStep()}>
                Back
            </button>}
        </div>
        <div>
            {/*Since the length may vary with the path, you could only get an approximation of the total length*/}
            Step {wizard.history.length}
        </div>
        <div className={"w-28 flex flex-row justify-end"}>
            {showForwardStep && <button className={"cursor-pointer"} onClick={() => wizard.forwardStep()}>
                Next
            </button>}
        </div>
    </div>
};

const ChooseDoor = ({wizard}: any) => {
    return <WizardCard
        title={"2 doors are in front of you"}
        children={<div className={"flex flex-col items-center"}>
                Choose carefully... The left door is made of gold, the right door looks like a dungeon...
        </div>}
        footer={<Fragment>
            <Button
                onClick={() => {
                    wizard.goToStep("continue");
                }}
                text={"Left door"}
            />
            <Button
                onClick={() => {
                    wizard.goToStep("monster");
                }}
                text={"Right door"}
            />
        </Fragment>}/>
}

const Continue = ({wizard}: any) => {
    return <WizardCard
        title={"Where are you?"}
        children={<div>
            Ok, that's a bit scary I must admit...
        </div>}
        footer={<Fragment>
            <Button
                onClick={() => {
                    // next step knows to take you to the next step in the nested path
                    wizard.nextStep();
                }}
                text={"Continue"}
            />
        </Fragment>}/>
}

const FoundGold = ({wizard}: any) => {
    return <WizardCard
        title={"You found gold!"}
        children={<div>
            Wow! That's a big pile of gold!
        </div>}
        footer={<Fragment>
            <Button
                onClick={() => {
                    wizard.nextStep();
                }}
                text={"Continue"}
            />
        </Fragment>}/>
}

const Monster = ({wizard}: any) => {
    return <WizardCard
        title={"A monster is in front of you"}
        children={<div>
            Run! Run! Run!
        </div>}
        footer={<Fragment>
            <Button
                onClick={() => {
                    wizard.nextStep();
                }}
                text={"Run away"}
            />
            <Button
                onClick={() => {
                    wizard.goToStep("finish");
                }}
                text={"Let the monster kill you"}
            />
        </Fragment>}/>
}

const ChooseWeapon = ({wizard}) => {
    return <WizardCard
        title={"A weapon!"}
        children={<div>
            Ok... that would have been useful before...
        </div>}
        footer={<Fragment>
            <Button
                onClick={() => {
                    wizard.nextStep();
                }}
                text={"End the game"}
            />
        </Fragment>}/>
}

const Finish = () => {
    return <WizardCard
        title={"The end!"}
        children={<div>
            Hope it was fun
        </div>}
        footer={<Fragment></Fragment>}
    />
}

export default NestedWizard;