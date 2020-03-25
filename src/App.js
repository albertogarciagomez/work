import React from 'react';


// Style 
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
// Ui Components
import NavBar from './components/ui/navbar/Navbar'

// Page Components
import IndexPage from './components/pages/index/indexPage'
//import Foodsindex from './components/pages/foods-index/FoodsIndex'
//import PhotoVideo from './components/pages/foods-index/photovideo'
//import Contact from './components/pages/foods-index/contact'
import Aboutme from './components/pages/foods-index/aboutme'
import Uxui from './components/pages/foods-index/uxui'
 import Copy from './components/pages/foods-index/copy'


// Rrd Components
import {Switch, Route} from 'react-router-dom'


const App = () => {
  return (
    <div className="home" id="top">
    <NavBar />
    <IndexPage/>
    <Aboutme/>
    <Uxui/>
    <Copy/>
    {/* <Switch>
      <Route path="/work/uxui" exact component={IndexPage}/>
      <Route path="/work/web" component={Foodsindex}/>
      <Route path="/work/photovideo" component={PhotoVideo}/>
      <Route path="/work/contact" component={Contact}/>
      <IndexPage/>
      <Foodsindex/>
    </Switch> */}
    </div>
  );
}

export default App;
