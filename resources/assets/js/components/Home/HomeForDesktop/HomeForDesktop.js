import React from 'react';
import Loader from '../../Loader/Loader'

class HomeForDesktop extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        const { isLoading } = this.props;
        return(
            <div>
                { isLoading && <Loader/>}
            </div>
        )
    }

}

export default HomeForDesktop;