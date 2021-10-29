const Product=require('../model/product');

exports.create = (req, res) => {
    // Validate request
    if(!req.body.productName||!req.body.images) {
        return res.status(400).send({
            message: "Name & image URL Required"
        });
    }

    // console.log(req.body)

    // Create a Note
    Product.create({
        productID : req.body.productID,
        productName : req.body.productName,
        brandName : req.body.brandName,
        specialPrice : req.body.specialPrice,
        MRP : req.body.MRP,
        offer : req.body.offer,
        images : req.body.images,
        productType : req.body.productType,
        details : req.body.details,
        constituents : req.body.constituents,
        soldby : req.body.soldby
    })

    .then(data => {
        res.send([data,{message: "Document inserted successfully!"}]);
    }).catch(err => {
        // console.log(err)
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    });
};

exports.edit = (req, res) => {
    // Validate request
    if(!req.body.productName||!req.body.images) {
        return res.status(400).send({
            message: "Name & image URL Required"
        });
    }

    // console.log(req.body)

    // Create a Note
    Product.findOneAndUpdate({
        productID : req.body.productID},
        {
        productName : req.body.productName,
        brandName : req.body.brandName,
        specialPrice : req.body.specialPrice,
        MRP : req.body.MRP,
        offer : req.body.offer,
        images : req.body.images,
        productType : req.body.productType,
        details : req.body.details,
        constituents : req.body.constituents,
        soldby : req.body.soldby
    })

    .then(data => {
        res.send([data,{message: "Document inserted successfully!"}]);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    });
};
exports.getProduct = (req,res) => {

    Product.findOne({productID:req.params.productID})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    })
}

exports.getProductByType = (req,res) => {

    Product.find({productType:req.params.productType})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    })
}

exports.getAllProducts = (req,res) => {

    Product.find()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    })
}



exports.sortAndFiter = (req,res) => {

    var reqQuery = {}
    if(!req.body.brandName[0]){
        reqQuery = {...req.query}
    } else {
        reqQuery = {...req.query, ...req.body}
    }


    delete reqQuery['sort']

    Product.find(reqQuery)
    .sort(req.query.sort)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    })
}

exports.search = (req,res) => {

    Product.find({ $text : {$search : req.body.query}})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    })
}