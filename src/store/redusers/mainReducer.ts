import {Pizza} from '../modules/modules';
import firebase from 'firebase/compat';

type InitialState = {
    pizza: Pizza
}

const initialState: InitialState = {
    pizza: {
        picture:'',
        name: '',
        additives: [],
        composition: [],
        size:
            [{
                name: '',
                size: 0,
                dough:
                    [
                        {tin: 0, traditional: 0}
                    ]
            }
            ]
    }
}

export const mainReducer = (state = initialState, action: any): InitialState => {
    switch (action.type) {
        case  'dodo/GET_PIZZA': {
            return {...state, pizza: action.pizza}
        }
        default:
            return state
    }
}


export const actions = {
    getPizza: (pizza: firebase.database.Reference) => ({type: 'dodo/GET_PIZZA', pizza: pizza}),
}


export const getPizzaTH = (dispatch: any) => {
    debugger
    const db = firebase.database();
    const name = db.ref('diablo')
    name.on('value', elem => dispatch(actions.getPizza((elem.val()))));
}