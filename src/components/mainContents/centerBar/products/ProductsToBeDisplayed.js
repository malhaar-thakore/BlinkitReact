import getDisplayProductsData from '../../../../data/displayProductsData'
import Card from './card/Card'

function ProductsToBeDisplayed(props){
        console.log(props.categoryType);
    const displayProducts = getDisplayProductsData(props.categoryType);
    //console.log(displayProducts);
    return(
        <div id='productsToBeDisplayed'>
            {displayProducts.map((currentProduct) => (
                <Card currentProduct={currentProduct}/>
            ))}
        </div>
    )
}

export default ProductsToBeDisplayed