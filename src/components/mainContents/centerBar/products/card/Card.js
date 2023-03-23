import Offer from './Offer'
import Image from './Image'
import Source from './Source'
import Title from './Title'
import Quantity from './Quantity'
import MergeCostAddAndProductUpdate from './cost, add and product update/MergeCostAddAndProductUpdate'

function Card(props){
    const {offer, image, source, title, quantity, ...otherCardDetails} = props.currentProduct;
    return (
        <div className='card'>
            <Offer offerInnerContent={offer}/>
            <Image imageSource={image}/>
            <Source sourceInnerContent={source}/>
            <Title titleInnerContent={title}/>
            <Quantity quantityInnerContent={quantity}/>
            <MergeCostAddAndProductUpdate otherCardDetails={otherCardDetails}/>
        </div>
    )
}

export default Card;