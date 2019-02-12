import {createMuiTheme} from '@material-ui/core'

export const theme = createMuiTheme({
    overrides:{
        MuiListItem:{
            gutters:{
                paddingLeft: 60,
                paddingRight: 60
            }
        },
        MuiTypography:{
            subheading:{
                color: "#fff"
            }
        }
    }
  });