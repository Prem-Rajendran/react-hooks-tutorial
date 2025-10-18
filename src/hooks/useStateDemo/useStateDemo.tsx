import { useState } from "react";
import SplitScreen from "../../components/splitScreen/splitScreen";
import Section from "../../components/section/section";

const UseStateDemo = () => {
    return (
        <Section 
            title="React useState Example"
            description="This hook allows you to add a state to a functional component">
          <SplitScreen 
            left={<WithoutUseState/>} 
            right={<WithUseState/>}/>
        </Section>
    )
}

const WithUseState = () => {
    const [state, setState] = useState(0)

    console.log("WithUseState - Rendered")

    const increment = () => {
        console.log("Modifiing Count Value")
        setState(state + 1)
    }

    return (
        <>
            <h2>With useState hook</h2>
            <h5>Count: {state}</h5>
            <button style={{marginBottom: "20px"}} className="button" onClick={increment}>Increment</button>
        </>
    )
}

const WithoutUseState = () => {
    let state = 0;
    console.log("WithoutUseState - Rendered")

    const increment = () => {
        console.log("Modifiing Count Value")
        state = state + 1
    }

    return (
        <>
            <h2>Without useState hook</h2>
            <h5>Count: {state}</h5>
            <button style={{marginBottom: "20px"}} className="button" onClick={increment}>Increment</button>
        </>
    )
}

export default UseStateDemo;