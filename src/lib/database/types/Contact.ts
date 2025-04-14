import { ObjectId } from "mongodb";

export interface IContact {
  _id?: ObjectId;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "unread" | "read" | "replied";
  createdAt: Date;
  clerkId: string;
}
