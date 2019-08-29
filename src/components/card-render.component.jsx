import React from "react";
import { Content } from "../components/content.component.jsx";

export const Card = props => (
    <div>
        <div className="flex">
            {props.Users.map(props =>
                <Content key={props.id} Users={props} />)
            }
        </div>
    </div>
)