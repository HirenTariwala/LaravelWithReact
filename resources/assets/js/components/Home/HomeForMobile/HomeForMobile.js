import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CircularProgress from "@material-ui/core/CircularProgress";
import purple from "@material-ui/core/colors/purple";

class HomeForMobile extends React.Component{

    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div>
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
                <div style={{position:'fixed',height:'100%',width:'100%'}}>
                    <div style={{position:'relative',top:'40%',textAlign:'center'}}>
                        <CircularProgress style={{color:purple[200]}} thickness={2}/>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default HomeForMobile;