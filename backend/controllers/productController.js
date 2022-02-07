const Product = require('../models/Product.js')

//create/add Product
exports.create = async (req,res) => {
    //const {bookname, publisher, writer, publishyear, tel, contact, desc, price, img, category} = req.body
    const chagepath = await req.body.img.replace("C:\\fakepath\\", "");

    const bookname = await req.body.bookname;
    const publisher = await req.body.publisher;
    const writer = await req.body.writer;
    const publishyear = await req.body.publishyear;
    const tel = await req.body.tel;
    const contact = await req.body.contact;
    const desc = await req.body.desc;
    const price = await req.body.price;
    const img = chagepath;
    const category = await req.body.category;

    

    //validate
    switch (true) {
        case !bookname:
            return res.status(400).json({err:"bookname is require!!"});
            break;
        case !publisher:
            return res.status(400).json({err:"publisher is require!!"});
            break;
        case !writer:
            return res.status(400).json({err:"writer is require!!"});
            break;
        case !publishyear:
            return res.status(400).json({err:"publishyear is require!!"});
            break;
        case !desc:
            return res.status(400).json({err:"description is require!!"});
            break;
        case !price:
            return res.status(400).json({err:"price is require!!"});
            break;
        case !img:
            return res.status(400).json({err:"img is require!!"});
            break;
    
    }

    // save data
    const newProduct = new Product({bookname, publisher, writer, publishyear, tel, contact, desc, price, img, category});
    try {
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct);
    } catch (err) {
        res.status(400).json({err:"Already Have This Book!!"})
    }


}

// Get All Products
exports.getAllproducts = async (req, res) => {
    Product.find({}).exec((err, products) => {
        res.json(products)
    })
}

// Get One Product
exports.singleProduct = async (req, res) => {
    const {_id} = await req.params
    Product.findOne({_id}).exec((err, product) => {
        res.json(product)
    })
}

// Delete Product
exports.remove = async (req, res) => {
    const {_id} = await req.params
    Product.findOneAndRemove({_id}).exec((err, category) => {
        if(err){
            console.log(err);
        }
        res.json({
            message:"Delete Product Success!!"
        })
    })
}

// Update Product
exports.updateProduct = async (req, res) => {
    const {_id} = await req.params

    const chagepath = await req.body.img.replace("C:\\fakepath\\", "");

    const bookname = await req.body.bookname;
    const publisher = await req.body.publisher;
    const writer = await req.body.writer;
    const publishyear = await req.body.publishyear;
    const tel = await req.body.tel;
    const contact = await req.body.contact;
    const desc = await req.body.desc;
    const price = await req.body.price;
    const img = chagepath;
    const category = await req.body.category;

    Product.findOneAndUpdate({_id}, {bookname, publisher, writer, publishyear, tel, contact, desc, price, img, category}, {new:true})
    .exec((err, product)=>{
        if(err){
            console.log(err);
        }
        res.json(product)
    })

}


// Get Products By Category
exports.getCateproducts = async (req, res) => {
    const {_id} = await req.params
    Product.find({ category: `${_id}` }).exec((err, products) => {
        res.json(products)
    })
}


// Get Products By Search Bookname
exports.getBySearch = async (req, res) => {
    const {bookname} = await req.params
    const name = new RegExp(bookname, 'i');

    Product.find({ bookname: name }).exec((err, products) => {
        res.json(products)
    })
}