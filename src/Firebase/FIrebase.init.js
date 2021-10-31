import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initializeAuhentication = ()=> {
     initializeApp(firebaseConfig);
}
export default initializeAuhentication;