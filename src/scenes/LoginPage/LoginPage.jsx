import React, { Component } from 'react';
import {Grid, Paper, MuiThemeProvider} from '@material-ui/core';
import LgForm from './components/LgForm';
import Footer from '../../reusable-components/footer/footer';
import Particles from 'react-particles-js'

class LoginPage extends Component {
    state = { data:null }
    render() { 
        return ( 
            <div>
                <div style={{zIndex:"-1",position:"absolute",background: "linear-gradient(135deg, #283593 0%,  #283593 100%)"}}>
                    <Particles width="98.8vw" height="100%" style={{width:"100%",height:"100%"}}
                    params={{
                        "particles": {
                            "number": {
                                "value": 200
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                                // "onclick": {
                                //     "enable": true,
                                //     "mode": "repulse"
                                // }
                            }
                        }
                    }} 
                    />
                </div>
                <Grid
                style={{background: "none"}}
                container
                direction="row"
                justify="center">
                    <Grid item xs={10} sm={9} md={7} lg={5} xl={4} style={{marginTop: 125,marginBottom: 100}} >
                        <Paper style={{borderRadius: 10,background:"WHITE",zIndex:"1",float: "left"}} >
                            <LgForm  myFetch={this.props.myFetch} loginProp={this.props} />
                        </Paper>
                    </Grid>
                </Grid>
                {/* <Footer /> */}
                {/*<div style={{background: "linear-gradient(135deg, rgb(96, 108, 136) 0%, rgb(63, 76, 107) 100%)"}}>
                <Particles width="100%" height="100%"/>
        </div>*/}
            </div>
         );
    }
}
 
export default LoginPage;