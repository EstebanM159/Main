import mongoose,{Document, Schema, PopulatedDoc, Types} from "mongoose";
export interface IUser extends Document {
    email:string
    password:string
    userName:string
    pic:string
    facebook_id:string
}

const UserSchema : Schema = new Schema({
    email:{
        type:String,
        require:true,
        lowercase:true,
        trim:true,
        unique:true
    },
    facebook_id:{
        type:String,
        default:null
    },

    password:{
        type:String,
        default:null,
        trim:true

    },
    userName:{
        type:String,
        require:true,
        
    },
    picture:{
            data:{
                height:{
                    type:Number
                },
                width:{
                    type:Number
                },
                url:{
                    type:String,
                    trim:true
                }
            }
    }
})

const User = mongoose.model<IUser>('User',UserSchema)
export default User