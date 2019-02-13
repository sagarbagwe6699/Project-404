import React, { Component } from 'react';
import {Drawer, List, ListItem, ListItemText, MuiThemeProvider, createMuiTheme, Divider, ListItemIcon, IconButton} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';

const theme = createMuiTheme({
    overrides:{
        MuiListItem:{
            gutters:{
                paddingLeft: 40,
                paddingRight: 100
            }
        },
        MuiTypography:{
            subheading:{
                color: "#fff",
                fontSize:""
            }
        },
        MuiPaper:{
            root:{
                // backgroundColor: "rgba(2,119,189,0.6)"
                 backgroundColor:"rgba(0, 32, 51, 0.75)"
            }
        },
        MuiListItem:{
            button:{
             "&:focus":{
               backgroundColor:"rgba(2,2,2,0.8)"
             } 
            }
          },
        MuiListItemIcon:{
            root:{
                color:"#fff"
            }
        }
    },
    palette: {
        primary: {
        //   light: '#757ce8',
          main: '#212121',
        //   dark: '#002884',
        //   contrastText: '#fff',
        },
        secondary: {
        //   light: '#ff7961',
          main: '#fff',
        //   dark: '#ba000d',
        //   contrastText: '#000',
        },
      }
  });


class MyDrawer extends Component {
    state = { 
        isOpen: true
     }
     dater=()=>{
        var d = new Date(); // for now
        var x=parseInt(d.getHours());
        console.log(x)
        var str=(x>20&&x<4)?("Good Night"):( (x>=4&&x<11)?("Good Morning"):( (x>=11&&x<=3)?("Good Afternoon"):("Good Evening") ) )
        return str+","
     }
    render() { 
        return ( 
            <React.Fragment>
                <MuiThemeProvider theme={theme} >
                <Drawer open={this.state.isOpen} variant="persistent" style={{marginTop: 64}} >
                        <ListItem style={{marginTop: 70,paddingBottom:1}} >
                            {/* <ListItemText style={{fontSize: 30}} primary={this.dater()} /> */}
                            <ListItemText style={{fontSize: 30}} primary="Admin" />
                            
                        </ListItem>
                        {/* <ListItem style={{marginTop: 1,paddingTop:1}} >
                            <ListItemText style={{fontSize: 30}} primary={"sanjay"} /> {/*his.props.name*/}
                        {/* </ListItem> */}
                        <Divider variant="middle" />
                
                    <List style={{marginTop: 10}} >
                        <ListItem button style={{paddingTop: 10}} onClick={()=>{this.props.clickerr("1")}}>
                            <ListItemIcon ><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem button style={{paddingTop: 10}} onClick={()=>{this.props.clickerr("2")}}>
                            <ListItemIcon  ><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem button style={{paddingTop: 10}} onClick={()=>{this.props.clickerr("3")}}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Admin" />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem button style={{paddingTop: 10}} onClick={()=>{this.props.clickerr("4")}}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Admin" />
                        </ListItem>
                        <Divider variant="middle" />
                    </List>
                </Drawer>
                </MuiThemeProvider>
            </React.Fragment>
         );
    }
}
 
export default MyDrawer;