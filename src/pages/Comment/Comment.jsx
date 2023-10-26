import "./comment.scss";
import commentPreview from "../../assets/images/comment_box_preview.png";
import NewComment from "../../components/NewComment/NewComment";

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

                <NewComment />
            </div>
        </section>
    );
}