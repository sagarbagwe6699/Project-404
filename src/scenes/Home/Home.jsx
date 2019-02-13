import React, { Component } from 'react';
import {Typography, Grid} from '@material-ui/core';
import MyDrawer from './Drawer/Drawer';
import MyCard from '../../reusable-components/Card/Cards';
import NavBar from '../../reusable-components/Nav/NavBar';

class Home extends Component {
    state = { clickdata:"1",
                data:null}
    clickerr=(clickdata)=>{
        this.setState({
            clickdata
        })
    }
    componentWillMount(){
        console.log(this.props.data)
        const {data}=this.props
        this.setState({
            data
        })
    }
    render() { 
        console.log(this.state)
        return ( 
            <div id="newbg">
                <NavBar clicked={this.state.clickdata} name={this.state.data.fname}/>
                <MyDrawer clickerr={this.clickerr} name={this.state.data.fname}/>
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