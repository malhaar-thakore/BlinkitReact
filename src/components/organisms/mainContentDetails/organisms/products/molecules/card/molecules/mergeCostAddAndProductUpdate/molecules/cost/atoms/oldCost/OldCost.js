function OldCost(props){
    const {oldCostInnerContent} = props;

    return (
        <p>
            Rs. {props.oldCostInnerContent}
        </p>
    )
}

export default OldCost