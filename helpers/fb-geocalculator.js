import * as firebase from 'firebase';
import 'firebase/database';
import { firebaseConfig } from './fb-credentials';

export function initGeoCalcDB()
{
    firebase.initializeApp(firebaseConfig);
}

export function writeData(key,data){
    firebase.database.ref(`currentHistory/${key}`).set(data);
}

export function setupDataListener(updateItems) {
    firebase
    .database()
    .ref(`calculatorData/`)
    .on('value', (snapshot) => {
        console.log('data listener fire up with : ', snapshot);
        const newArr = [];
        if(snapshot?.val()){
            const items = snapshot.val();
            Object.keys(items).map((key, index) => {
                console.log(key, '||', index, '||', items[key]);
                newArr.push({ ...items[key], id: key });
              });
        
            updateItems(newArr);
        }else {
            updateItems([]);
        }
    });
}
