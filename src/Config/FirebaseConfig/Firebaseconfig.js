import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAoRQ9j56TUueywtecb6q1rD-fjs7Q-lwM",
  authDomain: "hackathon-new-48494.firebaseapp.com",
  projectId: "hackathon-new-48494",
  storageBucket: "hackathon-new-48494.appspot.com",
  messagingSenderId: "826211428566",
  appId: "1:826211428566:web:078bf0d4010c5a097a8177",
  measurementId: "G-5XSRLVL6BR"
};

const app = initializeApp(firebaseConfig);

export { app };
