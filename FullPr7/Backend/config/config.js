import { connect } from "mongoose";

connect("mongodb+srv://nicatmmab205:nijat205@af206.i3y14.mongodb.net/")
.then(()=>{
    console.log("connected");
})