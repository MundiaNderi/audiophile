import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    cartData: {type: Object, default: {}}
}, {minimize:false}) // empty cart data will be created otherwise w/out
// minimize no cart data will be created


const userModel = mongoose.model.user || mongoose.model("user", userSchema)

export default userModel