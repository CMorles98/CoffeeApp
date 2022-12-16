import { Schema, model } from 'mongoose';
import { User } from '../../domain/user';

const UserSchema = new Schema<User>({
    email: {
        type: String,
        required: [true, 'email field is required'],
        unique: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isGoogleUser: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: [true,'name field is required']
        
    },
    password: {
        type: String,
        required: [true,'password field is required']
    },
    role: {
        type: String,
        required: true,
        default: 'READONLY_ROLE'
    },
});

UserSchema.methods.toJSON = function() {
    const { __v, password, _id, ...user  } = this.toObject();
    user.uid = _id;
    return user;
}

const User = model('User', UserSchema);

export {
    User
} 