import styles from './offer.module.css';

function Offer(props){
    const {offerInnerContent} = props;
    return (
        <div className={styles.offer}>
            <strong>
                {offerInnerContent}% OFF
            </strong>
        </div>
    )
}

export default Offer;