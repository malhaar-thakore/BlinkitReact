import potatoImg from '../images/potato-img.png';
import freshFruitsImg from '../images/fresh-fruits.jpeg';
import organicHydroponicImg from '../images/organic-hydroponic.jpeg';
import freshlyCutSproutsImg from '../images/freshly-cut-sprouts.webp';

const SIDEBAR_CATEGORY_TYPES = {
    all : 'all',
    freshVegetables : 'freshVegetables',
    freshFruits : 'freshFruits',
    exotics : 'exotics',
    seasonal : 'seasonal',
    organicHydroponic : 'organicHydroponic',
    freshlyCutSprouts : 'freshlyCutSprouts'
}

let sidebarData = [];

function SidebarData(categoryImage, categoryText, categoryType){
    this.categoryImage = categoryImage;
    this.categoryText = categoryText;
    this.categoryType = categoryType;
}

function createSidebarData(){
    sidebarData = [
        new SidebarData(potatoImg, 'All', SIDEBAR_CATEGORY_TYPES.all),
        new SidebarData(potatoImg, 'Fresh Vegetables', SIDEBAR_CATEGORY_TYPES.freshVegetables),
        new SidebarData(freshFruitsImg, 'Fresh Fruits', SIDEBAR_CATEGORY_TYPES.freshFruits),
        new SidebarData(potatoImg, 'Exotics', SIDEBAR_CATEGORY_TYPES.exotics),
        new SidebarData(potatoImg, 'Seasonal', SIDEBAR_CATEGORY_TYPES.seasonal),
        new SidebarData(organicHydroponicImg, 'Organic & Hydroponic', SIDEBAR_CATEGORY_TYPES.organicHydroponic),
        new SidebarData(freshlyCutSproutsImg, 'Freshly Cut & Sprouts', SIDEBAR_CATEGORY_TYPES.freshlyCutSprouts)
    ]
}

createSidebarData();

export default sidebarData;