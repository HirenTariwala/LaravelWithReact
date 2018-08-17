import React from 'react';
import HomeForMobile from './HomeForMobile/HomeForMobile';
import HomeForDesktop from './HomeForDesktop/HomeForDesktop';
import Header from '../masterpage/Header';
import {MobileDevice} from '../../common/detectMobileDevice'

class Home extends React.Component{

    constructor(){
        super();
    }

    render(){
        const isMobile =  MobileDevice();
        return(
            <div>
                <Header {...this.props} isMobile={isMobile}/>
                { isMobile ? <HomeForMobile/> : <HomeForDesktop/> }
            </div>
        )
    }

}

export default Home;