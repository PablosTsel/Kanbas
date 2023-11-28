import React from "react";

const Jkll = () => {
    let qwe = { ert: 1 };
    const wer = (ewq) => console.log(ewq.ert); 
    return (
        <div>
        <button onClick={
        () => wer({ ...qwe, ert: qwe.ert + 1 })}> 
        Lvp 
        </button>
        <button onClick={
        () => wer({ ...qwe, ert: qwe.ert - 3 })}>
        Poi
        </button>
        </div>
);
}
export default Jkll