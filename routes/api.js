// reference express module
let express = require('express');
// create router
let router = express.Router();
// json middleware
router.use(express.json());

// reference Product Model
let ProductCollection = require('../models/ProductSchema');

// // TEST DATA
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

// test route
// router.get('/test', (req,res) => {
//     res.send("Test");
// })

// get all products
router.get('/', (req,res) => {
    // res.send(productArray);
    ProductCollection.find(
        {}, (error, result) => {
            error ? res.send(error) : res.send(result)
        }
    )
});

// get product by ID
router.get('/:productID', (req,res) => {
    // res.send(productArray[req.params.productID - 1]);
    ProductCollection.findOne(
        {productID : req.params.productID}, (error, result) => {
            error ? res.send(error) : res.send(result)
        }
    )
});

// get product by unique ID
router.get('/ID/:productID', (req,res) => {
    // res.send(productArray[req.params.productID - 1]);
    ProductCollection.findById(req.params.productID, (error, result) => {
        error ? res.send(error) : res.send(result)}
        );
});

// create a product
router.post('/', (req,res) => {
    // req.body.productID = productArray.length + 1
    // res.send(req.body);
    ProductCollection.create(req.body);
    res.send(`${req.body.productName} Created`);
})

// export routes
module.exports = router;