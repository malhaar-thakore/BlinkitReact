import getDisplayProductsData from '../../../../data/displayProductsData'
import Card from './card/Card'

function ProductsToBeDisplayed(props){
    const displayProducts = getDisplayProductsData(props.categoryType);
    return(
        <div id='productsToBeDisplayed'>
            {displayProducts.map((currentProduct) => (
                <Card currentProduct={currentProduct}/>
            ))}
        </div>
    )
}

export default ProductsToBeDisplayed