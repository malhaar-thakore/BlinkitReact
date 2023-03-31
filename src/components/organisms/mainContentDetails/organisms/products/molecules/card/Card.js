import PropTypes from 'prop-types';
import Offer from './atoms/offer';
import Image from './atoms/image';
import Source from './atoms/source';
import Title from './atoms/title';
import Quantity from './atoms/quantity';
import MergeCostAddAndProductUpdate from './molecules/mergeCostAddAndProductUpdate';
import styles from './card.module.css';

function Card(props){
    const {offer, image, source, title, quantity, ...otherCardDetails} = props.currentProduct;
    return (
        <div className={styles.card}>
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