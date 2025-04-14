import { Collection } from 'mongodb';
import { getDb } from '../db';
import { IContact } from '../types/Contact';

export function getContactCollection(): Collection<IContact> {
  const db = getDb();
  if (!db) {
    throw new Error("Database not connected");
  }
  return db.collection<IContact>('contacts');
}