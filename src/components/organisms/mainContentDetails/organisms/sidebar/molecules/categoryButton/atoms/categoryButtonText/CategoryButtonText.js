import styles from './categoryButtonText.module.css'

function CategoryButtonText(props){
    const {categoryButtonTextInnerHtml} = props
    return (
        <p className={styles.categoryButtonText}>
            {categoryButtonTextInnerHtml}
        </p>
    )
}

export default CategoryButtonText;