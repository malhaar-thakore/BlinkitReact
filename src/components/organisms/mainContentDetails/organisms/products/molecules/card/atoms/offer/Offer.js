import styles from './offer.module.css';

function Offer(props){
    return (
        <div className={styles.offer}>
            <strong>
                {props.offerInnerContent}% OFF
            </strong>
        </div>
    )
}

export default Offer;