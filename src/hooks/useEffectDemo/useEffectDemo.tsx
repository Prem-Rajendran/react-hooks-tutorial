import { useEffect, useState } from "react"
import Section from "../../components/section/section"
import SplitScreen from "../../components/splitScreen/splitScreen"

const UseEffectDemo = () => {
    return (
        <Section 
            title="React useEffect Example"
            description="This hook lets you run code after render. It is perfect for fetching data, managing timers and handling subscriptions">
          <SplitScreen 
            left={<UseEffectWithInterval/>} 
            right={<UseEffectWithDependencies/>}/>
        </Section>
    )
}

const UseEffectWithDependencies = () => {

    console.log("UseEffectWithDependencies - Rendered")

    const [state, setState] = useState(0);
    const [triggerUseEffect, setTriggerUseEffect] = useState(0)
 
    useEffect(() => {
        console.log("Use Effect is triggered - UseEffectWithDependencies")
        setState((s) => s + 1);
        return;
    }, [triggerUseEffect])

    return (
        <>
            <h4>useEffect hook is triggered only when the dependency changes</h4>
            <span>Use Effect Triggerd Count: {triggerUseEffect}</span>
            <span>State Changed Count: {state}</span>
            <span style={{marginBottom: "20px", marginTop: "10px"}}>
                <button style={{marginRight: "10px"}} className="button" onClick={() => setTriggerUseEffect(s => s + 1)}>Trigger useEffect</button>
                <button className="button" onClick={() => setState(s => s + 1)}>Update State</button>
            </span>
        </>
    )
}

const UseEffectWithInterval = () => {
    console.log("UseEffectWithInterval - Rendered")

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        
        console.log("Use Effect is triggered - UseEffectWithInterval")

        const interval = setInterval(() => {
            setSeconds(s => s + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <h4>useEffect hook is trigged only once</h4>
            <p>{seconds} seconds passed</p>
            <button style={{marginBottom: "20px"}} className="button" onClick={() => setSeconds(0)}>Reset</button>
        </>
    )
}

export default UseEffectDemo;