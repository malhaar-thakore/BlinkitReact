import PropTypes from 'prop-types'
import React, { useState } from 'react';
import SidebarContents from './sidebar/SidebarContents' 
import CenterBar from './centerBar/products/CenterBar'

function MainContentDetails(){
    const [category, setCategory] = useState('all');

    return (
        <div className='mainContentDetails'>
            <SidebarContents updateCategoryType={setCategory}/>
            <CenterBar category={category}/>
        </div>
    )
}

MainContentDetails.propTypes = {
    updateCategoryType: PropTypes.func,
    category: PropTypes.string
}

export default MainContentDetails;