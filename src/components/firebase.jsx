import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: 'AIzaSyAHCc9vqZVLP0OvifhJ5vdO07r6P-r8RMk',
  authDomain: 'tpll-a9aea.firebaseapp.com',
  projectId: 'tpll-a9aea',
};

const app = initializeApp(firebaseConfig);
console.log("firebase connection done")

export default app;
