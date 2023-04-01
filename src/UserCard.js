import React from 'react';

const UserCard = ({user}) => {
  console.log(user);

  const{address, geo, company, email, id, name, phone, username, website} = user;
    return (
        <div className="card  bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <p>{website}</p>
          <p>City : {address.city}</p>
          <p>phone number : {phone}</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default UserCard;