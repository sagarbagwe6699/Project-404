import React, { Component } from 'react';
import {Grid, MuiThemeProvider, TextField, Button, Typography, Divider,Tab,Tabs} from '@material-ui/core';
import Media from '../../../reusable-components/Social media buttons/MediaEffect';
import {Link, NavLink} from 'react-router-dom';
// import * as myTheme from '../../../themes/blueTheme';

import red from '@material-ui/core/colors/red';

const secondary = red[0];

class LgForm extends Component {
    state = { data:null }
    lgclick=async(e)=>{
        e.preventDefault();
        var name=document.getElementById('outlined-name').value
        var password=document.getElementById('outlined-name2').value
        const res=await fetch('http://localhost:3001/login',{     ///dont change to axios
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
             method:"POST",
             body:JSON.stringify({"message":name,"password":password})
          })
          const data=await res.json()
          this.setState({data})

          console.log(this.state.data)
          this.props.loginProp.history.push('/Home')
        //   console.log(this.props.loginProp.history.location.pathname)
        // this.props.loginProp.history.location.pathname
        this.props.myFetch(this.state.data)
          if(this.state.data!==null&&this.state.data!==false){
            this.props.loginProp.history.push('/Home')
          }
          else{
            this.props.loginProp.history.push('/Error')
          }
    }
    sgnclick=async(e)=>{
        e.preventDefault();
        var name=document.getElementById('outlined-name').value
        var password=document.getElementById('outlined-name2').value
        const res=await fetch('http://localhost:3001/signup',{     ///dont change to axios
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         },
         method:"POST",
         body:JSON.stringify({"message":name,"password":password})
      })
      const data=await res.json()
      this.setState({data})

      console.log(this.state.data)
    }

    
    render() { 
        console.log(this.props)
        // var variable=(this.state.data!=null&&this.state.data!==false)?(<Link to={Home}/>):(null)
        return ( 
            // <MuiThemeProvider theme={myTheme}>
            <form 
            >
            <Grid
            container
            direction="row"
            justify="center">
            
            <Typography variant="overline" style={{fontSize: 30, color: "#607d8b", marginTop: 20}} >
                    Login
                    </Typography>
                    
                    <Grid item xs={12}>
                    
                    </Grid>

                <Grid item xs={6} style={{marginTop: 10}} >
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
                    id="outlined-name2"
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
                
                <Grid item >
                <Link to="/Home" >   
                    <Button
                    style={{marginRight: 10,marginBottom: 20,marginTop: 30}}
                    color="primary"
                    variant="contained"
                    onClick={this.lgclick}
                    type="submit"
                    >
                        Login
                    </Button>
                </Link>
                <NavLink 
                to="/Reg"
                style={{textDecoration: "none"}}
                >
                    <Button
                    style={{marginBottom: 20,marginTop: 30}}
                    color="primary"
                    variant="outlined"
                    // onClick={this.sgnclick}
                    >
                        Sign Up
                    </Button>
                </NavLink>
                </Grid>
                <Grid item xs={12} textAlign="center"><Typography  color="error" variant="body1" style={{textAlign:"center",marginBottom:"3%",visibility:"hidden"}}>Sorry, we don't recognize this combination</Typography>
                    
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
            </form>
            // {variable}
            // </MuiThemeProvider>
         );
    }
}
 
export default LgForm;

