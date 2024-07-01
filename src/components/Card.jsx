import React from "react";

const Card = ({ avatar_url, name, company }) => {
    return (
        <div className="github-profile">
            <img src={avatar_url} alt="avatar"/>
            <div className="name">{name}</div>
            <div className="company">{company}</div>
        </div>
    );
};

export default Card;