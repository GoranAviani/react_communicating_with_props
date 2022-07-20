import React from 'react';
import Comment from "./components/Comment";

const App = () => {

    const comments = [
        {
            name: "Oliver",
            comment: "Great work!",
        },
        {
            name: "Goran",
            comment: "Nice!"
        }
    ]

    return (
        <>
            Comment section:
            {
                comments.map((comment, key) => <Comment key={key} name={comment.name} text={comment.comment}/>)
            }
        </>)
}

export default App;