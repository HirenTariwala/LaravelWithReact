import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper/Paper";

class Item1Tab extends React.Component{

    constructor(props){
        super(props)
    }


    _getContainForTablet_(isTablet){
        return(
            <Grid alignItems='center' container spacing={8}>
                <Grid item xs={7}>
                    <Paper style={{height:'400px'}}>{+isTablet}</Paper>
                </Grid>
                <Grid item xs={5}>
                    <Grid container direction='column' spacing={8}>
                        <Grid item><Paper style={{height:'196px'}}></Paper></Grid>
                        <Grid item><Paper style={{height:'196px'}}></Paper></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper style={{height:'200px'}}></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{height:'200px'}}></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{height:'200px'}}></Paper>
                </Grid>
            </Grid>
        )
    }

    _getContainForMobile_(isTablet){
        return(
            <Grid alignItems='center' container spacing={8}>
                <Grid item xs={7}>
                    <Paper style={{height:'400px'}}>{+isTablet}</Paper>
                </Grid>
                <Grid item xs={5}>
                    <Grid container direction='column' spacing={8}>
                        <Grid item><Paper style={{height:'196px'}}></Paper></Grid>
                        <Grid item><Paper style={{height:'196px'}}></Paper></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper style={{height:'200px'}}></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{height:'200px'}}></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{height:'200px'}}></Paper>
                </Grid>
            </Grid>
        )
    }

    render(){
        const { isTablet } = this.props;
        return(
            <div style={{padding:'5px'}}>
                { isTablet ? this._getContainForTablet_(isTablet) : this._getContainForMobile_(isTablet)}
            </div>
        )
    }
}

export default Item1Tab;