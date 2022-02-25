import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyCbGvpAxqoiKUSfie-RNkoHZ5WuBLu7YcU",
      authDomain: "fir-pj-6e8cb.firebaseapp.com",
      projectId: "fir-pj-6e8cb",
      storageBucket: "fir-pj-6e8cb.appspot.com",
      messagingSenderId: "530081385396",
      appId: "1:530081385396:web:a763635e90b5535e6700e1",
      measurementId: "G-VGB9VNYWFP"
    }
  )
}

export default firebase