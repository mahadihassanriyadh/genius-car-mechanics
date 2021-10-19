import React from 'react';

const Expert = ({ expert }) => {
    const { name, expertize, img } = expert;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <img className="img-fluid" src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">Expertize: {expertize}</h5>
        </div>
    );
};

export default Expert;