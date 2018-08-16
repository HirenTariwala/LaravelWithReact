import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Search from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton';


class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {isMobile} = this.props;
        return(
            <AppBar position="static" color='default'>
                <Toolbar>
                    <Typography align='right' variant="title" color="textSecondary" >
                        MyWebSiteLogo
                    </Typography>
                    { isMobile && <IconButton style={{position:'fixed',right:'0px'}} aria-haspopup="true" ><Search/></IconButton>}
                </Toolbar>

            </AppBar>
        )
    }
}

export default Header;