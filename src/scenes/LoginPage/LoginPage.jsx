import React, { Component } from 'react';
import {Grid, Paper, MuiThemeProvider} from '@material-ui/core';
import LgForm from './components/LgForm';

class LoginPage extends Component {
    state = {  }
    render() { 
        return ( 
            <Grid
            style={{background: "#eceff1"}}
            container
            direction="row"
            justify="center">
                <Grid item xs={10} sm={9} md={7} lg={5} xl={4} style={{marginTop: 100,marginBottom: 100}} >
                    <Paper style={{borderRadius: 10}} >
                        <LgForm />
                    </Paper>
                </Grid>
            </Grid>
         );
    }
}
 
export default LoginPage;