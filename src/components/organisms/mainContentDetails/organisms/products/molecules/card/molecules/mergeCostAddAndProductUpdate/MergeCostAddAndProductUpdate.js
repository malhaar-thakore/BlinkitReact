import PropTypes from 'prop-types';
import Cost from './molecules/cost';
import AddButton from './atoms/addButton';
import styles from './mergeCostAddAndProductUpdate.module.css';

function MergeCostAddAndProductUpdate(props){
    const {newCost, oldCost, categories, productCount} = props.otherCardDetails;
    return (
        <div className={styles.mergeCostAddAndProductUpdate}>
            <Cost newCostInnerContent={newCost} oldCostInnerContent={oldCost}/>
            <AddButton/>
        </div>
    )
}

MergeCostAddAndProductUpdate.propTypes = {
    newCostInnerContent: PropTypes.number,
    oldCostInnerContent: PropTypes.number
}

export default MergeCostAddAndProductUpdate;