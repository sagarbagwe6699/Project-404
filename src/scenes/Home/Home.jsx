import React, { Component } from 'react';
import {Typography, Grid} from '@material-ui/core';
import MyDrawer from './Drawer/Drawer';
import MyCard from '../../reusable-components/Card/Cards';
import NavBar from '../../reusable-components/Nav/NavBar';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavBar />
                <MyDrawer />
                <div style={{marginLeft: 300,marginTop: 100,marginRight: 40}} >
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    spacing={24}
                    style={{width: "100%"}}
                    >
                        <Grid item xs={4} sm={4} md={3}  >
                            <MyCard />
                        </Grid>
                        
                        <Grid item xs={4} sm={4} md={3} >
                            <MyCard />
                        </Grid>
                        
                        <Grid item xs={4} sm={4} md={3} >
                            <MyCard />
                        </Grid>
                        
                        <Grid item xs={4} sm={4} md={3} >
                            <MyCard />
                        </Grid>
                        
                        <Grid item xs={4} sm={4} md={3} >
                            <MyCard />
                        </Grid>
                        
                        <Grid item xs={4} sm={4} md={3} >
                            <MyCard />
                        </Grid>
                    </Grid>
                </div>
            </div>
         );
    }
}
 
export default Home;