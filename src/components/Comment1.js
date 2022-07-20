import React from "react";

const Comment = (props) => {

    return (
        <>
            <ul>
                <li>Name: {props.name}</li>
                <li>Text: {props.text}</li>
            </ul>
            ------------------------------
        </>

    )
}
export default Comment;