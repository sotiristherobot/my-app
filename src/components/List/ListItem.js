import React from "react";

export default function ListItem(props) {
    return (
        <div>
            <p>{props.title}{props.content}</p>
        </div>
    );
}
