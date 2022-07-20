import React from "react";

const Comment = ({name, text, surname}) => {

    return (
        <>
            <ul>
                <li>Name: {name}</li>
                <li>Last name: {surname}</li>
                <li>Text: {text}</li>
            </ul>
            ------------------------------
        </>

    )
}
Comment.defaultProps = {
    surname: "default text"
}

export default Comment;