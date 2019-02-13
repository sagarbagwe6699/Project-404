import React, { Component } from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import {Link} from 'react-router-dom';
import NavLand from './components/Nav/NavLand';
import Footer from '../../reusable-components/footer/footer';

class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <NavLand />
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    >
                        <Grid item xs={11}>
                            <Grid
                            container
                            direction="row"
                            justify="center"
                            >
                            <Grid item xs={12}>
                                <Paper style={{padding: 40,marginTop: 180}} >
                                    Sagar
                                </Paper>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                {/* <Footer /> */}
            </React.Fragment>
         );
    }
}
 
export default LandingPage;