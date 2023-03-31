import PropTypes from 'prop-types';
import React, { useState } from 'react';
import getProductsFilteredByCategory from './productsFilteredByCategoryData';
import Card from './molecules/card';
import styles from './products.module.css';

class Products extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props.category);
        // console.log(this.props.category);
        this.productsFilteredByCategory = getProductsFilteredByCategory(props.category);
        this.state = {
            productsFilteredByCategoryDataStatus: 'waiting'
        }
    }

    componentDidMount() {
        const isproductsFilteredByCategoryDataRetrievedPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.productsFilteredByCategory) {
                    resolve();
                }
                else {
                    reject();
                }
            }, 1000)
        })

        isproductsFilteredByCategoryDataRetrievedPromise.
            then(() => this.setproductsFilteredByCategoryDataStatus('retrieved')).
            catch(() => this.setproductsFilteredByCategoryDataStatus('failed'));
    }

    setproductsFilteredByCategoryDataStatus(currentStatus) {
        this.setState({
            productsFilteredByCategoryDataStatus: currentStatus
        });
    }


    render() {
        //console.log(this.props.category);
        this.productsFilteredByCategory = getProductsFilteredByCategory(this.props.category);
        if (this.state.productsFilteredByCategoryDataStatus == 'waiting') {
            return (
                <p className={styles.products}>
                    Loading Products
                </p>
            )
        }

        else if (this.state.productsFilteredByCategoryDataStatus == 'retrieved') {
            return (
                <div className={styles.products}>
                    {this.productsFilteredByCategory.map((currentProduct) => (
                        <Card key={currentProduct.id} currentProduct={currentProduct} />
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
}

Products.propTypes = {
    currentProduct: PropTypes.object
}

export default Products