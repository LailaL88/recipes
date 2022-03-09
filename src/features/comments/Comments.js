import React from 'react';

function Comments (props) {
    return (
        <>
            <form action="#">
                <input type="text" value="Add Comment"/>
                <input type="submit" value="Submit" />
            </form>
            <div>
                {props.state.comments.path.map(comment => {
                    return <p>{comment}</p>
                })}
            </div>
        </>
    )
}