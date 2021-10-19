import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Service.css'
const Service = (props) => {
    const { name, price, img, time, id } = props.service;
    console.log(props.service)
    return (
        <div className="service-container">
            <img src={img} alt="" />
            <h2>{ name }</h2>
            <p>Price: {price} Tk</p>
            <small>Time required: {time} H</small>
            <br />
            <Link to={`/booking/${id}`}>
                <Button variant="dark" className="mt-2">Book {name.toLowerCase()}</Button>
            </Link>
        </div>
    );
};

export default Service;