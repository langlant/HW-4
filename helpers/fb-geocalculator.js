import * as firebase from 'firebase';
import 'firebase/database';
import { firebaseConfig } from './fb-credentials';

export function initGeoCalcDB()
{
    firebase.initializeApp(firebaseConfig);
}

export function writeData(key,data){
    firebase.database.ref(`calculatorData/${key}`).set(data);
}

export function setupDataListener(key){
    firebase
        .database()
        .ref(`calculatorData/${key}`)
        .on('value', (snapshot) => {
            console.log('data listener fires up with: ', snapshot);
        });
}

export default fb-geocalculator;