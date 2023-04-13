import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { getProductsFilteredByCategory } from '../../../../../redux/selectors';
import { connect } from 'react-redux';
import Card from './molecules/card';
import styles from './products.module.css';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsFilteredByCategoryDataStatus: 'waiting'
        }
    }

    componentDidMount() {
        const { productsFilteredByCategory } = this.props;
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
            then(() => this.setproductsFilteredByCategoryDataStatus('retrieved')).
            catch(() => this.setproductsFilteredByCategoryDataStatus('failed'));
    }

    setproductsFilteredByCategoryDataStatus(currentStatus) {
        this.setState({
            productsFilteredByCategoryDataStatus: currentStatus
        });
    }

    renderLoadingMessage() {
        return (
            <p className={styles.products}>
                Loading Products
            </p>
        );
    }

    renderProducts() {
        const { productsFilteredByCategory } = this.props;
        return (
            <div className={styles.products}>
                {productsFilteredByCategory.map((currentProduct) => (
                    <Card key={currentProduct.id} currentProduct={currentProduct} />
                ))}
            </div>
        );
    }

    renderFailureMessage() {
        return (
            <p>
                Failed to load Products
            </p>
        );
    }

    render() {
        const { productsFilteredByCategoryDataStatus } = this.state;

        if (productsFilteredByCategoryDataStatus === 'waiting')
            return this.renderLoadingMessage();

        if (productsFilteredByCategoryDataStatus === 'retrieved')
            return this.renderProducts();

        return this.renderFailureMessage();
    }
}

Products.propTypes = {
    productsFilteredByCategory: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        productsFilteredByCategory: getProductsFilteredByCategory(state, ownProps.category)
    };
}

export default connect(mapStateToProps, null)(Products);