import "./header.scss";
import { slide as Menu } from 'react-burger-menu';
import gitHub from "../../assets/logos/github-mark.svg";
import linkedIn from "../../assets/logos/linkedin-logo.png";


export default function Header() {

    function showSettings() {

    }

    return (
        <header className="header">
            <div className="header__hamburger">
                <Menu>
                    <div className="header__menu-container">
                        <a id="home" className="header__menu-item" href="/">Home</a>
                        <a id="about" className="header__menu-item" href="/about">About</a>
                        <a id="contact" className="header__menu-item" href="/contact">Contact</a>
                    </div>

                    <div className="header__my-container">
                        <a className="header__my-link" href="https://github.com/LeSheon"><img className="header__my-logo" src={gitHub} alt="GitHub Logo"/></a>
                        <a className="header__my-link" href="https://www.linkedin.com/in/donghyeon-lee/"><img className="header__my-logo" src={linkedIn} alt="Linked In Logo"/></a>
                    </div>
                </Menu>
            </div>
            <div className="header__title-container">
                <h2 className="header__title">FYI Ontario FMZ</h2>
            </div>
        </header>
    );
}