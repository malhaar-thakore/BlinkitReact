import CategoryButtonImage from './CategoryButtonImage';
import CategoryButtonText from './CategoryButtonText';
import ProductsToBeDisplayed from '../centerBar/products/ProductsToBeDisplayed'

function CategoryButton(props){
    const {categoryImage, categoryText, categoryType} = props.category;

    return (
        <button className='sidebarButton' onClick={() => callComponentProductsToBeDisplayed(categoryType)}>
            <CategoryButtonImage categoryImageSrc={categoryImage}/>
            <CategoryButtonText categoryTextInnerHtml={categoryText}/>
        </button>
    )

    function callComponentProductsToBeDisplayed(categoryType){
            //console.log(categoryType);
            return(
                <ProductsToBeDisplayed categoryType={categoryType}/>
            )
    }
}

export default CategoryButton