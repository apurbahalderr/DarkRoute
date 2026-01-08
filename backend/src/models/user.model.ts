import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  phone: string;
  password: string;
  role: 'farmer' | 'vet' | 'admin';
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ['farmer', 'vet', 'admin'],
      default: 'farmer'
    }
  },
  { timestamps: true }
);

export default model<IUser>('User', UserSchema);
