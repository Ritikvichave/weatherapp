// import axios from 'axios'
import React from 'react'


export default function Api() {


    return (
        <div>
        <div>
            {/* {state} */}
            <div className="container">
                <div className="col-sm-6 offset-3">
                    <div className="card">
                        <div className="card-header">Todo app</div>
                        <div className="card-body">
                            <form >

                                <input type="text" className="form-control" />
                                <br />
                                <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                                <br />
                                <select name="" id="" className="form-select">
                                    <option value="high">high</option>
                                    <option value="mid">mid</option>
                                    <option value="low">low</option>
                                </select>
                                <br />
                                <button className="btn btn-success w-100">Add task</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>            
        </div>
    )
}
