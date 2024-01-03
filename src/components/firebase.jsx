// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// import dotenv from 'dotenv';
// dotenv.config();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   // ... other config properties
// };

// const app = initializeApp(firebaseConfig);
// const firebaseAuth = getAuth(app);

// export default firebaseAuth;


import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: 'AIzaSyAHCc9vqZVLP0OvifhJ5vdO07r6P-r8RMk',
  authDomain: 'tpll-a9aea.firebaseapp.com',
  projectId: 'tpll-a9aea',
};

const app = initializeApp(firebaseConfig);
console.log("firebase connection done")

export default app;
