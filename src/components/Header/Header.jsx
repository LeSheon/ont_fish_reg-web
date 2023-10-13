import "./header.scss";
import title from "../../assets/logos/fyi_ontario_fmz.png";

export default function Header() {
    return (
        <header className="header">
            {/* <div className="header__mobile-nav-container">
                <nav className="header__mobile-nav">
                    <ul></ul>
                </nav>
            </div> */}
            <div className="header__title-container">
                <img className="header__title-image" src={title} alt="FYI Ontario FMZ" />
            </div>
        </header>
    );
}