function CategoryButtonText(props){
    const {categoryButtonTextInnerHtml} = props
    return (
        <p className='sidebarText'>
            {categoryButtonTextInnerHtml}
        </p>
    )
}

export default CategoryButtonText;