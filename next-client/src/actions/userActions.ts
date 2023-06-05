"use server";
import { collection, getDocs, addDoc } from "firebase/firestore";
import db from "./firestore";

export const getUsers = async (query?: { username: string }) => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));

    return querySnapshot;
  } catch (err) {
    throw err;
  }
};

export const addUser = async (user: { username: string; password: string }) => {
  try {
    const userDoc = await addDoc(collection(db, "users"), user);

    return userDoc;
  } catch (err) {
    throw err;
  }
};
