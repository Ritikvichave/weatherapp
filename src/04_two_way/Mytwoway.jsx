import React, { Component } from 'react'

export default class Mytwoway extends Component {
    state = {
        userinput: ""
    }
    onChangeHandler = (e) => {
        // x = e.target.value
        // console.log(e.target.value);
        // console.log(x)
        this.setState({
            userinput: e.target.value
        })

    }
    render() {
        return (
            <div>
                <p>{this.state.userinput}</p>
                <input type="text" onChange={this.onChangeHandler} />
            </div>
        )
    }
}
