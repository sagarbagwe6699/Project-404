import React, { Component } from 'react';
import {Grid, Paper} from '@material-ui/core';
import LgForm from './components/LgForm';

class LoginPage extends Component {
    state = {  }
    render() { 
        return ( 
            <Grid
            container
            direction="row"
            justify="center">
                <Grid item xs={10}>
                    <Paper>
                        <LgForm />
                    </Paper>
                </Grid>
            </Grid>
         );
    }
}
 
export default LoginPage;