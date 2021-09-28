import React from 'react';
import { useContext } from 'react';
import { engineContext } from '../context/engineContext';
import Card from "./Card";


const Info = () => {
    
    const {data} = useContext(engineContext);
    // console.log(data)

    return (
        <div className="">
            {data.map((item,index)=> (
                <Card key={index} item={item} />
            ))}
        </div>
    )
}

export default Info
