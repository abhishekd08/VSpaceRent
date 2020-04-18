const functions = require('firebase-functions');

 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });


exports.login = functions.https.onRequest((Request,Response) => {
    console.log("Login Request with Creds : ");
    console.log(JSON.stringify(Request.body))
    //console.log(Request.body.mail+" : "+Request.body.password)
});