import React, { Component } from 'react';
import {Grid, Paper, TextField, Button} from '@material-ui/core';

class LgForm extends Component {
    state = {  }
    render() { 
        return ( 
            <Grid
            container
            direction="row"
            justify="center">
                <Grid item xs={10}>
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
                
                <Grid item xs={10}>
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
                    style={{marginRight: 10,marginBottom: 20,marginTop: 20}}
                    color="primary"
                    variant="outlined">
                        Login
                    </Button>
                    <Button
                    style={{marginBottom: 20,marginTop: 20}}
                    color="primary"
                    variant="contained">
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
         );
    }
}
 
export default LgForm;