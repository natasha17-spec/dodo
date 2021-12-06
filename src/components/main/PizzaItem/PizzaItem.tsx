import React from 'react';
import {Pizza} from 'src/store/modules/modules';

type PropsType = {
    pizza:Pizza
}

const PizzaItem:React.FC<PropsType> = ({pizza}) => {
    return (
        <div>
            {pizza.size.map((item)=>(
                item.name
            ))}
        </div>
    );
};

export default PizzaItem;
