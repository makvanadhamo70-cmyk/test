const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendNotification = functions.https.onCall(async (data, context) => {
    const { token, title, body, image, link } = data;
    const message = {
        token: token,
        notification: { title, body },
        android: { notification: { imageUrl: image } },
        webpush: { headers: { image: image }, notification: { title, body, image, click_action: link } },
        data: { link: link || '' }
    };
    await admin.messaging().send(message);
    return { success: true };
});
