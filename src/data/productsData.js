const PRODUCTS_CATEGORY_TYPES = {
    all : 'all',
    freshVegetables : 'freshVegetables',
    freshFruits : 'freshFruits',
    exotics : 'exotics',
    seasonal : 'seasonal',
    organicHydroponic : 'organicHydroponic',
    freshlyCutSprouts : 'freshlyCutSprouts',
    card: 'card'
};

let productsData = [];

function Product({offer, image, source, title, quantity, newCost, oldCost, categories, productCount}){
    this.offer = offer;
    this.image = image;
    this.source = source;
    this.title = title;
    this.quantity = quantity;
    this.newCost = newCost;
    this.oldCost = oldCost;
    this.categories = categories;
    this.productCount = productCount
};

function createProducts(){
    productsData = [
        new Product({
            offer: 11, 
            image: 'images/potato-img.png', 
            source: 5, 
            title: 'New Potato(Aloo)', 
            quantity: '1 Kg', 
            newCost: 15, 
            oldCost: 17, 
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshVegetables, 
            productCount: 0, 
            }),
        new Product({
            offer: 21,
            image: 'images/onion-img.png',
            source: 5, 
            title: 'Onion(Pyaz)',
            quantity: '1 Kg',
            newCost: 32,
            oldCost: 41,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshVegetables,
            productCount: 0,
            }),

        new Product({
            offer: 10,
            image: 'images/carrot-img.jpeg', source: 5,
            title: 'Local Carrot',
            quantity: '500 g', 
            newCost: 17,
            oldCost: 19,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshVegetables,
            productCount: 0,
            }),

        new Product({
            offer: 16,
            image: 'images/green-chilli-img.png',
            source: 5, 
            title: 'Green Chilli(Hari Mirch)',
            quantity: '100 g',
            newCost: 10,
            oldCost: 12,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshVegetables,
            productCount: 0,
            }),

        new Product({
            offer: 21,
            image: 'images/hybrid-tomato.png',
            source: 5,
            title: 'Hybrid Tomato(Tamatar)',
            quantity: '1 Kg',
            newCost: 15,
            oldCost: 17, 
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshVegetables,
            productCount: 0,
            }),

        new Product({
            offer: 17,
            image: 'images/cauliflower.jpeg',
            source: 5,
            title: 'Cauliflower',
            quantity: '500 g',
            newCost: 15,
            oldCost: 19,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshVegetables,
            productCount: 0,
            }),
        
        new Product({
            offer: 11,
            image: 'images/potato-img.png',
            source: 5,
            title: 'Mango',
            quantity: '1 Kg',
            newCost: 15,
            oldCost: 17,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshFruits,
            productCount: 0,
            }),

        new Product({
            offer: 21,
            image: 'images/onion-img.png',
            source: 5,
            title: 'Apple',
            quantity: '1 Kg',
            newCost: 32,
            oldCost: 41,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshFruits,
            productCount: 0,
            }),

        new Product({
            offer: 10,
            image: 'images/carrot-img.jpeg',
            source: 5,
            title: 'Banana',
            quantity: '500 g',
            newCost: 17,
            oldCost: 19,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshFruits,
            productCount: 0,
            }),

        new Product({
            offer: 16,
            image: 'images/green-chilli-img.png',
            source: 5,
            title: 'Grapes',
            quantity: '100 g',
            newCost: 10,
            oldCost: 12,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshFruits,
            productCount: 0,
            }),

        new Product({
            offer: 21,
            image: 'images/hybrid-tomato.png',
            source: 5,
            title: 'Papaya',
            quantity: '1 Kg',
            newCost: 15,
            oldCost: 17,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshFruits,
            productCount: 0,
            }),

        new Product({
            offer: 11,
            image: 'images/potato-img.png',
            source: 5,
            title: 'Broccoli',
            quantity: '1 Kg',
            newCost: 15,
            oldCost: 17,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.exotics,
            productCount: 0,
            }),

        new Product({
            offer: 21,
            image: 'images/onion-img.png',
            source: 5,
            title: 'Shiitake Mushroom',
            quantity: '1 Kg',
            newCost: 32,
            oldCost: 41,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.exotics,
            productCount: 0,
            }),

        new Product({
            offer:10,
            image: 'images/carrot-img.jpeg',
            source: 5,
            title: 'Red Capsicum',
            quantity: '500 g',
            newCost: 17,
            oldCost: 19,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.exotics,
            productCount: 0,
            }),

        new Product({
            offer: 16,
            image: 'images/green-chilli-img.png',
            source: 5,
            title: 'King Trumpet Mushroom',
            quantity: '100 g',
            newCost: 10,
            oldCost: 12,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.exotics,
            productCount: 0,
            }),

        new Product({
            offer: 11,
            image: 'images/potato-img.png',
            source: 5,
            title: 'Amla',
            quantity: '1 Kg',
            newCost: 15,
            oldCost: 17,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.seasonal,
            productCount: 0,
            }),

        new Product({
            offer: 21,
            image: 'images/onion-img.png',
            source: 5,
            title: 'Nagpur Orange',
            quantity: '1 Kg',
            newCost: 32,
            oldCost: 41,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.seasonal,
            productCount: 0,
            }),

        new Product({
            offer: 10,
            image: 'images/carrot-img.jpeg',
            source: 5,
            title: 'Groundnut',
            quantity: '500 g',
            newCost: 17,
            oldCost: 19,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.seasonal,
            productCount: 0,
            }),

        new Product({
            offer: 11,
            image: 'images/potato-img.png',
            source: 5,
            title: 'Organic Radish',
            quantity: '1 Kg',
            newCost: 15,
            oldCost: 17,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.organicHydroponic,
            productCount: 0,
            }),

        new Product({
            offer: 21,
            image: 'images/onion-img.png',
            source: 5,
            title: 'Hydroponic Baby Corn',
            quantity: '1 Kg',
            newCost: 32,
            oldCost: 41,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.organicHydroponic,
            productCount: 0,
            }),

        new Product({
            offer: 11,
            image: 'images/potato-img.png',
            source: 5,
            title: 'Sweet Corn - Packet',
            quantity: '1 Kg',
            newCost: 15,
            oldCost: 17,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshlyCutSprouts,
            productCount: 0,
            })
    ]
};

createProducts();

export default productsData;

