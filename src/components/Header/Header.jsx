import "./header.scss";
import { slide as Menu } from 'react-burger-menu';


export default function Header() {

    function showSettings() {

    }

    return (
        <header className="header">
            <div className="header__hamburger">
                <Menu>
                    <a id="home" className="header__menu-item" href="/">Home</a>
                    <a id="about" className="header__menu-item" href="/about">About</a>
                    <a id="contact" className="header__menu-item" href="/contact">Contact</a>
                </Menu>
            </div>
            <div className="header__title-container">
                <h2 className="header__title">FYI Ontario FMZ</h2>
            </div>
        </header>
    );
}