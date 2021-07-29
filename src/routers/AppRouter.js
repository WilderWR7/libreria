import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Content } from '../components/content/Content';
import { SuperContent } from '../components/content/SuperContent';
import { Footer } from '../components/footer/Footer';
import { NavBar } from '../components/nav-bar/NavBar';
import { Producto } from '../components/product/Producto';
import { SearchScreen } from '../components/search/SearchScreen';


export const AppRouter = () => {
    return (
        <Router>
            <NavBar/>
            <div>
                <Switch>
                    <Route exact path = '/' component = { SuperContent } />
                    <Route exact path = '/category/:idcate' component = { Content }/>
                    <Route exact path = '/product/:producto' component = { Producto }/>
                    <Route exact path = '/search' component = { SearchScreen } />
                    <Redirect to = '/'/> 
                </Switch>
            </div>
            <Footer/>
        </Router>
    )
}
