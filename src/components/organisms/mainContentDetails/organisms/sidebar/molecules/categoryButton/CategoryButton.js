import PropTypes from 'prop-types'
import CategoryButtonImage from './atoms/categoryButtonImage';
import CategoryButtonText from './atoms/categoryButtonText';
import styles from './categoryButton.module.css'

function CategoryButton(props){
    const {categoryImage, categoryText, categoryType} = props.category;
    //console.log(categoryType);
    const updateCategoryType = props.updateCategoryType

    

    return (
        <button className={styles.categoryButton} onClick={() => updateCategoryType(categoryType)}>
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