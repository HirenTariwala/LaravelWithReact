import React from 'react';
import HomeForMobile from './HomeForMobile/HomeForMobile';
import HomeForDesktop from './HomeForDesktop/HomeForDesktop';
import Header from '../masterpage/Header';
import {MobileDevice} from '../../common/detectMobileDevice'

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading:false
        }
    }

    render(){
        const { isLoading } = this.state;
        const isMobile =  MobileDevice();
        return(
            <div>
                <Header {...this.props} isMobile={isMobile}/>
                { isMobile ? <HomeForMobile isLoading={isLoading}/> : <HomeForDesktop isLoading={isLoading}/> }
            </div>
        )
    }

}

export default Home;