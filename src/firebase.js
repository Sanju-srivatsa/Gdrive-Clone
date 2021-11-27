import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const app = firebase.initializeApp({
apiKey: "AIzaSyCRp-R9akbDMnwDzWPYIz1PGDt8nfFhB_g",
  authDomain: "auth-a7991.firebaseapp.com",
  databaseURL: "https://auth-a7991.firebaseio.com",
  projectId: "auth-a7991",
  storageBucket: "auth-a7991.appspot.com",
  messagingSenderId: "294832208882",
  appId: "1:294832208882:web:d254be3d8844a6606d496b"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app