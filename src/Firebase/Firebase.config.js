import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyASJ_aoXgTB5Vq5C8qEDfiKnqMeWDYyv3U",
    authDomain: "import-export-hub-d128e.firebaseapp.com",
    projectId: "import-export-hub-d128e",
    storageBucket: "import-export-hub-d128e.firebasestorage.app",
    messagingSenderId: "815463067551",
    appId: "1:815463067551:web:e103442a5d5428848757aa"
};
const app = initializeApp(firebaseConfig);
export default app