import React from 'react';
import {Pizza} from 'src/store/modules/modules';
import classes from './PizzaItem.module.scss';

type PropsType = {
    pizza: Pizza
}

const PizzaItem: React.FC<PropsType> = ({pizza}) => {
    const pizzaName = pizza.name;
    const pizzaPicture = pizza.picture;
    const pizzaComposition = pizza.composition;
    return (
        <article className={classes.pizza}>
            <div className={classes.main}>

                <div className={classes.main__picture}>
                    <img src={pizzaPicture} alt={''} className={classes.main__img}/>
                </div>
                <div className={classes.main__title}>
                    {pizzaName}
                </div>
                <div className={classes.main__composition}>
                    {pizzaComposition.map((item, index)=>(
                        <span key={index}>{item},</span>
                    ))}
                </div>
                {pizza.size.map((item, index) => (
                    <div key={index}>
                        {item.name}

                    </div>

                ))}
            </div>

        </article>
    );
};

export default PizzaItem;
