import mongoose from "mongoose";


const whislist_schema=new mongoose.Schema({
    cust_id:{type:String},
    prod_id:{type:String},
    productname:{type:String},
    categoryname:{type:String},
    price:{type:String},
    size:{type:String},
    banner:{type:String}
})



export default mongoose.model.Wishlist||mongoose.model("wislist",whislist_schema);