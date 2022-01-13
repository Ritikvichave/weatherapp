import { Component } from "react";

export default class Myclass extends Component {
    showLaptop = () => {
        console.log("called");
    }
    render() {
        return (
            <div>
                <h2>My class</h2>
                <h2>{this.showLaptop()}</h2>

            </div>
        )
    }
}