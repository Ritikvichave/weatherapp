// import logo from './logo.svg';
// import './App.css';
// import Basic from "./01_/basic";
// import Myclass from "./02_class_component/Myclass";
// import State from "./03_state/state";
// import Mytwoway from "./04_two_way/Mytwoway";
// import Task01 from "./05_task/Task01";
// import List from "./06_list/List";
// import Myform from "./08_form/Myform";
// import Task from "./010_task/Task";
// import Myfun from "./011_fuctional_comp/Myfun";
import Weatherapp from "./weather_app/Weatherapp";
// import Myfetch from "./09_fetch/Myfetch";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
// import Home from "./012_routing/Home";
import About from "./012_routing/About";
import Contact from "./012_routing/Contact";
import MyAxios from "./013_Axios/MyAxios";
// import User from "./14_user/User";
// import TodoApi from "./015_Todo/Todo";
import Api from "./016_todoo/Api";


function App() {
  return (
    <div >
      {/* <BrowserRouter>
        <li><Link to="/home">Goto Home page</Link></li>
        <li><Link to="/about">Goto about page</Link></li>
        <li><Link to="/contact">Goto Contact page</Link></li>
        <li><Link to="/Axios">Goto Axios page</Link></li>
        <Switch> */}

      {/* <Route path="/" component={TodoApi} exact></Route> */}
      {/* <Route path="/home" component={Api}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/Axios" component={MyAxios}></Route>
        </Switch>
      </BrowserRouter> */}

      {/* <Myfun /> */}
      <Weatherapp />
      {/* <Task /> */}
      {/* <Myfetch /> */}
      {/* <State /> */}
      {/* <Basic /> */}
      {/* <Myclass /> */}
      {/* <Mytwoway /> */}
      {/* <Task01 /> */}
      {/* <List /> */}
      {/* <Myform /> */}
    </div>
  );
}

export default App;
