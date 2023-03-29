import PropTypes from 'prop-types'
import CategoryButtonImage from './CategoryButtonImage';
import CategoryButtonText from './CategoryButtonText';

function CategoryButton(props){
    const {categoryImage, categoryText, categoryType} = props.category;
    const updateCategoryType = props.updateCategoryType

    return (
        <button className='sidebarButton' onClick={() => updateCategoryType(categoryType)}>
            <CategoryButtonImage categoryButtonImageSrc={categoryImage}/>
            <CategoryButtonText categoryButtonTextInnerHtml={categoryText}/>
        </button>
    )

}

CategoryButton.propTypes = {
    categoryImageSrc: PropTypes.string,
    categoryTextInnerHtml: PropTypes.string
}

export default CategoryButton