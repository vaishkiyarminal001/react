const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
image : String,
title : String,
price : String,
description : String,
category : String

})
const UserModule = mongoose.model("product", UserSchema); 


const connection = mongoose.connect("mongodb://127.0.0.1:27017/store");



module.exports = {
    connection, 
    UserModule,
};