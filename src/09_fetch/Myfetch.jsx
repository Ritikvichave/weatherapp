import React, { Component } from 'react'

export default class Myfetch extends Component {
    state = {
        arr: []
    }
    Loaddata = async () => {
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        // api.openweathermap.org/data/2.5/weather?q=pune&appid=3dea525bd734a6c4f89ab2fb9e025109
        data = await data.json();
        console.log(data);
        this.setState({
            arr: [...data]
        })
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.Loaddata}>Click me</button>
                {this.state.arr.map((item, i) => {
                    return (
                        <div className="alert alert-danger">{item.name}</div>
                    )
                })}
            </div>
        )
    }
}
