import React from "react";

function Practice() {
    



    // const y = [123, 234,345, 456]
    // const z = [234,...y,234]
    
    // const g =  {a:123, b: 234}
    // const j = {...g,c:456,b:234}

    const q = [5,4,3,2,1]
    const w = q.map(a => a*a)

    const t = ["ewq", "dsa", "qwe", "asd", "zxc"]
    const u = t.find((b, a) => b === "qwe")

    const v = [51, 42, 33, 24, 15] 
    const b = v.findIndex(w => w === 33)


    const qwe = { asd: 123, sdf: 654 }
    const cxz = {sdf: 345, ...qwe, 
                asd: 456, zxc: 567 }
    const { sdf, asd } = cxz
    console.log(asd)
    console.log(sdf)

//321 234
    const qwr = 324
    const asf = 321
    const zxc  = [321, qwr, 432, asf, 543]
    const [ewq, rew] = zxc
    console.log(ewq)
    console.log(rew)

    const aaa = {b: 1, c: 2, d: 3}
    const eee = {...aaa, c: 4}
    console.log(eee.c)


    const m = [1, 2, 3, 4, 5]
    const n = m.filter(a => a > 2)


    // const ewa = { asd: 765 };
    // const xcv = { ...ewa, bnm: 345, qwe: 890 };
    // const yui = { bnm: 890, asd: 765, qwe: 890 };
    const ewqq = ["432", "543", "654"]
    const rty = ["321", ...ewqq, "765"]
    const qqwe = rty.find((bnm, wer) => bnm === 432)

    return (
      <div>
        <h1>Practice</h1>
        <h1>{eee.c}</h1>

        <label for="firstName">First Name</label>
        <input
        value = "Alice"
        placeholder="Jane"
        id="firstName"
        title="Type Your first name"
        />

        <h3>question 5</h3>
        {/* <h2>{j}</h2> */}
        <h2>{w}</h2>
        <h2>{u}</h2>

        <label><input type="checkbox" name="radio" id="ABC"/>ABC</label>

        const q = [51, 42, 33, 24, 15] 
        const b = q.find(index {'>'} w === 33)

        <h2>{n}</h2>


        <input type="radio"  name="color"/>Yellow
        <input type="radio"  name="color"/>Blue
        <input type="radio"  name="color"/>Red
        <input type="radio"  name="genre"/>Horror
        <input type="radio"  name="genre"/>Comedy
        <input type="radio"  name="genre"/>Drama

        <h2>{b}</h2>
        {/* <h1>{yui}</h1> */}
        <h1>{qqwe}</h1>






      </div>
    );
   }
export default Practice;