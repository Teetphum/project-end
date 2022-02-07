const Category = require('../models/Category.js')


// Create/add Category
exports.create = async (req,res) => {
    const {categoryname} = req.body

    // validate
    if(!categoryname){
        return res.status(400).json({err:"category name is require!!"})
    }
    

    // save data
    const newCategory = new Category({categoryname});
    try {
        const saveCategory = await newCategory.save();
        res.status(200).json(saveCategory);
    } catch (err) {
        res.status(400).json({err:"Already Have This Category!!"})
    }

}

// Get All Category
exports.getAllcategory = async (req, res) => {
    Category.find({}).exec((err, categories) => {
        res.json(categories)
    })
}

exports.remove = async (req, res) => {
    const {_id} = await req.params
    Category.findOneAndRemove({_id}).exec((err, category) => {
        if(err){
            console.log(err);
        }
        res.json({
            message:"Delete Category Success!!"
        })
    })
}

exports.updateCategory = async (req,res) => {
    const {_id} = await req.params
}


// Get One Category
exports.getCategory = async (req, res) => {
    const {_id} = await req.params
    Category.findOne({_id}).exec((err, category) => {
        res.json(category)
    })
}


exports.updateCategory = async (req, res) => {
    const {_id} = await req.params

    const {categoryname} = await req.body

    Category.findOneAndUpdate({_id}, {categoryname}, {new:true})
    .exec((err, category)=>{
        if(err){
            console.log(err);
        }
        res.json(category)
    })

}