import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDHV6-GxW-nRPzL8Yx_4Uh-rkGn-T9yK8Q",
  authDomain: "fmlgpt-d4e12.firebaseapp.com",
  projectId: "fmlgpt-d4e12",
  storageBucket: "fmlgpt-d4e12.appspot.com",
  messagingSenderId: "724859472653",
  appId: "1:724859472653:web:f8e3d2b8e3d2b8e3d2b8e3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);