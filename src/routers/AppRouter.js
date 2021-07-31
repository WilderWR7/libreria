
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
                    <Route exact path = '/libreria' component = { SuperContent } />
                    <Route exact path = '/libreria/category/:idcate' component = { Content }/>
                    <Route exact path = '/libreria/product/:producto' component = { Producto }/>
                    <Route exact path = '/libreria/search' component = { SearchScreen } />
                    <Redirect to = '/libreria'/> 
                </Switch>
            </div>
            <Footer/>
        </Router>
    )
}
