import React from 'react';
import Comment from "./components/Comment";

const App = () => {

    const comments = [
        {
            name: "Oliver",
            surname: "Aviani",
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
                comments.map((comment, key) => <Comment key={key} name={comment.name} text={comment.comment}
                                                        surname={comment.surname}/>)
            }
        </>)
}

export default App;