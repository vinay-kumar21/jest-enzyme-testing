import React from 'react';
import './styles.scss';

const HeadLine=(props)=>{

    if(!props.header){
 return null;
    }

    return (
        <div data-test="headlineComponent">
            <h1 data-test='header'>{props.header}</h1>
            <p data-test='desc'>{props.desc}</p>
        </div>
    )
}
export default HeadLine;