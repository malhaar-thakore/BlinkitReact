import PropTypes from 'prop-types'
import ProductsToBeDisplayed from './ProductsToBeDisplayed'

function CenterBar(props){
    const {category} = props
    return (
        <div className='centerBar'>
            <ProductsToBeDisplayed categoryType={category}/>
        </div>
    )
}

CenterBar.propTypes = {
    categoryType: PropTypes.string
}

export default CenterBar;