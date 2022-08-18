import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase";
import { getDatabase, ref, set, onValue } from "firebase/database";

import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

class DatabaseServices {
  realtimeDb;
  storageDb;
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.realtimeDb = getDatabase(app);
    this.storageDb = getStorage(app);
  }

  async addFeedback(feedback) {
    try {
      await set(ref(this.realtimeDb, "feedbacks/" + feedback.id), feedback);
      return {
        message: "feedback added",
        error: null,
      };
    } catch (err) {
      return {
        message: "feedback not added",
        error: err,
      };
    }
  }

  async getData(folder, callBack) {
    return onValue(ref(this.realtimeDb, `${folder}/`), (snapshot) => {
      if (snapshot.val()) {
        callBack(Object.values(snapshot.val()));
      } else {
        callBack(null);
      }
    });
  }

  async uploadFile(file, handleError, getUrl) {
    const imageRef = storageRef(this.storageDb, "covers/" + file.name);

    const uploadFile = uploadBytesResumable(imageRef, file);

    uploadFile.on(
      "state_changed",
      () => null,
      handleError,
      async () => {
        const url = await getDownloadURL(uploadFile.snapshot.ref);

        getUrl(url);
      }
    );
  }
}

const databaseServices = new DatabaseServices();

export default databaseServices;
