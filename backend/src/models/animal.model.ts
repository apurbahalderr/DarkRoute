import { Schema, model, Document, Types } from 'mongoose';

export interface IAnimal extends Document {
  tagId: string;
  species: string;
  breed?: string;
  owner: Types.ObjectId;
  biometricHash?: string;
  attendanceLogs?: Date[];
  createdAt: Date;
}

const AnimalSchema = new Schema<IAnimal>(
  {
    tagId: { type: String, required: true, unique: true },
    species: { type: String, required: true },
    breed: String,
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    biometricHash: String,
    attendanceLogs: [Date],
  },
  { timestamps: true }
);

export default model<IAnimal>('Animal', AnimalSchema);
