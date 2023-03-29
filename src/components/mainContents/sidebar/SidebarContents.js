import PropTypes from 'prop-types'
import React, { useState } from 'react';
import "../../../styles/style.css";
import sidebarData from "../../../data/sidebarCategories";
import CategoryButton from "./CategoryButton"

function SidebarContents(props) {
    const {updateCategoryType} = props;

    const [sidebarDataStatus, setSidebarDataStatus] = useState('waiting');

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
        then(() => setSidebarDataStatus('retrieved')).
        catch(() => setSidebarDataStatus('failed'));

    if (sidebarDataStatus == 'waiting') {
        return (
            <p>
                Loading Sidebar Data
            </p>
        )
    }

    else if (sidebarDataStatus == 'retrieved') {
        return (
            <div className='sidebar'>
                {sidebarData.map((category) => (
                    <CategoryButton key={category.categoryType} category={category} updateCategoryType={updateCategoryType} />
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

SidebarContents.propTypes = {
    category: PropTypes.object,
    updateCategoryType: PropTypes.func
}

export default SidebarContents;