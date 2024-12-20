import {useWizard} from 'use-wizard';
import {Fragment, useEffect, useState} from "react";
import WizardCard from "../ui/WizardCard";
import Space from "../ui/Space";
import Button from "../ui/Button";

// This is the entry component
const LinearNamedWizard = () => {
    const [step, wizard] = useWizard(["welcome", "nickname", "preferredAnimal", "validate", "finish"]);
    const [data, setData] = useState({
        userDares: false,
        nickname: "",
        preferredAnimal: "",
    });

    return <div className={"wizard"}>
        <WizardNavigation step={step} wizard={wizard}/>
        <Space/>
        {step === "welcome" && <WizardStep1 data={data} setData={setData} wizard={wizard}/>}
        {step === "nickname" && <WizardStep2 data={data} setData={setData} wizard={wizard}/>}
        {step === "preferredAnimal" && <WizardStep3 data={data} setData={setData} wizard={wizard}/>}
        {step === "validate" && <WizardStep4 data={data} setData={setData} wizard={wizard}/>}
        {step === "finish" && <WizardStep5 data={data} setData={setData} wizard={wizard}/>}
        {step as number > 5 && <div>Step {step} does not exist</div>}
    </div>
};

const WizardNavigation = ({wizard, step}: any) => {
    const showPreviousStep = wizard.nPreviousSteps !== 0 && step !== 5;
    const showForwardStep = wizard.nForwardSteps !== 0;
    return <div className={"flex flex-row justify-between text-gray-600"}>
        <div className={"w-28 "}>
            {showPreviousStep && <button className={"cursor-pointer"} onClick={() => wizard.previousStep()}>
                Back
            </button>}
        </div>
        <div>
            {/*You can use this data to display a progress bar*/}
            Step {wizard.history.length} out of {wizard.wizardLength()}
        </div>
        <div className={"w-28 flex flex-row justify-end"}>
            {showForwardStep && <button className={"cursor-pointer"} onClick={() => wizard.forwardStep()}>
                Next
            </button>}
        </div>
    </div>
};

const WizardStep1 = ({data, setData, wizard}: any) => {
    return <WizardCard
        title={"Do you dare to continue ?"}
        children={
            <Fragment>
                <div>
                    <input
                        type="checkbox"
                        checked={data.userDares}
                        onChange={() =>
                            setData((ps: any) => ({userDares: !ps.userDares}))
                        }
                    /> {''} I dare
                </div>
            </Fragment>
        }
        footer={
            <Fragment>
                <Button
                    text={"Continue"}
                    disabled={!data.userDares}
                    onClick={() => wizard.nextStep()}
                />
            </Fragment>
        }
    />
}

const WizardStep2 = ({data, setData, wizard}: any) => {
    return <WizardCard
        title={"Choose a nickname"}
        children={
            <Fragment>
                <input
                    type="text"
                    className={"border-2 px-4 py-2"}
                    placeholder="Enter a creative nickname"
                    value={data.nickname}
                    onChange={(e) =>
                        setData((ps: any) => ({...ps, nickname: e.target.value}))
                    }
                />
            </Fragment>
        }
        footer={
            <Fragment>
                <Button
                    text={"Continue"}
                    disabled={!data.nickname}
                    onClick={() => wizard.nextStep()}
                />
            </Fragment>
        }
    />
}

const WizardStep3 = ({data, setData, wizard}: any) => {
    return <WizardCard
        title={"What is your favourite animal?"}
        children={<div>
            <Button
                onClick={() => {
                    setData((ps: any) => ({...ps, preferredAnimal: "dogs"}));
                    wizard.nextStep();
                }}
                text={"Dogs"}
            />
            <Button
                onClick={() => {
                    setData((ps: any) => ({...ps, preferredAnimal: "cats"}));
                    wizard.nextStep();
                }}
                text={"Cats"}
            />
            <Button
                onClick={() => {
                    setData((ps: any) => ({...ps, preferredAnimal: "frogs"}));
                    wizard.nextStep();
                }}
                text={"Frogs"}
            />
        </div>}
        footer={<Fragment></Fragment>}/>
}

const WizardStep4 = ({data, setData, wizard}: any) => {
    return <WizardCard
        title={"Validate your choices"}
        children={<div>
            Nickname: {data.nickname}
            <br/>
            Preferred animals: {data.preferredAnimal}
        </div>}
        footer={
            <Fragment>
                <Button
                    text={"Validate"}
                    onClick={() => wizard.nextStep()}
                />
            </Fragment>
        }
    />
}

const WizardStep5 = ({}: any) => {
    return <WizardCard
        title={"Thank you!"}
        children={<div>
            You can now close this page 🎉
        </div>}
        footer={<Fragment></Fragment>}
    />
}

export default LinearNamedWizard;
