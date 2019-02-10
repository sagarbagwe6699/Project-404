import React, { Component } from 'react';
import { Paper, TextField, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Button, Typography, DialogActions } from '@material-ui/core';
import Bg from '../../images/bg.jpg'

class RegForm extends Component {
    state = { 
        open: false
     }

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

    handleClick=()=>{
        if(this.state.open===false){
            this.setState({open: true})
        }
        else{
            this.setState({open: false})
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
                    <Typography variant="headline" >
                        Enter your email address
                    </Typography>
                    <Grid item xs={12}>

                    </Grid>            
                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-email"
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>

                    <Grid item xs={12}>

                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" style={{marginTop: 20}} onClick={this.handleClick} >
                            Verify
                        </Button>
                    </Grid>
                    </Grid>
                    </form>
                </Paper>
                </Grid>
                </Grid>

                <Dialog
                open={this.state.open}
                // aria-labelledby="alert-dialog-slide-title"
                // aria-describedby="alert-dialog-slide-description"
                >
                <DialogTitle >
                    Verification
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                    Link as been sent to the your email address
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClick} >
                        Login
                    </Button>
                </DialogActions>
                </Dialog>

            </React.Fragment>
         );
        }
    }
//  
export default RegForm;