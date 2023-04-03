import PropTypes from 'prop-types';
import NewCost from './atoms/newCost';
import OldCost from './atoms/oldCost';
import styles from './cost.module.css'

function Cost(props){
    const {newCostInnerContent, oldCostInnerContent} = props
    
    return(
        <div className={styles.cost}>
            <NewCost newCostInnerContent={newCostInnerContent}/>
            <OldCost oldCostInnerContent={oldCostInnerContent}/>
        </div>
    )
}

Cost.propTypes = {
    newCostInnerContent: PropTypes.number,
    oldCostInnerContent: PropTypes.number
}

export default Cost;