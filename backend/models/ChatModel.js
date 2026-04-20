import mongoose from "mongoose"

const chatSchema = new mongoose.Schema({
    userId : mongoose.Schema.Types.ObjectId,
    message:String,
    response:String,

});
export  default mongoose.model("Chat",chatSchema);