import React, { Component } from 'react';
import { Paper, TextField, Grid, Button, Typography } from '@material-ui/core';
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

    sgnclick=async(e)=>{
        e.preventDefault();
        var fname=document.getElementById('outlined-fname').value
        var lname=document.getElementById('outlined-lname').value
        var mail=document.getElementById('outlined-email').value
        var pass=document.getElementById('outlined-pass').value
        var cpass=document.getElementById('outlined-cpass').value
        var address=document.getElementById('outlined-address').value
        const res=await fetch('http://localhost:3001/signup',{     ///dont change to axios
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         },
         method:"POST",
         body:JSON.stringify({"fname":fname,"lname":lname,"mail":mail,"pass":pass,"address":address})
      })
      const data=await res.json()
      this.setState({data})

      console.log(this.state.data)
      this.props.history.push('/')
    }

    render() { 
        return ( 
            <React.Fragment >
                <Grid container direction="row" justify="center" style={this.styles.outterGrid} >

                <Grid item xs={6} style={{marginBottom:"40px"}}>
                <Paper style={this.styles.paper} >
                    <form action="">
                    <Grid container direction="row" justify="center">
                    <Typography variant="overline" style={{fontSize: 30, color: "#607d8b"}} >
                    Register
                    </Typography>
                    
                    <Grid item xs={12}>
                    
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    autoFocus
                    required
                    style={{marginTop: 40}}
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
                    id="outlined-cpass"
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
                    <Grid container justify="center">
                        <Grid item xs={12}>
                            <Typography variant="subtitle2" style={{fontSize:15}}>* indicates mandatory fields</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button onClick={this.sgnclick} variant="contained" color="primary" style={{marginTop: 20}} >
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