import PropTypes from 'prop-types'
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

Card.propTypes = {
    offerInnerContent: PropTypes.number,
    image: PropTypes.string,
    sourceInnerContent: PropTypes.number,
    titleInnerContent: PropTypes.string,
    quantityInnerContent: PropTypes.string,
    otherCardDetails: PropTypes.array
}

export default Card;