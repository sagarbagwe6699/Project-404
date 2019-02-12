import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import LoginPage from './scenes/LoginPage/LoginPage';
import Home from './scenes/Home/Home';
import Registration from './scenes/RegForm/Registration';
import Error from './scenes/Error/Error';
import FPassword from './scenes/ForgotPassword/ForgotPass';
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
        const routeLink = (this.state.data!==null&&this.state.data!==false)?(<Route exact path="/Home" render={(rp)=>(<Home {...rp} data={this.state.data}/>)}/>
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
                            <Route path="/Reg" exact component={Registration} />
                            <Route path="/FPass" exact component={FPassword} />
                            <Route path="/:Error" component={Error} />
                        </Switch>
                    </div>
            </BrowserRouter>
         );
    }
}
 
export default Routing;