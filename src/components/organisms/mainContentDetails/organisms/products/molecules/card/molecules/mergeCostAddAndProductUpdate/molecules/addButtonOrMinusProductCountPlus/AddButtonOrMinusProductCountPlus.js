import AddButton from './atoms/addButton';
import MinusProductCountPlus from './atoms/minusProductCountPlus';
import { connect } from 'react-redux';
import { getProductCount } from '../../../../../../../../../../../redux/selectors'

function AddButtonOrMinusProductCountPlus(props){
    const { productId, productCount } = props;
    //console.log(productCount);
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
        return renderAddButton();
    }
    else
        return renderMinusProductCountPlus();
}



const mapStateToProps = (state, ownProps) => {
    const { productId } = ownProps;
    return {
        productCount : getProductCount(state, productId)
    }
}

export default connect(mapStateToProps, null)(AddButtonOrMinusProductCountPlus);
