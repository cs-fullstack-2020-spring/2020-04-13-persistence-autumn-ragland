let express = require('express');
let router = express.Router();
router.use(express.json());

"mongodb+srv://admin:C0d3Cr3w@cluster0-ueqkv.mongodb.net/cs_database_4?retryWrites=true&w=majority"

let productArray = [
    {
        'productID': 1,
        'productName': 'chair',
        'price': 25,
        'quantity': 100,
    },
    {
        'productID': 2,
        'productName': 'desk',
        'price': 100,
        'quantity': 50,
    },
    {
        'productID': 3,
        'productName': 'lamp',
        'price': 10,
        'quantity': 2000,
    }
]

// router.get('/test', (req,res) => {
//     res.send("Test");
// })

// get all products
router.get('/', (req,res) => {
    res.send(productArray);
});

// get product by ID
router.get('/:productID', (req,res) => {
    res.send(productArray[req.params.productID - 1]);
});

// create a product
router.post('/', (req,res) => {
    req.body.productID = productArray.length + 1
    res.send(req.body);
    productArray.push(req.body);
})

module.exports = router;