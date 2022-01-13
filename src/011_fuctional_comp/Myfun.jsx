import React, { useState } from 'react'

export default function Myfun() {
    const [state, setstate] = useState("")
    const [brand, setbrand] = useState("Dell")
    // const dd = useState("skillhub")
    const onShow = (e) => {
        // console.log("called", dd);
        // console.log(state);
        // setstate("MSI");
        // if (state = "MSI") {
        //     setstate("Skillhub");
        // } else {
        // }
        setbrand(state);
        setstate("")
        // e.target.reset();
    }

    return (
        <div>
            {/* <p>{state}</p> */}
            <p>{brand}</p>
            <h1>This is functional component</h1>
            <input type="text" value={state} className="form-control" onChange={(e) => { setstate(e.target.value) }} />
            <button className="btn btn-danger" onClick={onShow} >Click me</button>
        </div>
    )
}
