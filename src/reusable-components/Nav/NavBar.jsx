import React, { Component } from 'react';
import {AppBar, Toolbar, Typography, IconButton, createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
        palette: {
            primary: {
              light: '#757ce8',
              main: '#01579b',
              dark: '#002884',
              contrastText: '#fff',
            },
            secondary: {
              light: '#ff7961',
              main: '#01579b',
              dark: '#ba000d',
              contrastText: '#000',
            },
          }
  });

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <MuiThemeProvider theme={theme}>
                <AppBar position="absolute" style={{zIndex: 1201}} >
                <Toolbar color="primary" >
                    <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                    Admin
                    </Typography>
                </Toolbar>
                </AppBar>
            </MuiThemeProvider>
         );
    }
}
 
export default NavBar;