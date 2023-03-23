import React, { Fragment } from 'react';
import "../../../styles/style.css";
import sidebarData from "../../../data/sidebarCategories";
import CategoryButton from "./CategoryButton"

function SidebarContents(){
    return (
        <div id='sidebar'>
            {sidebarData.map((category) => (
                <CategoryButton category={category}/>
            ))}
        </div>
    )   
}

export default SidebarContents;