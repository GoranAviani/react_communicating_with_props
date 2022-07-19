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
export default Comment;