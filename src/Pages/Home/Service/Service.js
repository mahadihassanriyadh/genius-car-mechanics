import React from 'react';
import './Service.css'
const Service = (props) => {
    const { name, price, img, time } = props.service;
    console.log(props.service)
    return (
        <div className="service-container">
            <img src={img} alt="" />
            <h2>{ name }</h2>
            <p>Price: {price} Tk</p>
            <small>Time required: { time } H</small>
        </div>
    );
};

export default Service;