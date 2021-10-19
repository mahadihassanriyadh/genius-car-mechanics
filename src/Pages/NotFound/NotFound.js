import Button from '@restart/ui/esm/Button';
import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import errorImg from '../../images/error/3828541.jpg'
const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" src={errorImg} alt="" />
            <Link to="/"><Button className="btn btn-primary btn-lg mb-5">Go Back</Button></Link>
        </div>
    );
};

export default NotFound;