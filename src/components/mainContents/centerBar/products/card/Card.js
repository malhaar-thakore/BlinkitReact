import Offer from './Offer'

function Card(props){
    const {offer, image, source, title, quantity, newCost, oldCost, categories, productCount} = props.currentProduct
    return (
        <div className='card'>
            <Offer offerInnerContent={offer}/>
        </div>
    )
}

export default Card;