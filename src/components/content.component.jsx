import React from "react";
import "./content.css"

export const Content = props => (

    <div className="content">
        <img className="img" src={props.Users.avatar_url} alt="" />
        <h3>{props.Users.login}</h3>
        <p><a href={props.Users.html_url} alt="lol">{props.Users.html_url}</a></p>
    </div>

)

