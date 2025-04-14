import { ObjectId } from 'mongodb';

export interface IUser extends Document {
  _id?: ObjectId; // Optional for creation, assigned by MongoDB
  clerkId: string;
  email: string;
  firstName?: string; // Optional
  lastName?: string;  // Optional
  imageUrl?: string;  // Optional
  createdAt?: Date;
  updatedAt?: Date;
  role: UserRole;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}
