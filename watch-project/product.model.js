import mongoose from "mongoose";
const product_schema=new mongoose.Schema({
    productname:{type:String},
    categoryname:{type:String},
    description:{type:String},
    price:{type:String},
    stock:{
        
        size_15:{type:Number},
        size_16:{type:Number},
        size_17:{type:Number},
        size_18:{type:Number},
    },
  
    banner:{type:String},
    images:{type:Object}
})
export default mongoose.model.products||mongoose.model("products",product_schema)