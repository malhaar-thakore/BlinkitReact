function NewCost(props){
    const {newCostInnerContent} = props;

    return(
        <strong>
            Rs. {newCostInnerContent}
        </strong>
    )
}

export default NewCost