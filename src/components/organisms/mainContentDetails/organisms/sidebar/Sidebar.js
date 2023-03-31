import PropTypes from 'prop-types'
import React, { useState } from 'react';
import styles from './sidebar.module.css'
import sidebarData from "../../../../../data/sidebarCategories";
import CategoryButton from "./molecules/categoryButton"

// function Sidebar(props) {
//     const {updateCategoryType} = props;

//     const [sidebarDataStatus, setSidebarDataStatus] = useState('waiting');

//     const isSidebarDataRetrievedPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sidebarData) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 1000)
//     })

//     isSidebarDataRetrievedPromise.
//         then(() => setSidebarDataStatus('retrieved')).
//         catch(() => setSidebarDataStatus('failed'));

//     if (sidebarDataStatus == 'waiting') {
//         return (
//             <p>
//                 Loading Sidebar Data
//             </p>
//         )
//     }

//     else if (sidebarDataStatus == 'retrieved') {
//         return (
//             <div className='sidebar'>
//                 {sidebarData.map((category) => (
//                     <CategoryButton key={category.categoryType} category={category} updateCategoryType={updateCategoryType} />
//                 ))}
//             </div>
//         )
//     }

//     else {
//         return (
//             <p>
//                 Failed to load Sidebar Data
//             </p>
//         )
//     }
// }

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDataStatus: 'waiting'
        }
    }

    componentDidMount() {
        const isSidebarDataRetrievedPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (sidebarData) {
                    resolve();
                }
                else {
                    reject();
                }
            }, 1000)
        })
    
        isSidebarDataRetrievedPromise.
            then(() => this.setSidebarDataStatus('retrieved')).
            catch(() => this.setSidebarDataStatus('failed'));
    }

    setSidebarDataStatus(currentStatus) {
        this.setState({
            sidebarDataStatus: currentStatus
        });
    }

    render() {
        if (this.state.sidebarDataStatus == 'waiting') {
            return (
                <p className={styles.sidebar}>
                    Loading Sidebar Data
                </p>
            )
        }
    
        else if (this.state.sidebarDataStatus == 'retrieved') {
            return (
                <div className={styles.sidebar}>
                    {sidebarData.map((category) => (
                        <CategoryButton key={category.categoryType} category={category} updateCategoryType={this.props.updateCategoryType} />
                    ))}
                </div>
            )
        }
    
        else {
            return (
                <p>
                    Failed to load Sidebar Data
                </p>
            )
        }
    }
}

Sidebar.propTypes = {
    category: PropTypes.object,
    updateCategoryType: PropTypes.func
}

export default Sidebar;