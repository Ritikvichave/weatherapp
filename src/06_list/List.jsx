import React, { Component } from 'react'

export default class List extends Component {
    arr = ["hp", "dell", "mac", "apple", "asus"]
    render() {
        return (
            <div>
                {
                    this.arr.map((item) => {
                        return <h1>{item}</h1>
                    })
                }
            </div>
        )
    }
}
