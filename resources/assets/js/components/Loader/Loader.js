import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import purple from "@material-ui/core/colors/purple";

class Loader extends React.Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <div style={{position:'fixed',height:'100%',width:'100%'}}>
                <div style={{position:'relative',top:'40%',textAlign:'center'}}>
                    <CircularProgress style={{color:purple[200]}} thickness={2}/>
                </div>
            </div>
        )
    }
}

export default Loader;