import mongoose from "mongoose";


const category_schema=new mongoose.Schema({
    categoryname:{type:String},
    Description:{type:String}

})



export default mongoose.model.Category||mongoose.model("Category",category_schema);