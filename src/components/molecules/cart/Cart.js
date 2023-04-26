import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartItems } from '../../../redux/selectors';
import ProductCount from '../cart/atoms/productCount';
import ProductTitle from '../cart/atoms/productTitle';

function Cart(props) {
    const { cartItems } = props;
    const productIds = Object.keys(cartItems);
    console.log(cartItems);
    return (
        <div>
        {
            productIds.map((productId) => (
                <div>
                    <ProductTitle key={productId} productTitle = {cartItems[productId].productTitle}/>
                    <ProductCount key={productId} productCount = {cartItems[productId].productCount}/>
                </div>
            ))
        }
        <Link to='/'>Back to products</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: getCartItems(state)
    }
}

export default connect(mapStateToProps, null)(Cart)