import {useWizard} from 'use-wizard';
import {Fragment, useEffect, useState} from "react";
import WizardCard from "../ui/WizardCard";
import Space from "../ui/Space";
import Button from "../ui/Button";

// This is the entry component
const ConditionalWizard = () => {
    // This wizard is conditional, because if the user does not want to subscribe, then showing the subscription preferences is useless
    const [step, wizard] = useWizard(["welcome", "subscription", "subscriptionPreferences", "validate", "finish"]);
    const [data, setData] = useState({
        welcome: "",
        subscription: false,
        subscriptionPreferences: "",
    });

    return <div className={"wizard"}>
        <WizardNavigation step={step} wizard={wizard}/>
        <Space/>
        {step === "welcome" && <WizardStep1 data={data} setData={setData} wizard={wizard}/>}
        {step === "subscription" && <WizardStep2 data={data} setData={setData} wizard={wizard}/>}
        {step === "subscriptionPreferences" && <WizardStep3 data={data} setData={setData} wizard={wizard}/>}
        {step === "validate" && <WizardStep4 data={data} setData={setData} wizard={wizard}/>}
        {step === "finish" && <WizardStep5 data={data} setData={setData} wizard={wizard}/>}
        {step as number > 5 && <div>Step {step} does not exist</div>}
    </div>
};

const WizardNavigation = ({wizard, step}: any) => {
    const showPreviousStep = wizard.nPreviousSteps !== 0 && step !== "finish";
    const showForwardStep = wizard.nForwardSteps !== 0;
    return <div className={"flex flex-row justify-between text-gray-600"}>
        <div className={"w-28 "}>
            {showPreviousStep && <button className={"cursor-pointer"} onClick={() => {
                // in this version of the wizard (v4), you have to be careful when going back,
                // you have to manually jump to the step before the conditional one
                // you could add a condition "&& data.subscription === false" for better UX
                if (step === "validate") {
                    wizard.goToStep("subscription")
                } else {
                    wizard.previousStep()
                }
            }}>
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
        title={"Welcome"}
        children={
            <Fragment>
                <div>
                    If you choose to subscribe, you will be asked for your preferences
                </div>
            </Fragment>
        }
        footer={
            <Fragment>
                <Button
                    text={"Continue"}
                    onClick={() => wizard.nextStep()}
                />
            </Fragment>
        }
    />
}

const WizardStep2 = ({data, setData, wizard}: any) => {
    return <WizardCard
        title={"Do you want to subscribe ?"}
        children={
            <Fragment>
                <div>
                    <input
                        type="checkbox"
                        checked={data.subscription}
                        onChange={() =>
                            setData((ps: any) => ({subscription: !ps.subscription}))
                        }
                    /> {''} I subscribe (optional)
                </div>
            </Fragment>
        }
        footer={
            <Fragment>
                <Button
                    text={"Continue"}
                    onClick={() => wizard.nextStep()}
                />
            </Fragment>
        }
    />
}

const WizardStep3 = ({data, setData, wizard}: any) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (!data.subscription) {
            wizard.nextStep();
        } else {
            setShow(true);
        }
    }, [])
    if (!show) {
        return null
    }
    return <WizardCard
        title={"What subscription do you prefer?"}
        children={<div>
            <Button
                onClick={() => {
                    setData((ps: any) => ({...ps, subscriptionPreferences: "tier1"}));
                    wizard.nextStep();
                }}
                text={"Tier 1"}
            />
            <Button
                onClick={() => {
                    setData((ps: any) => ({...ps, subscriptionPreferences: "tier2"}));
                    wizard.nextStep();
                }}
                text={"Tier 2"}
            />
            <Button
                onClick={() => {
                    setData((ps: any) => ({...ps, subscriptionPreferences: "tier3"}));
                    wizard.nextStep();
                }}
                text={"Tier 3"}
            />
        </div>}
        footer={<Fragment></Fragment>}/>
}

const WizardStep4 = ({data, wizard}: any) => {
    return <WizardCard
        title={"Validate your choices"}
        children={<div>
            Subscription: {data.subscription ? "Yes" : "No"}
            <br/>
            {data.subscription && <div>Preferred subscription: {data.subscriptionPreferences}</div>}
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

export default ConditionalWizard;
