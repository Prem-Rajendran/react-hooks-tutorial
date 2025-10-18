import type React from "react";
import splitScreenCSS from './splitScreen.module.css'
import type { JSX } from "react";
import { Link } from "react-router-dom";

interface SplitScreenProps {
    left: JSX.Element,
    right: JSX.Element,
}

const SplitScreen:React.FC<React.PropsWithChildren<SplitScreenProps>> = ({left, right}) => {
    return (
        <>
            <div className={splitScreenCSS.container}>
                <div className={splitScreenCSS.left}>
                    {left}
                </div>
                <div className={splitScreenCSS.right}>
                    {right}
                </div>
            </div>
            <div className={splitScreenCSS['center-align']}>
                <p>Open Developer tools to view the console logs</p>
                <Link to={'/'}>Go Back</Link>
            </div>
        </>
    )
}

export default SplitScreen;