import React from "react";

const Comment = (props) => {
    const name = props.name
    const text = props.text
    return (
        <>
            <ul>
                <li>Name: {name}</li>
                <li>Text: {text}</li>
            </ul>
            ------------------------------
        </>

    )
}
export default Comment;