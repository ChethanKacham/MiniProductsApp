import React from 'react';
import temp from './components/temp'
import {BrowserRouter as Router,Route,Switch,NavLink} from 'react-router-dom';
import Allproducts from './components/Allproducts';

class Links extends React.Component{
    render()
    {
        return(
            <div class = "btn">
                <span id = "abt"><NavLink exact to="/products" activeClassName="active">About</NavLink></span>
                <span id = "btn1" ><NavLink exact to="/" activeClassName="active">Product</NavLink></span>                
            </div>

        );
    }
}
export default class Home extends React.Component{
    render(){
        return(
                <Router>
                    <div>
                    <Links/>
                    <Switch>
                        <Route exact path="/products" component={temp}/>
                        <Route exact path="/" component={Allproducts}/>
                        
                    </Switch>
                    </div>
                </Router>
            
        );
    }
}