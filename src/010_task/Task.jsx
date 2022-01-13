import React, { Component } from 'react'

export default class Task extends Component {
    state = {
        city: "",
        arr: [],
        we: []
    }
    LoadData = async () => {
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.state.city + "&appid=5ddb5a07a6f2e88203f37ecba1845aea";
        let data = await fetch(url)
        data = await data.json()
        // console.log(data);
        this.setState({
            arr: [data],
            we: [...data.weather]
        })
        console.log(this.state.we[0].description);
        console.log(data);
    }

    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 offset-3">
                            <div className="card">
                                <div className="card-header">Weather</div>
                                <div className="card-body">
                                    <input type="text" className="form-control" onChange={(e) => {
                                        this.setState({
                                            city: e.target.value
                                        })
                                    }} />
                                    <br />
                                    <button className="btn btn-primary w-100 " onClick={this.LoadData}>Load</button>
                                </div>
                            </div>
                            <br />

                            {this.state.arr.map((index, i) => {
                                return (
                                    <div className="card bg-info">
                                        <div className="card-header bg-dark text-light" data-bs-toggle="collapse" data-bs-target="#m1">City  :   {index.name}</div>
                                        <div className="card-body collapse" id="m1">
                                            <div>Description  :   {index.weather[i].description}</div>
                                            <div>sunrise :  {index.sys.sunrise}   sunset  :  {index.sys.sunset}</div>
                                            <div>Wind_speed :  {index.wind.speed}</div>
                                            <div>Temprature :  {index.main.temp}F   max_temp :  {index.main.temp_max}           min_temp  : {index.main.temp_min}</div>
                                            <div>Humidity :  {index.main.humidity}</div>
                                            <div>sea_level :  {index.main.sea_level}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
