function Offer(props){
    return (
        <div className='offer'>
            <strong>
                {props.offerInnerContent}% OFF
            </strong>
        </div>
    )
}

export default Offer;