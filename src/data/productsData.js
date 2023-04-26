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

function Product({id, offer, image, source, title, quantity, newCost, oldCost, categories, productCount}){
    this.offer = offer;
    this.image = image;
    this.source = source;
    this.title = title;
    this.quantity = quantity;
    this.newCost = newCost;
    this.oldCost = oldCost;
    this.categories = categories;
};

function createProducts(){
    productsData = {
        '1' : new Product({
            offer: 11, 
            image: 'images/potato-img.png', 
            source: 5, 
            title: 'New Potato(Aloo)', 
            quantity: '1 Kg', 
            newCost: 15, 
            oldCost: 17, 
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshVegetables,
            }),
        '2' : new Product({
            offer: 21,
            image: 'images/onion-img.png',
            source: 5, 
            title: 'Onion(Pyaz)',
            quantity: '1 Kg',
            newCost: 32,
            oldCost: 41,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshVegetables,
            }),

        '3' : new Product({
            offer: 10,
            image: 'images/carrot-img.jpeg', source: 5,
            title: 'Local Carrot',
            quantity: '500 g', 
            newCost: 17,
            oldCost: 19,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshVegetables,
            }),

        '4' : new Product({
            offer: 16,
            image: 'images/green-chilli-img.png',
            source: 5, 
            title: 'Green Chilli(Hari Mirch)',
            quantity: '100 g',
            newCost: 10,
            oldCost: 12,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshVegetables,
            }),

        '5' : new Product({
            offer: 21,
            image: 'images/hybrid-tomato.png',
            source: 5,
            title: 'Hybrid Tomato(Tamatar)',
            quantity: '1 Kg',
            newCost: 15,
            oldCost: 17, 
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshVegetables,
            }),

        '6' : new Product({
            offer: 17,
            image: 'images/cauliflower.jpeg',
            source: 5,
            title: 'Cauliflower',
            quantity: '500 g',
            newCost: 15,
            oldCost: 19,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshVegetables,
            }),
        
        '7' : new Product({
            offer: 11,
            image: 'images/potato-img.png',
            source: 5,
            title: 'Mango',
            quantity: '1 Kg',
            newCost: 15,
            oldCost: 17,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshFruits,
            }),

        '8' : new Product({
            offer: 21,
            image: 'images/onion-img.png',
            source: 5,
            title: 'Apple',
            quantity: '1 Kg',
            newCost: 32,
            oldCost: 41,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshFruits,
            }),

        '9' : new Product({
            offer: 10,
            image: 'images/carrot-img.jpeg',
            source: 5,
            title: 'Banana',
            quantity: '500 g',
            newCost: 17,
            oldCost: 19,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshFruits,
            }),

        '10' : new Product({
            offer: 16,
            image: 'images/green-chilli-img.png',
            source: 5,
            title: 'Grapes',
            quantity: '100 g',
            newCost: 10,
            oldCost: 12,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshFruits,
            }),

        '11' : new Product({
            offer: 21,
            image: 'images/hybrid-tomato.png',
            source: 5,
            title: 'Papaya',
            quantity: '1 Kg',
            newCost: 15,
            oldCost: 17,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshFruits,
            }),

        '12' : new Product({
            offer: 11,
            image: 'images/potato-img.png',
            source: 5,
            title: 'Broccoli',
            quantity: '1 Kg',
            newCost: 15,
            oldCost: 17,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.exotics,
            }),

        '13' : new Product({
            offer: 21,
            image: 'images/onion-img.png',
            source: 5,
            title: 'Shiitake Mushroom',
            quantity: '1 Kg',
            newCost: 32,
            oldCost: 41,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.exotics,
            }),

        '14' : new Product({
            offer:10,
            image: 'images/carrot-img.jpeg',
            source: 5,
            title: 'Red Capsicum',
            quantity: '500 g',
            newCost: 17,
            oldCost: 19,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.exotics,
            }),

        '15' : new Product({
            offer: 16,
            image: 'images/green-chilli-img.png',
            source: 5,
            title: 'King Trumpet Mushroom',
            quantity: '100 g',
            newCost: 10,
            oldCost: 12,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.exotics,
            }),

        '16' : new Product({
            offer: 11,
            image: 'images/potato-img.png',
            source: 5,
            title: 'Amla',
            quantity: '1 Kg',
            newCost: 15,
            oldCost: 17,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.seasonal,
            }),

        '17' : new Product({
            offer: 21,
            image: 'images/onion-img.png',
            source: 5,
            title: 'Nagpur Orange',
            quantity: '1 Kg',
            newCost: 32,
            oldCost: 41,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.seasonal,
            }),

        '18' : new Product({
            offer: 10,
            image: 'images/carrot-img.jpeg',
            source: 5,
            title: 'Groundnut',
            quantity: '500 g',
            newCost: 17,
            oldCost: 19,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.seasonal,
            }),

        '19' : new Product({
            offer: 11,
            image: 'images/potato-img.png',
            source: 5,
            title: 'Organic Radish',
            quantity: '1 Kg',
            newCost: 15,
            oldCost: 17,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.organicHydroponic,
            }),

        '20' : new Product({
            offer: 21,
            image: 'images/onion-img.png',
            source: 5,
            title: 'Hydroponic Baby Corn',
            quantity: '1 Kg',
            newCost: 32,
            oldCost: 41,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.organicHydroponic,
            }),

        '21' : new Product({
            offer: 11,
            image: 'images/potato-img.png',
            source: 5,
            title: 'Sweet Corn - Packet',
            quantity: '1 Kg',
            newCost: 15,
            oldCost: 17,
            categories: PRODUCTS_CATEGORY_TYPES.card + ' ' + PRODUCTS_CATEGORY_TYPES.all + ' ' + PRODUCTS_CATEGORY_TYPES.freshlyCutSprouts,
            })
        }
};

createProducts();

export default productsData;

