/* 
*Steps to use firebase
1. Create a project on console.firebase.google.com
2.npm install fireBase
3.Register web app in firebase
4.copy firebase init with config from firebase project settings
5. export default app
6.import app firebase init.js into your app.js
7.import getAuth from firebase/auth and create auth = getAuth(app)
8.turn on google authentication (firebase>authentication>enable google sign in)
9.create google provider
10.use signInWithPopup and pass auth and provider
11.handle then and catch error (if error)
*/