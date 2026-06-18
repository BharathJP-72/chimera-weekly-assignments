import razer from '../assets/products/razer-blackwidow-v3.jpg'
import logitech from '../assets/products/logitech-g502.jpg'
import sony from '../assets/products/sony-wh1000xm6.jpg'
import appleWatch from '../assets/products/apple-watch-series11.jpg'
import sandisk from '../assets/products/sandisk-ssd.jpg'
import marshall from '../assets/products/marshall-middleton.jpeg'


const products = [

    {
        id: 1,
        title: 'Razer BlackWidow V3',
        category: 'Keyboard',
        image: razer,
        price: 10999,
        rating: 4.7,
        discount: 15,
        inStock: true
    },

    {
        id: 2,
        title: 'Logitech G502 HERO',
        category: 'Mouse',
        image: logitech,
        price: 4999,
        rating: 4.8,
        discount: 12,
        inStock: true
    },

    {
        id: 3,
        title: 'Sony WH-1000XM6',
        category: 'Headphones',
        image: sony,
        price: 39990,
        rating: 4.9,
        discount: 8,
        inStock: true
    },

    {
        id: 4,
        title: 'Apple Watch Series 11',
        category: 'Wearables',
        image: appleWatch,
        price: 49900,
        rating: 4.8,
        discount: 5,
        inStock: false
    },

    {
        id: 5,
        title: 'SanDisk Portable SSD (1TB)',
        category: 'Storage',
        image: sandisk,
        price: 7499,
        rating: 4.9,
        discount: 20,
        inStock: true
    },

    {
        id: 6,
        title: 'Marshall Middleton',
        category: 'Audio',
        image: marshall,
        price: 29999,
        rating: 4.8,
        discount: 10,
        inStock: true
    }

]

export default products