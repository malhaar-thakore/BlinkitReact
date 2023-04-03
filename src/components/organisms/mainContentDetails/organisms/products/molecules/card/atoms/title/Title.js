function Title(props){
    const {titleInnerContent} = props

    return (
            <strong className='cardTitle'>
                {titleInnerContent}
            </strong>
    )
}

export default Title;