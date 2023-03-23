const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    displayName:{
        type:String,
        
    },

    email:{type:String,unique:true},
    password:{type:String,required:true},
    mobileNumber:{type:String,required:true},
    companyName:{type:String,required:true},
    create_at:{type:Number, default:Date.now().valueOf()},
    updated_at:{type:Number,default:Date.now().valueOf()}

})

module.exports = mongoose.model('User',userSchema)
