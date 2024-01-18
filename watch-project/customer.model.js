import mongoose from "mongoose";


const customer_schema=new mongoose.Schema({
  
    name:{type:String,
    required:[true,"Username is required"],
    },
    phone:{type:String,
        required:[true,"Username is required"]
       
    },
    email:{type:String,
        required:[true,"Username is required"],
        },
    location:{type:String,
            required:[true,"Username is required"]
           
        },
    address:{type:String,
            required:[true,"Username is required"],
            },
    pincode:{type:String,
                required:[true,"Username is required"]
               
            }  ,
    profilephoto:{type:String,
                required:[true,"Username is required"],
                },
    password:{type:String,
                    required:[true,"Username is required"]
                   
                }   ,
                

})



export default mongoose.model.customer||mongoose.model("customer",customer_schema);