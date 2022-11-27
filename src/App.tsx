import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import HomeFunc from './components/Home/Home';
import Search from "./components/Sidebar/Search/Search";
import PlayList from "./components/Sidebar/Playlist/PlaylistFace"
import Favourite from "./components/Sidebar/Favourite/FavFace";
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import StripeContainer from './components/Payment/StripeContainer';



const App:React.FC =()=> {


  return (
    <Router>
    <div className="App">
      <Header/>
      <>
      <td><Sidebar /></td>
      
      <td><Switch>
      <Route exact path = "/home" component={HomeFunc}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/myplaylist" component={PlayList}/>
      <Route exact path="/favs" component={Favourite}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/payment" component={StripeContainer}/>
      </Switch></td>
      </>
    </div>
    </Router>
  );
}

export default App;
