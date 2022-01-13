import React, { useState } from 'react'
import axios from 'axios';

export default function User() {
    const [state, setstate] = useState([""])
    let username = "";
    const createUser = async (e) => {
        e.preventDefault()
        console.log("User created", username);
        await axios.post("http://localhost:4000/user", { username })
        getdata()
        e.target.reset();
    }
    const getdata = async (e) => {
        const result = await axios("http://localhost:4000/user");
        console.warn(result.data);
        setstate(result.data);
    }
    return (
        <div>
            <h4>USER COMPONENT</h4>
            <form onSubmit={createUser}>
                <input onChange={(e) => { username = e.target.value }} type="text" />
                <button>Add</button>
            </form>
            <button onClick={
                async (e) => {
                    await axios.put("http://localhost:4000/user/3", { username: "msi" })
                    getdata()
                }}>Update</button>
            <button onClick={async (e) => {
                await axios.delete("http://localhost:4000/user/2")
                getdata()

            }}>Delete</button>
            <h3>{state.map((item, i) => {
                return <div key={i}>
                    <h3>{item.username}</h3>
                </div>
            })}</h3>

        </div>
    )
}
