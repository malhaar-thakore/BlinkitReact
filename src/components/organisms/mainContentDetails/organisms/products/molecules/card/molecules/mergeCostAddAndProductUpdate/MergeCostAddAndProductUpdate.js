import PropTypes from 'prop-types';
import Cost from './molecules/cost';
import AddButtonOrMinusProductCountPlus from './molecules/addButtonOrMinusProductCountPlus';
import styles from './mergeCostAddAndProductUpdate.module.css';

function MergeCostAddAndProductUpdate(props){
    //console.log(props.otherCardDetails);
    const {id, newCost, oldCost, categories, productCount} = props.otherCardDetails;
    return (
        <div className={styles.mergeCostAddAndProductUpdate}>
            <Cost newCostInnerContent={newCost} oldCostInnerContent={oldCost}/>
            <AddButtonOrMinusProductCountPlus productId={id} productCount={productCount}/>
        </div>
    )
}

MergeCostAddAndProductUpdate.propTypes = {
    newCostInnerContent: PropTypes.number,
    oldCostInnerContent: PropTypes.number
}

export default MergeCostAddAndProductUpdate;