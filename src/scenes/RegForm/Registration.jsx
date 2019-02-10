import React, { Component } from 'react';
import { Paper, TextField, Grid, Button } from '@material-ui/core';
import Bg from '../../images/bg.jpg'

class RegForm extends Component {
    state = {  }

    styles={
        paper:{
            paddingTop:40,
            paddingBottom:40,
            borderRadius: 10
        },
        outterGrid:{
            paddingTop: 40,
            // backgroundImage: `url("${Bg}")`
        }
    }

    render() { 
        return ( 
            <React.Fragment >
                <Grid container direction="row" justify="center" style={this.styles.outterGrid} >
                <Grid item xs={6}>
                <Paper style={this.styles.paper} >
                    <form action="">
                    <Grid container direction="row" justify="center">
                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    autoFocus
                    required
                    id="outlined-fname"
                    label="First Name"

                    value={this.state.name}
                    // onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>

                    <Grid item xs={12}>

                    </Grid>

                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-lname"
                    label="Last Name"           
                    // onChange={thhandleChange('name')}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>
                    
                    <Grid item xs={12}>

                    </Grid>
                    
                    
                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-email"
                    label="Email"           
                    // onChange={thhandleChange('name')}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>
                    
                    <Grid item xs={12}>

                    </Grid>
                    
                    
                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-pass"
                    label="Password" 
                    type="password"
                    // onChange={thhandleChange('name')}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>
                    
                    <Grid item xs={12}>

                    </Grid>
                    
                    
                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-cPass"
                    type="password"
                    label="Confirm Password"
                    // onChange={thhandleChange('name')}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>
                    
                    <Grid item xs={12}>

                    </Grid>
                    
                    
                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-address"
                    label="Address" 
                    multiline
                    rows="4"        
                    // onChange={thhandleChange('name')}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" style={{marginTop: 20}} >
                            Register
                        </Button>
                    </Grid>
                    </Grid>
                    </form>
                </Paper>
                </Grid>
                </Grid>
            </React.Fragment>
         );
        }
    }
//  
export default RegForm;