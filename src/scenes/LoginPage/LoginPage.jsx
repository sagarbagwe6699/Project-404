import React, { Component } from 'react';
import {Grid, Paper, MuiThemeProvider} from '@material-ui/core';
import LgForm from './components/LgForm';
import Footer from '../../reusable-components/footer/footer';
import Particles from 'react-particles-js';

class LoginPage extends Component {
    state = { data:null }
    render() { 
        return ( 
            <React.Fragment>
                <Grid
                // style={{background: "#eceff1"}}
                container
                direction="row"
                justify="center">
                    <Grid item xs={10} sm={9} md={7} lg={5} xl={4} style={{marginTop: 100,marginBottom: 100}} >
                        <Paper style={{borderRadius: 10}} >
                            <LgForm  myFetch={this.props.myFetch} loginProp={this.props} />
                        </Paper>
                    </Grid>
                </Grid>
                {/* <Footer /> */}
                {/* <Particles /> */}
            </React.Fragment>
         );
    }
}
 
export default LoginPage;