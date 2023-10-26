import "./newComment.scss";

export default function NewComment() {

    function postComment(e) {
        e.preventDefault();
    }

    return (
        <form className="new-comment">
            <label className="new-comment__label">Comment: 
                <textarea className="new-comment__text" placeholder="Write your comment!">
                </textarea>
            </label>
            <div className="new-comment__foot-container">
                <label className="new-comment__label new-comment__label--pswd">Password:
                    <input className="new-comment__pswd" type="password" placeholder="Password for Comment">
                    </input>
                </label>
                <button onClick={postComment} className="new-comment__submit">Post Comment</button>
            </div>
        </form>
    );
};
