import {useWizard} from 'use-wizard';
import {Fragment, useEffect, useState} from "react";
import WizardCard from "../ui/WizardCard";

// This is the entry component
const LinearNumberedWizard = () => {
    const [step, wizard] = useWizard();
    const [data, setData] = useState({
        userDares: false,
        nickname: "",
    });

    useEffect(() => {
        console.log(data)
    }, [data])

    return <div className={"wizard"}>
        <div className={"wizard__header"}>
            <code>const [step, wizard] = useWizard();</code>
        </div>
        <br/>

        <WizardNavigation step={step} wizard={wizard}/>
        <br/>

        {step === 1 && <WizardStep1 data={data} setData={setData} wizard={wizard}/>}
        {step === 2 && <WizardStep2 data={data} setData={setData} wizard={wizard}/>}
        {step === 3 && <WizardStep3 data={data} setData={setData} wizard={wizard}/>}
        {step === 4 && <WizardStep4 data={data} setData={setData} wizard={wizard}/>}
        {step === 5 && <WizardStep5 data={data} setData={setData} wizard={wizard}/>}
        {step as number > 5 && <div>Step {step} does not exist</div>}
    </div>
};

const WizardNavigation = ({wizard, step}: any) => {
    const showPreviousStep = wizard.nPreviousSteps !== 0 && step !== 5;
    const showForwardStep = wizard.nForwardSteps !== 0;
    return <div className={"wizard__navigation"}>
        <button disabled={!showPreviousStep} onClick={() => wizard.previousStep()}>
            Go back
        </button>
        <div className={""}>
            {/*Here, the length is hardcoded, since use-wizard does not know the length of the wizard in advance.*/}
            Step {wizard.history.length} out of 5
        </div>
        <button disabled={!showForwardStep} onClick={() => wizard.forwardStep()}>
            Go next
        </button>
    </div>
};

const WizardStep1 = ({data, setData, wizard}: any) => {
    return <WizardCard
        title={"Do you dare to continue ?"}
        children={
            <Fragment>
                <input
                    type="checkbox"
                    checked={data.userDares}
                    onChange={() =>
                        setData((ps: any) => ({userDares: !ps.userDares}))
                    }
                />{" "}
                I dare
            </Fragment>
        }
        footer={
            <Fragment>
                <button
                    key={1}
                    disabled={!data.userDares}
                    className="art-button"
                    onClick={() => wizard.nextStep()}
                >
                    Continue
                </button>
            </Fragment>
        }
    />
}

const WizardStep2 = ({data, setData, wizard}: any) => {
    return <div>
        <div className="wizard-layout__question">Choose a nickname</div>

        <div className="wizard-layout__content">
            <input
                type="text"
                className="art-input"
                placeholder="Enter a creative nickname"
                value={data.nickname}
                onChange={(e) =>
                    setData((ps: any) => ({...ps, nickname: e.target.value}))
                }
            />
        </div>

        <div className="wizard-layout__buttons">
            <button
                key={2}
                className="art-button"
                disabled={!data.nickname}
                onClick={() => wizard.nextStep()}
            >
                Continue
            </button>
        </div>
    </div>
}

const WizardStep3 = ({data, setData, wizard}: any) => {
    return <div>
        <div className="wizard-layout__question">
            What are your favourite animals ?
        </div>

        <div className="wizard-layout__content">
            <button
                key={1}
                className="art-button"
                onClick={() => {
                    setData((ps: any) => ({...ps, preferredAnimals: "dogs"}));
                    wizard.nextStep();
                }}
            >
                Dogs
            </button>
            <button
                key={2}
                className="art-button"
                onClick={() => {
                    setData((ps: any) => ({...ps, preferredAnimals: "cats"}));
                    wizard.nextStep();
                }}
            >
                Cats
            </button>
            <button
                key={3}
                className="art-button"
                onClick={() => {
                    setData((ps: any) => ({...ps, preferredAnimals: "frogs"}));
                    wizard.nextStep();
                }}
            >
                Frogs
            </button>
        </div>

        <div className="wizard-layout__buttons"></div>
    </div>
}

const WizardStep4 = ({data, setData, wizard}: any) => {
    return <div>
        <div className="wizard-layout__question">Validate your choices</div>

        <div className="wizard-layout__content">
            Nickname: {data.nickname}
            <br/>
            Preferred animals: {data.preferredAnimals}
        </div>

        <div className="wizard-layout__buttons">
            <button
                key={2}
                className="art-button"
                onClick={() => wizard.nextStep()}
            >
                Validate
            </button>
        </div>
    </div>
}

const WizardStep5 = ({data, setData, wizard}: any) => {
    return <div>
        <div className="wizard-layout__question">Thank you! 🎉</div>

        <div className="wizard-layout__content">You can now close this page.</div>

        <div className="wizard-layout__buttons"></div>
    </div>
}

export default LinearNumberedWizard;