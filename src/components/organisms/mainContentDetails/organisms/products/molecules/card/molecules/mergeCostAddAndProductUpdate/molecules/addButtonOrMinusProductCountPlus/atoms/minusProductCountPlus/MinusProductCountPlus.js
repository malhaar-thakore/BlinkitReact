import styles from './minusProductCountPlus.module.css';
import { connect } from 'react-redux';
import { incrementProductCount, decrementProductCount } from '../../../../../../../../../../../../../redux/actions';

function MinusProductCountPlus(props){
    const { productCount } = props
    return(
        <div className={styles.minusProductCountPlus}>
            <button onClick={props.decrementProductCount}>
                -
            </button>
            <p>
                {productCount}
            </p>
            <button onClick={props.incrementProductCount}>
                +
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { productId } = ownProps
    return {
        incrementProductCount: () => dispatch(incrementProductCount(productId)),
        decrementProductCount: () => dispatch(decrementProductCount(productId))
    }
}

export default connect(null, mapDispatchToProps)(MinusProductCountPlus);