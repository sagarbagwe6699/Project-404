import React, { Component } from 'react';
import NavLand from '../UserPage/components/Nav/NavLand';
import { Grid, Paper, Typography, FormGroup, InputLabel, FormControl, Select, MenuItem, OutlinedInput, List, ListItem, ListItemText, Button } from '@material-ui/core';

class UserPage extends Component {
    state = { 
        value: 10
     }
     handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <NavLand />
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
                                                    <FormControl variant="outlined" fullWidth style={{marginTop: 40}} >

                                                    <InputLabel>
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
                                                    <ListItem button >
                                                        <ListItemText primary="Room1" />
                                                        <Button variant="outlined" color='primary' >
                                                            Book Room
                                                        </Button>
                                                    </ListItem>
                                                    <ListItem button >
                                                        <ListItemText primary="Room2" />
                                                        <Button variant="outlined" color='primary' >
                                                            Book Room
                                                        </Button>
                                                    </ListItem>
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
 
export default UserPage;