import PropTypes from 'prop-types'
import React, { useState } from 'react';
import getProductsFilteredByCategory from './card/productsFilteredByCategoryData'
import Card from './card/Card'

function ProductsToBeDisplayed(props){
    const productsFilteredByCategory = getProductsFilteredByCategory(props.categoryType);
    const [productsFilteredByCategoryDataStatus, setproductsFilteredByCategoryDataStatus] = useState('waiting');

    const isproductsFilteredByCategoryDataRetrievedPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productsFilteredByCategory) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000)
    })
    
    isproductsFilteredByCategoryDataRetrievedPromise.
        then(() => setproductsFilteredByCategoryDataStatus('retrieved')).
        catch(() => setproductsFilteredByCategoryDataStatus('failed'));
        if (productsFilteredByCategoryDataStatus == 'waiting') {
            return (
                <p>
                    Loading Products
                </p>
            )
        }
    
        else if (productsFilteredByCategoryDataStatus == 'retrieved') {
            return(
                <div className='productsToBeDisplayed'>
                    {productsFilteredByCategory.map((currentProduct) => (
                        <Card key={currentProduct.id} currentProduct={currentProduct}/>
                    ))}
                </div>
            )
        }
    
        else {
            return (
                <p>
                    Failed to load Products
                </p>
            )
        }
    
}

ProductsToBeDisplayed.propTypes = {
    currentProduct: PropTypes.object
}

export default ProductsToBeDisplayed