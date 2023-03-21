import SidebarContents from './sidebar/SidebarContents' 
import CenterBar from './centerBar/products/CenterBar'

function MainContentDetails(){
    return (
        <div id='mainContentDetails'>
            <SidebarContents />
            <CenterBar />
        </div>
    )
}

export default MainContentDetails;