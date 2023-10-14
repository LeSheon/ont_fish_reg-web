import "./comment.scss";

export default function Comment() {
    return (
        <section className="comment">
            <div className="comment__list-container">
                <ul className="comment__list">
                    <li className="comment__list-item">
                        <span className="comment__item-date">2023-10-14</span>
                        <p className="comment__item-text">
                            Hey, this site is amazing. I could easily get season and limit of fish that I need.
                        </p>
                    </li>
                </ul>
            </div>

            <form className="comment__new-container">
                <div className="comment__new-text">
                    {/* Input Box over here */}
                </div>
                <div className="comment__new-password">
                    {/* small input for password in later Edit or Delete on comment */}
                </div>
                <button className="comment__new-button">Send</button>
            </form>
        </section>
    );
}