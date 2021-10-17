import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Matches from './Components/Matches/Matches';
import Blogs from './Components/Blogs/Blogs'
import Stadiums from './Components/Stadiums/Stadiums'
import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route exact path="/Blogs" component={Blogs} ></Route>
          <Route exact path="/Matches" component={Matches}></Route>
          <Route exact path="/Stadiums" component={Stadiums}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
