import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';


class Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <AppBar position="static" color='default'>
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography align='right' variant="title" color="textSecondary" >
                        Mobile
                    </Typography>
                </Toolbar>

            </AppBar>
        )
    }
}

export default Header;