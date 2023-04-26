import PropTypes from 'prop-types';
import Cost from './molecules/cost';
import AddButtonOrMinusProductCountPlus from './molecules/addButtonOrMinusProductCountPlus';
import styles from './mergeCostAddAndProductUpdate.module.css';

function MergeCostAddAndProductUpdate(props){
    //console.log(props.otherCardDetails);
    const { newCost, oldCost, categories } = props.otherCardDetails;
    const productId = props.productId;
    return (
        <div className={styles.mergeCostAddAndProductUpdate}>
            <Cost newCostInnerContent={newCost} oldCostInnerContent={oldCost}/>
            <AddButtonOrMinusProductCountPlus productId={productId}/>
        </div>
    )
}

MergeCostAddAndProductUpdate.propTypes = {
    newCostInnerContent: PropTypes.number,
    oldCostInnerContent: PropTypes.number
}

export default MergeCostAddAndProductUpdate;