import React from 'react';


// Style 
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
// Ui Components
import NavBar from './components/ui/navbar/Navbar'

// Page Components
import IndexPage from './components/pages/index/indexPage'
import Foodsindex from './components/pages/foods-index/FoodsIndex'
import PhotoVideo from './components/pages/foods-index/photovideo'
import Contact from './components/pages/foods-index/contact'
import Copy from './components/pages/foods-index/copy'


// Rrd Components
import {Switch, Route} from 'react-router-dom'


const App = () => {
  return (
    <div className="home">
    <NavBar />
    <Switch>
      <Route path="./uxui" exact component={IndexPage}/>
      <Route path="./web" component={Foodsindex}/>
      <Route path="./photovideo" component={PhotoVideo}/>
      <Route path="./contact" component={Contact}/>
      <IndexPage/>
      <Foodsindex/>
    </Switch>
    </div>
  );
}

export default App;
