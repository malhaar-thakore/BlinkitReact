import AddButton from './atoms/addButton';
import MinusProductCountPlus from './atoms/minusProductCountPlus'

function AddButtonOrMinusProductCountPlus(props){
    const { productId, productCount } = props;
    //console.log(productCount);
    function renderAddButton(){
        //console.log('add button rendered');
        return(
            <AddButton productId={productId}/>
        )
    }

    function renderMinusProductCountPlus(){
        return(
            <MinusProductCountPlus productId={productId} productCount={productCount}/>
        )
    }
    if(productCount === 0)
    {
        //console.log('product count 0 verified');
        return renderAddButton();
    }
    else
        return renderMinusProductCountPlus();
}

export default AddButtonOrMinusProductCountPlus;