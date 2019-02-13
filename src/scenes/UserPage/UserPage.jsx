import React, { Component } from 'react';
import NavLand from '../UserPage/components/Nav/NavLand';
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, FormGroup, InputLabel, FormControl, Select, MenuItem, OutlinedInput, List, ListItem, ListItemText, Button } from '@material-ui/core';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
  });

class UserPage extends Component {
    state = { 
        value: 10,
        room:[]
     }
     handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
      componentDidMount=async()=>{
        const res=await fetch('http://localhost:3002/login',{     ///dont change to axios
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         },
         method:"POST",
         body:JSON.stringify({"isavailable":true})
      })
      const data=await res.json()
      if(data!=false){
        this.setState({room:data})
        console.log("xxxxxxx")
        console.log(this.state.data)
      }
      else{
          this.setState({
              room:[]
          })
      }
    }

   

    render() { 
        const {classes}=this.props
        console.log(this.state)
        var availroom=(this.state.room.length!=0)?(this.state.room.map(elm=>{
                                                    return(    <ListItem button >
                                                            <ListItemText primary={elm.number} />
                                                            <Button variant="outlined" color='primary' >
                                                                Book Room
                                                            </Button>
                                                        </ListItem>)
        })):(<h1>No rooms available at the moment</h1>)
        return ( 
            <React.Fragment>
                <div>
                {console.log(this.props)}
                    <NavLand name={this.props.data.fname}/>
                    <Grid
                    container
                    direction="row"
                    justify="center">
                        <Grid item xs={10} style={{marginTop: 40}} >
                            <Grid
                            container
                            direction="row"
                            justify="center"
                            >
                                <Grid item xs={12}>
                                    <Paper style={{padding: 40}} >
                                        <Grid container direction="row" justify="center" >
                                            <Grid item xs={6}>
                                                <Typography variant="headline" style={{textAlign: "center"}} >
                                                    Select your preferences
                                                </Typography>
                                            </Grid>

                                        {/* <form> */}
                                            <Grid item xs={7}>
                                                <FormGroup fullWidth>

                                                {/* RoomType */}
                                                    <FormControl variant="outlined" fullWidth className={classes.formControl} >

                                                    <InputLabel variant="outlined">
                                                        Room Type
                                                    </InputLabel>

                                                        <Select
                                                            value={this.state.value}
                                                            onChange={this.handleChange("roomType")}
                                                            fullWidth
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'age-native-simple',
                                                              }}
                                                            input={
                                                            <OutlinedInput
                                                                name="roomType"
                                                                id="outlined-room-simple"
                                                            />
                                                            }
                                                        >
                                                            <MenuItem value="">
                                                            {/* <em>None</em> */}
                                                            </MenuItem>
                                                            <MenuItem value={10}>Regular</MenuItem>
                                                            <MenuItem value={20}>Deluxe</MenuItem>
                                                            <MenuItem value={30}>Super Deluxe</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    
                                                    {/* Bed Type */}

                                                    <FormControl variant="outlined" fullWidth style={{marginTop: 40}} >

                                                    <InputLabel>
                                                        Bed Type
                                                    </InputLabel>

                                                        <Select
                                                            // value={this.state.value}
                                                            native
                                                            onClick={this.handleChange("bedType")}
                                                            fullWidth
                                                            input={
                                                            <OutlinedInput
                                                                name="bedType"
                                                                id="outlined-bed-simple"
                                                            />
                                                            }
                                                        >
                                                            <MenuItem value="">
                                                            {/* <em>None</em> */}
                                                            </MenuItem>
                                                            <MenuItem value={10}>Small</MenuItem>
                                                            <MenuItem value={20}>Medium</MenuItem>
                                                            <MenuItem value={30}>Large</MenuItem>
                                                        </Select>
                                                    </FormControl>

                                            </FormGroup>
                                        {/* </form> */}
                                        </Grid>
                                        </Grid>

                                    </Paper>
                                </Grid>
                                <Grid item xs={12} style={{marginTop: 40}}>
                                    <Paper style={{padding: 20}} >
                                        <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        >
                                            <Grid item xs={12}>
                                                <List>
                                                    {availroom}
                                                </List>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
            </React.Fragment>
         );
    }
}

UserPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

 
export default withStyles(styles)(UserPage);