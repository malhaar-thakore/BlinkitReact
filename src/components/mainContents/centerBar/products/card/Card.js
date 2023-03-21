import Offer from './Offer'
import Image from './Image'

function Card(props){
    const {offer, image, source, title, quantity, newCost, oldCost, categories, productCount} = props.currentProduct
    return (
        <div className='card'>
            <Offer offerInnerContent={offer}/>
            <Image imageSource={image}/>
        </div>
    )
}

export default Card;