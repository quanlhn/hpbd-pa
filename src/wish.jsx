import React from "react";
import { useState } from "react";
import Countdown from "react-countdown";
import Completionist from "./completionist";

export default function Wish() {
    const [count, setCount] = useState(3)
    
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a complete state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
            <span className="cout-down">
                {seconds}
            </span>
            );
        }
    };      

    return (
        <Countdown date={Date.now() + 5000} renderer={renderer} />
    )
}



