import React, { Component } from 'react';
import {Grid, MuiThemeProvider, TextField, Button, Typography, Divider} from '@material-ui/core';
import Media from '../../../reusable-components/Social media buttons/MediaEffect';
// import * as myTheme from '../../../themes/blueTheme';

class LgForm extends Component {
    state = {  }
    render() { 
        return ( 
            // <MuiThemeProvider theme={myTheme}>
            <Grid
            container
            direction="row"
            justify="center">
                <Grid item xs={6} style={{marginTop: 60}} >
                    <TextField
                    id="outlined-name"
                    label="Name"
                    // className={classes.textField}
                    // value={this.state.name}
                    // onChange={this.handleChange('name')}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    />
                </Grid>

                <Grid item xs={12}>
                </Grid>
                
                <Grid item xs={6}>
                    <TextField
                    id="outlined-name"
                    type="password"
                    label="Password"
                    // className={classes.textField}
                    // value={this.state.name}
                    // onChange={this.handleChange('name')}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    />
                </Grid>

                <Grid item xs={12}>
                </Grid>
                
                <Grid item>
                    <Button
                    style={{marginRight: 10,marginBottom: 60,marginTop: 30}}
                    color="primary"
                    variant="contained">
                        Login
                    </Button>
                    <Button
                    style={{marginBottom: 60,marginTop: 30}}
                    color="primary"
                    variant="outlined">
                        Sign Up
                    </Button>
                </Grid>

                <Grid item xs={12}>
                </Grid>
                
                <Grid item xs={9}>
                    <Divider variant="middle" />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6" color="primary" style={{textAlign: "center",marginTop: 20}} >
                        Sign up with
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} style={{marginBottom: 20}} >
                    <Media />
                </Grid>
            </Grid>
            // </MuiThemeProvider>
         );
    }
}
 
export default LgForm;