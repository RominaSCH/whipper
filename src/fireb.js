import firebase from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
//이름은 REACT_APP_ ~~ 로 지어야 하고 Gitjub 보안을 위할 뿐
//build 시 결국 보일 수 밖에 없게 된다.
//.env 는 최상위 폴더에 위치해야한다.


firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();