import React from 'react';
import {MobileDevice} from '../../common/detectMobileDevice';
import ProductDetailsForMobile from './ProductDetailsForMobile/ProductDetailsForMobile';
import ProductDetailsForDesktop from './ProductDetailsForDesktop/ProductDetailsForDesktop';

class ProductDetails extends React.Component{
    constructor(props){
        super(props)
    }

     render(){
        const isMobile = MobileDevice();
        return(
            <div>
                { isMobile ? <ProductDetailsForMobile/> : <ProductDetailsForDesktop/> }
            </div>
        )
     }

}

export default ProductDetails;