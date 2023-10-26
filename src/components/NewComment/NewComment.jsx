import "./newComment.scss";

export default function NewComment() {

    function postComment(e) {
        e.preventDefault();
    }

    return (
        <form className="new-comment">
            <label className="new-comment__label">Comment: 
                <input className="new-comment__text">
                </input>
            </label>
            <div className="new-comment__foot-container">
                <label className="new-comment__label">Password:
                    <input className="new-comment__pswd">
                    </input>
                </label>
                <button onClick={postComment} className="new-comment__submit">Post Comment</button>
            </div>
        </form>
    );
};
