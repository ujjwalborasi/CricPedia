import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/NavBar/Navbar';
import Tournaments from './Components/Tournaments/Tournaments';
import Stadiums from './Components/Stadiums/Stadiums'
import Footer from './Components/Footer/Footer';
import FetchData from './Api';
import Stats from './Components/Stats/Stats';
import Profiles from './Components/Profiles/Profiles';
import Teams from './Components/Teams/Teams';
import Leagues from './Components/Leagues/Leagues';

export class App extends Component {
  state = {
    Data: {},

  }
  async componentDidMount() {
    this.setState({ Data: (await FetchData()) });
    console.log(this.state.Data)
  }


  render() {
    const { Data } = this.state
    return (
      <>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home}  ></Route>
            <Route exact path="/Teams" render={
              (props)=>( <Teams {...props} data={Data} />)
            } />
            <Route exact path="/Stats" component={Stats}></Route>
            <Route exact path="/Tournaments" render={
              (props) => (<Tournaments {...props} data={Data}/>)
            }></Route>
            <Route exact path="/Profiles" component={Profiles}></Route>
            <Route exact path="/Leagues" component={Leagues}></Route>
            <Route exact path="/Stadiums" render={(props) => (
              <Stadiums {...props} data={Data} />
            )} />

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </>
    )
  }
}

export default App

