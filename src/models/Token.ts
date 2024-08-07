import mongoose, {Schema,Types, Document} from "mongoose";
export interface IToken extends Document {
    _id:string
    token:string
    user: Types.ObjectId
    createdAt: Date
}
const tokenSchema : Schema = new Schema({
    token:{
        type:String,
        required:true
    },
    user:{
        type:String,
        ref:'User'
    },
    expiresAt:{
        type: Date,
        default: Date.now(),
        expires:'10m'
    }
})
const Token = mongoose.model<IToken>('Token',tokenSchema)
export default Token