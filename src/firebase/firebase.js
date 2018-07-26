import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBtbQB_LHk6fh43YHwdH1L9fzLRJIx2grk",
    authDomain: "expensify-bc66f.firebaseapp.com",
    databaseURL: "https://expensify-bc66f.firebaseio.com",
    projectId: "expensify-bc66f",
    storageBucket: "expensify-bc66f.appspot.com",
    messagingSenderId: "58255659148"
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log('child_removed:', snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log('child_changed:', snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log('child_added:', snapshot.key, snapshot.val());
});

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: -1000
// });


// database.ref('notes/-LIKgPiK0QCROmIoNXt_').update({
//     body: 'Buy food'
// });

// database.ref('notes').push({
//     title: 'Courses Topics',
//     body: 'Angular'
// });

// const firebaseNotes = {
//     notes: {
//         12: {
//             title: 'First note',
//             body: 'this is my note'
//         },
//         71234: {
//             title: 'Another note',
//             body: 'this is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'this is my note'
// }, {
//     id: '71234',
//     title: 'Another note',
//     body: 'this is my note'
// }];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// database.ref().update({
//     name: 'King'
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref("age").set(29);
// }, 3000);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 6000);

// setTimeout(() => {
//     database.ref("age").set(30);
// }, 9000);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });
    
// database.ref().set({
//     name: 'Kam, Dongki',
//     age: 26,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Seoul',
//         country: 'ROK'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Data is updated');
// }).catch((e) => {
//     console.log('Failed to update', e);
// });

// database.ref("isSingle").set(null)
//     .then(() => {
//         console.log('Data is removed');
//     }).catch((e) => {
//         console.log('Failed to remove data', e);
//     });
