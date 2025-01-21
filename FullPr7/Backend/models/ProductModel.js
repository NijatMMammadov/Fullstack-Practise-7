import { model, Schema } from "mongoose";

let ProductSchema=new Schema({
    name:String,
    title:String,
    desc:String,
    price:Number,
    image:String
})

export let ProductModel= model ("products",ProductSchema)