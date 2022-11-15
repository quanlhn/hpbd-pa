import React from "react";
import background from "./assets/background.png"
// import b from "./assets/b1.png"
import h1 from "./assets/h2.png"
import a1 from "./assets/a1.png"
import p1 from "./assets/p1.png"
import p2 from "./assets/p2.png"
import y1 from "./assets/y1.png"
import b1 from "./assets/b1.png"
import i1 from "./assets/i1.png"
import r1 from "./assets/r1.png"
import t1 from "./assets/t1.png"
import h2 from "./assets/h2.png"
import d1 from "./assets/d1.png"
import a2 from "./assets/a2.png"
import y2 from "./assets/y2.png"
import deco1 from "./assets/chum1.png"
import deco2 from "./assets/chum2.png"
import deco3 from "./assets/love.gif"
import deco4 from "./assets/love22.gif"
import avatar from "./assets/avatar-01.png"
import Countdown from "react-countdown";
import finalFrame from "./assets/final.png"




export default function Completionist() {

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a complete state
            return (
                <div className="final-frame">
                    <img src={finalFrame} className="final-pic" />
                </div>
            )
        } else {
            // Render a countdown
            return (
                <div className="completionist">
                    <div className="deco">
                        <img className="deco1" src={deco1} />
                        <img className="deco2" src={deco2} />
                        {/* <img className="deco3" src={deco3} /> */}
                        <img className="deco4" src={deco4} />
        
                    </div>
                    <div className="happy">
                        <img className="h1 balloon" src={h1} />
                        <img className="a1 balloon" src={a1} />
                        <img className="p1 balloon" src={p1} />
                        <img className="p2 balloon" src={p2} />
                        <img className="y1 balloon" src={y1} />
                    </div>
                    <div className="birthday">
                        <img className="b1 balloon" src={b1} />
                        <img className="i1 balloon" src={i1} />
                        <img className="r1 balloon" src={r1} />
                        <img className="t1 balloon" src={t1} />
                        <img className="h2 balloon" src={h2} />
                        <img className="d1 balloon" src={d1} />
                        <img className="a2 balloon" src={a2} />
                        <img className="y2 balloon" src={y2} />
                    </div>
                    <div className="ava">
                        <img className="avatar-img" src={avatar} /> 
                        <h2>Phương Anh</h2>
                    </div>
                </div>
            );
        }
    };    
    
    return (
        <Countdown date={Date.now() + 10000} renderer={renderer} />
    )
}