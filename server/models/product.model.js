import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title : {
        type : String,
    },
    image : {
        type : Array,
        default : []
    },
    category : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'category'
        }
    ],
    subCategory : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'subCategory'
        }
    ],
    author : {
        type : String,
        default : ""
    },
    description : {
        type : String,
        default : ""
    },
    publicationDate : {
        type : String,
        default : ""  
    }
},{
    timestamps : true
})

//create a text index
productSchema.index({
    name  : "text",
    description : 'text'
},{
    name : 10,
    description : 5
})


const ProductModel = mongoose.model('product',productSchema)

export default ProductModel