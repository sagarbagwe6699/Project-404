import React, { Component } from 'react';
import {Typography, Grid} from '@material-ui/core';
import MyDrawer from './Drawer/Drawer';
import CCard from '../../reusable-components/Card/CreateCards';
import DelCard from '../../reusable-components/Card/DeleteCard';
import UCard from '../../reusable-components/Card/Update';
import NavBar from '../../reusable-components/Nav/NavBar';
import MyTable from './Table/MyTable';

class Home extends Component {
    state = { clickdata:"1",
                data:null}
    clickerr=(clickdata)=>{
        this.setState({
            clickdata
        })
    }
    componentWillMount(){
        const data="Admin"
        this.setState({
            data
        })
    }
    render() { 
        console.log(this.state)
        return ( 
            <div id="newbg">
                <NavBar clicked={this.state.clickdata} name={"Admin"}/>
                <MyDrawer clickerr={this.clickerr} name={this.state.data}/>
                <div style={{marginLeft: 300,marginTop: 100,marginRight: 40}} >
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    spacing={24}
                    style={{width: "100%",marginBottom: 60}}
                    >
                        <Grid item xs={4} sm={4} md={3}  >
                            <CCard />
                        </Grid>

                        <Grid item xs={4} sm={4} md={3}  >
                            <DelCard />
                        </Grid>

                        <Grid item xs={4} sm={4} md={3}  >
                            <UCard />
                        </Grid>

                        <Grid xs={12}>
                        </Grid>

                        <Grid xs={12}>
                            <MyTable />
                        </Grid>

{/*                         
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
                        </Grid> */}
                    </Grid>
                </div>
            </div>
         );
    }
}
 
export default Home;