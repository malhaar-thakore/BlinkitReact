import styles from './categoryButtonImage.module.css'

function CategoryButtonImage(props){
    const {categoryButtonImageSrc} = props
    return(
        <img className={styles.categoryButtonImage} src={categoryButtonImageSrc} />
    )
}

export default CategoryButtonImage;