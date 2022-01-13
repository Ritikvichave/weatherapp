import React from 'react'
import axios from 'axios'

export default function MyAxios() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const getdata = async () => {
        // alert("Skillhub");
        // let result = await fetch(url);
        // result = await result.json();
        // console.log(result);
        const result = await axios(url);
        console.log(result);
    }
    return (
        <div>

            <h3>Axios page</h3>

            <button className="btn btn-danger" onClick={getdata}>click me</button>
        </div>
    )
}

// npm i axios