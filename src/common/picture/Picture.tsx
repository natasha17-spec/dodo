import React from 'react';
import IMAGES from 'src/constants/images';

type PropsType = {
    name:string
}

const Picture:React.FC<PropsType> = ({name}) => {
    // @ts-ignore
    const img = IMAGES[name]
    return (
        <div>
            <img src={img.src} alt={name}/>
        </div>
    );
};

export default Picture;
