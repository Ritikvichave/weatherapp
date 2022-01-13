import React, { Component } from 'react'

export default class State extends Component {
    // isShow = false;
    state = {
        name: "jhon",
        show: false
    }
    changeName = () => {
        // console.log(this.isShow);
        this.setState({
            show: !this.state.show
        })
    }

    // changeName1 = () => {
    //     this.setState()
    // }

    render() {
        return (
            <div>
                {this.state.show ? <h1>{this.state.name}</h1> : ""}
                <button onClick={this.changeName}>click</button>
                {/* <button onClick={this.changeName1}>click</button> */}
            </div>
        )
    }
}
