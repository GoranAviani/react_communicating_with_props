import React from "react";

const Comment = ({name, text}) => {

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
Comment.defaultProps = {
    text: "default text"
}

export default Comment;