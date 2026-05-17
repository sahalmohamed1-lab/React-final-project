import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

export const testFirebaseWrite = async () => {
    console.log("function started");
    try {
        console.log("trying Firestore write...");
        await addDoc(collection(db, "test"), {
            message: "Firebase is working!",
            time: new Date()
        });
        console.log("Firestore working!");
    } catch (error) {
        console.error("Firebase error:", error);
    }
};