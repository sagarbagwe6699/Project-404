import React, { Component } from 'react';
import {Drawer, List, ListItem, ListItemText, MuiThemeProvider, createMuiTheme, Divider, ListItemIcon} from '@material-ui/core';
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
                color: "#fff"
            }
        },
        MuiPaper:{
            root:{
                backgroundColor: "#0277bd"
            }
        }
    }
  });

class MyDrawer extends Component {
    state = { 
        isOpen: true
     }
    render() { 
        return ( 
            <React.Fragment>
                <MuiThemeProvider theme={theme} >
                <Drawer open={this.state.isOpen} variant="persistent" style={{marginTop: 64}} >
                        <ListItem style={{marginTop: 10}} >
                            <ListItemText primary="Admin" />
                        </ListItem>
                        <Divider variant="middle" />
                
                    <List style={{marginTop: 60}} >
                        <ListItem button style={{paddingTop: 10}} >
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Admin" />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem button style={{paddingTop: 10}} >
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Admin" />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem button style={{paddingTop: 10}} >
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Admin" />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem button style={{paddingTop: 10}} >
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