import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

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

HeadLine.propTypes={
    header: PropTypes.string,
    desc:PropTypes.string,
    tempArr:PropTypes.arrayOf(PropTypes.shape({
        fName:PropTypes.string,
        lName:PropTypes.string,
        age:PropTypes.number,
        email:PropTypes.string,
        onlineStatus:PropTypes.bool
    
    }))
}

export default HeadLine;