
import React from "react";
function Xyz({ qwe = 10 }) {

    let rew = qwe;
    const ert = (ewq) => { rew = ewq; };
    const asd = () => { 
        ert(rew + 5); 
        console.log(rew);
    };
    return (
    <div>
    <button onClick={asd}>BUTTON</button>
    </div>
    );
}
export default Xyz;