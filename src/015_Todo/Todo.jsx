import axios from "axios";
import React, { useState } from "react";

export default function TodoApi() {
    let task, desc, priority
    const [state, setstate] = useState([])
    const addData = async (e) => {
        e.preventDefault()
        let obj = {
            task: task,
            desc: desc,
            priority: priority
        }

        let result = await axios.post("http://localhost:5000", obj)
        console.log(result.data.data);

        setstate(result.data.data, ...state);

    }
    return (
        <div>
            {/* {state} */}
            <div className="container">
                <div className="col-sm-6 offset-3">
                    <div className="card">
                        <div className="card-header">Todo app</div>
                        <div className="card-body">
                            <form onSubmit={addData}>

                                <input onChange={(e) => { task = e.target.value }} type="text" className="form-control" />
                                <br />
                                <textarea name="" id="" cols="30" rows="10" onChange={(e) => { desc = e.target.value }} className="form-control"></textarea>
                                <br />
                                <select onChange={(e) => { priority = e.target.value }} name="" id="" className="form-select">
                                    <option value="high">high</option>
                                    <option value="mid">mid</option>
                                    <option value="low">low</option>
                                </select>
                                <br />
                                <button className="btn btn-success w-100">Add task</button>
                            </form>
                        </div>
                    </div>
                    {state.map((item, i) => {
                        return <div key={i}>
                            <div>{item.task}</div>
                            <div>{item.desc}</div>
                            <div>{item.priority}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}