import React from 'react'
import  SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor(){
        super();
        this.state= {
            collections : SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div>
                {
                     collections.map(({id,...otherSectionProps})=> <CollectionPreview key={id} {...otherSectionProps}/>)
                }
            </div>
        )
    }
}

export default ShopPage;