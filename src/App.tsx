import React, {useEffect} from 'react';
import './App.module.scss';
import {useDispatch, useSelector} from 'react-redux'
import {getPizzaTH} from './store/redusers/mainReducer';
import {AppStateType} from './store/store';
import {Pizza} from './store/modules/modules';

function App() {

    // const dispatch = useDispatch();
    // const pizza = useSelector<AppStateType, Pizza>(state => state.main.pizza)
    // useEffect(() => {
    //     dispatch(getPizzaTH)
    // }, [])
    return (
        <div className="App">

            <header className="App-header">


            </header>
        </div>
    );
}

export default App;
