
const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const contactSchema = new Schema({
    name:{type:String,required:true},
    lastname:{type:String},
    phone:{type:String},
    address:{type:String},
    email:{type:String,required:true},
    date: {type:Date,default:Date.now}
})

module.exports = model('Contact',contactSchema)
