import React from 'react'
import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Poplar from './components/popular';
import PopularBattle from  './components/popular-battle';
import Weekly from './components/weekly';
import WeeklyBattle from './components/popular-battle';
import Favorites from './components/favorites';
import Homepage from './components/hompage';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
      <nav> 
            <ul>
              <li><Link to="/App">Homepage</Link></li> 
              <li><Link to="/Popular">Popular</Link></li>
              <li><Link to="/PopularBattle">PopularBattle</Link></li>
              <li><Link to="/Weekly">Weekly</Link></li>
              <li><Link to="/WeeklyBattle">WeeklyBattle</Link></li>
              <li><Link to="/Favorites">Favorites</Link></li>
            </ul>
          </nav>

          <Switch> 
          <Route exact path="/" component={Homepage} ></Route>
						<Route path="/Popular" component={Poplar}></Route>
            <Route path="/PopularBattle" component={PopularBattle}></Route>
            <Route path="Weekly" component={Weekly}></Route>
            <Route path="/WeeklyBattle" component={WeeklyBattle}></Route>
            <Route path="/Favorites" component={Favorites}></Route>
						{/* <Route path="*" component={Error404}></Route> */}
          </Switch>
      </BrowserRouter>
    )
  }
}



export default App;
