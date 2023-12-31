import "./comment.scss";
import commentPreview from "../../assets/images/comment_box_preview.png";

export default function Comment() {
    return (
        <section className="comment">
            <div className="comment__max-width-container">
                <h5 className="comment__announce">This Comment section is for Feedback or request for data that you would want from the site.</h5>
                <div className="comment__list-container">
                    <ul className="comment__list">
                        <li className="comment__list-item">
                            <span className="comment__item-date">2023-10-14</span>
                            <p className="comment__item-text">
                                Hey, this site is amazing. I could easily get season and limit of fish that I need.
                            </p>
                        </li>
                        <li className="comment__list-item">
                            <span className="comment__item-date">2023-10-14</span>
                            <p className="comment__item-text">
                                Hey, this site is amazing. I could easily get season and limit of fish that I need.
                            </p>
                        </li>
                    </ul>
                </div>

                <form className="comment__new-container">
                    <img className="comment__preview" src={commentPreview} alt="Comment Box Preview"/>
                    <div className="comment__new-text">
                        {/* Input Box over here */}
                    </div>
                    <div className="comment__new-password">
                        {/* small input for password in later Edit or Delete on comment */}
                    </div>
                    {/* <button className="comment__new-button">Send</button> */}
                </form>
            </div>
        </section>
    );
}