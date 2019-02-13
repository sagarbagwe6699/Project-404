import React, { Component } from 'react';
import {AppBar, Toolbar, Typography, IconButton, createMuiTheme, MuiThemeProvider,Badge,MenuItem,Menu} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';

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
          },
        });

  const styles = theme => ({
    margin: {
      margin: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 3,
      display:'flex',
    },
  });
  

class NavBar extends Component {
    state = { clicked:["Dashboard","Profile","Admin","Admin"] , open: true}

    signin=()=>{
      if(this.props.clicked==undefined)
        return "DashBoard"
      else
        return this.state.clicked[this.props.clicked-1]
    }

    render() { 
        return ( 
            <MuiThemeProvider theme={theme}>
                <AppBar position="absolute" style={{zIndex: 1201}} >
                <Toolbar color="primary" >
               {/*<IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                  </IconButton>*/}
                    <Typography style={{flexGrow:1}} variant="h6" color="inherit">
                      {this.signin()}
                      {console.log(this.signin())}
                      {console.log(this.props)}
                    </Typography>
                    <div style={{display:"flex"}}>
                    <IconButton color="inherit">
                      <Badge style={styles.margin} badgeContent={99} color="primary">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <IconButton style={styles.margin} color="inherit">
                        <AccountCircle />
                        <Typography variant="subtitle" color="inherit">{this.props.name}</Typography>
                    </IconButton>
                 {/* //   <Menu
                  //   id="simple-menu"
                  //   // anchorEl={anchorEl}
                  //   open={this.state.open}
                  //   onClose={this.handleClose}
                  // >
                  //   <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  //   <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  //   <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                 // </Menu>*/}
                    </div>
                </Toolbar>
                </AppBar>
            </MuiThemeProvider>
         );
    }
}
 
export default NavBar;