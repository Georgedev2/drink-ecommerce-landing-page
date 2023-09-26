import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: [true, 'Please provide a username'],
    unique: true,
  },
  password:{
    type:String,
    require: [true, 'Please provide a password'],
  },
  isVerified:{
    type:Boolean,
    default:false

  }
  ,isAdmin:{
    type:Boolean,
    default:false
  }
});

const User = mongoose.models.users || mongoose.model('User', userSchema);// if we have the model already in the database use it else create now one
export default User;
//model('User', userSchema) takes two parameter the first is the schema name, and the second is the schemal