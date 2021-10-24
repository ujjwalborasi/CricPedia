import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Matches from './Components/Matches/Matches';
import Blogs from './Components/Blogs/Blogs'
import Stadiums from './Components/Stadiums/Stadiums'
import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import React, { Component } from 'react'
import FetchData from './Api';
import Stats from './Components/Stats/Stats';

export class App extends Component {
  state = {
    Data: {},
    
  }
  async componentDidMount() {
    this.setState({ Data: (await FetchData()) });
console.log(this.state.Data)
  }


  render() {
    const { Data, Tem } = this.state
    return (
      <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}  ></Route>
          <Route exact path="/Blogs" component={Blogs}></Route>
          <Route exact path="/Stats" component={Stats}></Route>
          <Route exact path="/Matches" component={Matches}></Route>
          <Route exact path="/Stadiums" render={(props)=>(
            <Stadiums {...props} data={Data}  />
          )}  />
           
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
    )
  }
}

export default App

