import mongoose,{Document, Schema, PopulatedDoc, Types} from "mongoose";
import { IUser } from "./UserModel";
// PopulatedDoc<IUser & Document>, //tiene que haber otro modelo para usuarios
export interface IDate extends Document{
    clientName:string,
    date:string,
    time:string,
    service:string
}

const DateSchema: Schema = new Schema({
   
    clientName:{
        type:String,
        required:true
    },
    date:{
        type: String,
        required:true,
    },
    time:{
        type: String,
        required:true,
    },
    service:{
        type:String,
        required:true
    }

})
const Date = mongoose.model<IDate>('Date', DateSchema)
export default Date