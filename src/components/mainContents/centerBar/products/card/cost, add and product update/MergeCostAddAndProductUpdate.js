import PropTypes from 'prop-types'
import Cost from './Cost'
import AddButton from './AddButton'

function MergeCostAddAndProductUpdate(props){
    const {newCost, oldCost, categories, productCount} = props.otherCardDetails;
    return (
        <div className='costAdd'>
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