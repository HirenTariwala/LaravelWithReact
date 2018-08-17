import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace'
import SearchBar from "material-ui-search-bar";
import {MobileDevice} from '../../common/detectMobileDevice'

class Search extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        if(!MobileDevice()){
            this.props.history.push('/');
        }
    }

    _backToHome_(){
        this.props.history.push('/');
    }

    render(){
        return(
            <AppBar position="static" color='default'>
                <Toolbar>
                    <IconButton onClick={()=>{this._backToHome_()}}>
                        <KeyboardBackspace/>
                    </IconButton>
                    <SearchBar style={{width:'100%',heigth:'100%'}}/>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Search;