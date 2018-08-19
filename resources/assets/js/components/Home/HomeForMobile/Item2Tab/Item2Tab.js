import React from 'react';

class Item2Tab extends React.Component{

    constructor(props){
        super(props)
    }

    _getContainForTablet_(){
        return(
            <div>Item2 Tab Tablet</div>
        )
    }

    _getContainForMobile_(){
        return(
           <div>Item2 Tab Mobile</div>
        )
    }

    render(){
        const {isTablet} = this.props;
        return(
            <div style={{padding:'5px'}}>
                { isTablet ? this._getContainForTablet_() : this._getContainForMobile_()}
            </div>
        )

    }
}

export default Item2Tab;