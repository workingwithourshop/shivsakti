import { Collection } from 'mongodb';
import { getDb } from '../db';
import { User } from '../types/User';

export function getUserCollection(): Collection<User> {
  const db = getDb();
  if (!db) {
    throw new Error("Database not connected");
  }
  return db.collection<User>('users');
}