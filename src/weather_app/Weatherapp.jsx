import React, { useState } from 'react'

export default function Weatherapp() {
    const [statecity, setstatecity] = useState({ city: "" })
    const [cityData, setcityData] = useState([])
    const [stateisShow, setisshow] = useState({ isShow: false })
    const Getdata = async (e) => {
        e.preventDefault();
        setisshow({
            isShow: true
        })
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + statecity.city + "&appid=5ddb5a07a6f2e88203f37ecba1845aea";
        let data = await fetch(url);
        data = await data.json();
        console.log(data);
        setisshow({
            isShow: false,
        })
        setcityData([data])
        console.log(cityData);
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-3">
                        <div className="card mt-4">
                            <div className="card-header">Weather app</div>
                            <div className="card-body">
                                <form onSubmit={Getdata} className="input-group">
                                    <input type="text" placeholder='Enter city name ' className="form-control" onChange={
                                        (e) => { setstatecity({ city: e.target.value }) }} />
                                    <button className="btn btn-primary" disabled={stateisShow.isShow} >{stateisShow.isShow ? <div className="spinner spinner-border"></div> : ""}Get weather details</button>
                                </form>
                            </div>
                            {cityData ? cityData.map((item, i) => {
                                return <div className="mt-5 border border-2" key={i}>
                                    {stateisShow.isShow ? <div><div className="spinner spinner-grow"></div><div className="spinner spinner-grow"></div><div className="spinner spinner-grow"></div><div className="spinner spinner-grow"></div><div className="spinner spinner-grow"></div><div className="spinner spinner-grow"></div><div className="spinner spinner-grow"></div><div className="spinner spinner-grow"></div> </div> : ""}

                                    <div className="bg-info">
                                        {item.weather[0].description}: <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon" />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        {/* {state.users.data} */}
                                        <div className="bg-danger flex-grow-1">Temp:{item.main.temp - 273}</div>
                                        <div className="bg-primary flex-grow-1 ">City:{item.name}</div>
                                    </div>
                                </div>
                            }) : <div className='alert alert-danger'>City Not found </div>}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// http://openweathermap.org/img/wn/10d@2x.png