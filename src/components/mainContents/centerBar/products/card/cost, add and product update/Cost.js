import PropTypes from 'prop-types'
import NewCost from './NewCost'
import OldCost from './OldCost'

function Cost(props){
    
    return(
        <div className='cost'>
            <NewCost newCostInnerContent={props.newCostInnerContent}/>
            <OldCost oldCostInnerContent={props.oldCostInnerContent}/>
        </div>
    )
}

Cost.propTypes = {
    newCostInnerContent: PropTypes.number,
    oldCostInnerContent: PropTypes.number
}

export default Cost;