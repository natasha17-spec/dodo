import firebase from 'firebase/compat';
const db = firebase.database();
const name = db.ref('diablo')
debugger
export const apiDodo = {
    getPizza: ()=>{
        return db.ref('diablo').on('value', elem => elem.val());
    }
}


