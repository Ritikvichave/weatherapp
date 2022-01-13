import React, { Component } from 'react'

export default class Myform extends Component {
    state = {
        userInp: "",
        arr: []
    }
    OnAddData = async (e) => {
        e.preventDefault()
        // console.log("dddddd");
        await this.setState({
            arr: [...this.state.arr, this.state.userInp]
        })
        console.log(this.state.arr);





    }
    render() {
        return (
            <div>
                <form onSubmit={this.OnAddData}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 offset-3">
                                <div className="card">
                                    <div className="card-body">
                                        <input type="text" className="form-control" onChange={(e) => {
                                            this.setState({
                                                userInp: e.target.value
                                            })
                                        }} autoFocus />
                                        <br />
                                        <button className="btn btn-primary w-100" >helllo</button>
                                    </div>
                                    {this.state.arr.map((item) => {
                                        return <div className="alert alert-primary">{item}</div>
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
