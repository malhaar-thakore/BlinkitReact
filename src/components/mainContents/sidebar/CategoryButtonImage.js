function CategoryButtonImage(props){
    const {categoryButtonImageSrc} = props
    return(
        <img className='sidebarImage' src={categoryButtonImageSrc} />
    )
}

export default CategoryButtonImage;