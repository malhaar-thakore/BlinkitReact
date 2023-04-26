import styles from './addButton.module.css';
import { connect } from 'react-redux';
import { incrementProductCount } from '../../../../../../../../../../../../../redux/actions';

function AddButton(props){
    const { incrementProductCount } = props;
    return(
        <button className={styles.addButton} onClick={incrementProductCount}>
            ADD
        </button>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        incrementProductCount : () => dispatch(incrementProductCount(ownProps.productId))
    }
}

export default connect(null, mapDispatchToProps)(AddButton);