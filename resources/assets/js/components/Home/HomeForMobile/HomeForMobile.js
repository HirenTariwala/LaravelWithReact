import React from 'react';
import Loader from '../../Loader/Loader';
import {isTablet,isLandscapeMode} from '../../../common/detectMobileDevice';
import Item1Tab from './Item1Tab/Item1Tab';
import Item2Tab from './Item2Tab/Item2Tab';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";

class HomeForMobile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isTablet : isTablet(),
            activeTab:0
        }
    }

    _changeActivetab_ = (event,value) => {
        this.setState({activeTab:value});
    };

    _getTabContaint_(){
        const {isTablet,activeTab} = this.state;
        const LandscapeMode = isLandscapeMode();

        if(!LandscapeMode) {
            switch (activeTab) {
                case 0 :
                    return <Item1Tab isTablet={isTablet}/>;
                case 1 :
                    return <Item2Tab isTablet={isTablet}/>;
                default :
                    return <div>No Tab Found</div>;
            }
        }

        return <div>Please do your { isTablet ? 'tablet' : 'mobile' } Portrait mode</div>;
    }

    render(){
        const { isLoading } = this.props;
        const { activeTab } = this.state;
        return(
            <div>
            <AppBar position="static" color="default">
                <Tabs
                    value={activeTab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this._changeActivetab_}
                    fullWidth
                >
                    <Tab label="Item1" />
                    <Tab label="Item2"/>
                    <Tab label="Item3" />
                    <Tab label="Item4" />
                    <Tab label="Item5" />
                </Tabs>
            </AppBar>
                { isLoading ? <Loader/> : this._getTabContaint_() }
            </div>
        )
    }
    
}

export default HomeForMobile;