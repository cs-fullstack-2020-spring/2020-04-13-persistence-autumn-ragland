let express = require('express');
let router = express.Router();
router.use(express.json());

let ProductCollection = require('../models/ProductSchema');

// // test data
// let productArray = [
//     {
//         'productID': 1,
//         'productName': 'chair',
//         'price': 25,
//         'quantity': 100,
//     },
//     {
//         'productID': 2,
//         'productName': 'desk',
//         'price': 100,
//         'quantity': 50,
//     },
//     {
//         'productID': 3,
//         'productName': 'lamp',
//         'price': 10,
//         'quantity': 2000,
//     }
// ]

// router.get('/test', (req,res) => {
//     res.send("Test");
// })

// get all products
router.get('/', (req,res) => {
    // res.send(productArray);
});

// get product by ID
router.get('/:productID', (req,res) => {
    // res.send(productArray[req.params.productID - 1]);
});

// create a product
router.post('/', (req,res) => {
    // req.body.productID = productArray.length + 1
    // res.send(req.body);
    // productArray.push(req.body);
    ProductCollection.create({
        productID : req.body.productID,
        productName : req.body.productName,
        price : req.body.price,
        quantity : req.body.quantity
    });
    res.send("Product Created");
})

module.exports = router;