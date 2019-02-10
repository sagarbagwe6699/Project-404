import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './scenes/LoginPage/LoginPage';
import Home from './scenes/Home/Home';
import {BrowserRouter,Switch} from 'react-router-dom';
import Error from './scenes/Error/Error';
// import Contact from '../pages/Contacts';
// import EventPage from '../pages/Event';

class Routing extends Component {
    state = { 
        data: null
     }

     dataFetch=(name)=>{
        this.setState({data:name})
        // setTimeout(function(){ console.log("Hello"); }, 1000);
        console.log("----Inside router");
     }

    render() { 
        const routeLink = (this.state.data!==null&&this.state.data!==false)?(<Route exact path="/Home" component={Home} />
                                                                             ):(null);
        return ( 
            <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path='/' render={(rp)=>(<LoginPage {...rp} myFetch={this.dataFetch}/>)}/>
                            {routeLink}
                            {/* <Route path="/Event" component={EventPage} />
                            {/* <Route path="/Contact" component={Contactpage} /> */}
                            {/* <Route path="/Home" component={Home} /> */}
                            <Route path="/:Error" component={Error} />
                        </Switch>
                    </div>
            </BrowserRouter>
         );
    }
}
 
export default Routing;