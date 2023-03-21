import CategoryButtonImage from './CategoryButtonImage';
import CategoryButtonText from './CategoryButtonText';
import ProductsToBeDisplayed from '../centerBar/products/ProductsToBeDisplayed'

function CategoryButton(props){
    const {categoryImage, categoryText, categoryType} = props.category;

    function callComponentProductsToBeDisplayed(categoryType){
        return <ProductsToBeDisplayed categorytype={categoryType}/>;
    }

    return (
        <button className='sidebarButton' onclick={() => callComponentProductsToBeDisplayed(categoryType)}>
            <CategoryButtonImage categoryImageSrc={categoryImage}/>
            <CategoryButtonText categoryTextInnerHtml={categoryText}/>
        </button>
    )
}

export default CategoryButton