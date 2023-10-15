import "./footer.scss";
import ontLogo from "../../assets/logos/Ontario-logo.png";


export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer__max-width-container">
                <div className="footer__ont-container">
                    <span className="footer__message"> This Site is personal project. The information may not be perfect and include every info from FMZ.</span>
                    <a className="footer__ont-link" href="https://www.ontario.ca/page/fisheries-management-zones"><img className="footer__ont-logo" src={ontLogo} alt="Ontario Logo"/></a>
                </div>
            </div>
        </footer>
    );
}