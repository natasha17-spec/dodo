import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Pizza} from 'src/store/modules/modules';
import {AppStateType} from 'src/store/store';
import PizzaItem from 'src/components/main/PizzaItem/PizzaItem';
import {getPizzaTH} from 'src/store/redusers/mainReducer';

import classes from './PizzaContainer.module.scss'

const PizzaContainer = () => {
    const dispatch = useDispatch();
    const pizza = useSelector<AppStateType, Pizza>(state => state.main.pizza)
    useEffect(() => {
        dispatch(getPizzaTH)
    }, [])

    return (
        <div className={classes['pizza-container']}>
            <h1 className={classes['pizza-container__title']}>
                Пицца
            </h1>
            <PizzaItem pizza={pizza}/>
        </div>
    );
};

export default PizzaContainer;
