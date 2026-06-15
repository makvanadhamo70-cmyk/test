importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAZrqHRFCh8udgS7__Aun7G5iQyi_iaMfk",
    authDomain: "battle-arena-main.firebaseapp.com",
    databaseURL: "https://battle-arena-main-default-rtdb.firebaseio.com",
    projectId: "battle-arena-main",
    storageBucket: "battle-arena-main.firebasestorage.app",
    messagingSenderId: "1066813367576",
    appId: "1:1066813367576:web:79b0f5c6470fa46f51ea6d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/logo.png',
        image: payload.notification.image || '',
        data: payload.data
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
