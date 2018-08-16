import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class HomeForMobile extends React.Component{

    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <Paper>
                <Tabs
                    value={0}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={()=>{}}
                    fullWidth
                >
                    <Tab label="Item1" />
                    <Tab label="Item2"/>
                    <Tab label="Item3" />
                    <Tab label="Item4" />
                    <Tab label="Item5" />
                </Tabs>
            </Paper>
        )
    }
    
}

export default HomeForMobile;