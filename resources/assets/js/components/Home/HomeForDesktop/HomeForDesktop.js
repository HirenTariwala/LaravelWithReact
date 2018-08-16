import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchBar from 'material-ui-search-bar';

class HomeForDesktop extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <div style={{padding:'10px',marginTop:'10px'}}>
                    <Grid container spacing={16}>
                        <Grid item sm={8}>
                            <Paper style={{padding:'8px'}}>
                                <h4><b>Galaxy s9 | s9+</b></h4>
                            </Paper>
                        </Grid>
                        <Grid item sm={4}>
                            <SearchBar
                                onChange={() => console.log('onChange')}
                                onRequestSearch={() => console.log('onRequestSearch')}
                                style={{
                                    margin: '0 auto',
                                    maxWidth: 800
                                }}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }

}

export default HomeForDesktop;