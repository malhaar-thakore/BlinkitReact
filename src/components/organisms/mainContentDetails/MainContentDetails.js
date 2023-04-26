import PropTypes from 'prop-types'
import React from 'react';
import SidebarContents from './organisms/sidebar' 
import Products from './organisms/products'
import styles from './mainContentDetails.module.css';

// function MainContentDetails(){
//     const [category, setCategory] = useState('all');

//     return (
//         <div className='mainContentDetails'>
//             <SidebarContents updateCategoryType={setCategory}/>
//             <Products category={category}/>
//         </div>
//     )
// }

class MainContentDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {category: 'all'};
        this.updateCategoryType = this.updateCategoryType.bind(this);
    }

    updateCategoryType(newCategory) {
        this.setState({
            category: newCategory
        });
    }

    render() {
        return (
            <div className={styles.mainContentDetails}>
                <SidebarContents updateCategoryType={this.updateCategoryType}/>
                <Products category={this.state.category}/>
            </div>
        )
    }
}

MainContentDetails.propTypes = {
    updateCategoryType: PropTypes.func,
    category: PropTypes.string
}

export default MainContentDetails;