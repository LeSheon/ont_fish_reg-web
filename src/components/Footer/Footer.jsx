import "./footer.scss";
import ontLogo from "../../assets/logos/Ontario-logo.png";
import gitHub from "../../assets/logos/github-mark.svg";
import linkedIn from "../../assets/logos/linkedin-logo.png";

export default function Footer() {

    const Ont_URL = process.env.REACT_APP_ONT_FMZ_URL;

    console.log(Ont_URL);

    return (
        <footer className="footer">
            <div className="footer__ont-container">
                <span className="footer__message"> This Site is personal project. The information may not be perfect and include every info from FMZ.</span>
                <a className="footer__ont-link" href="https://www.ontario.ca/page/fisheries-management-zones"><img className="footer__ont-logo" src={ontLogo} alt="Ontario Logo"/></a>
            </div>
            <div className="footer__my-container">
                <a className="footer__my-link" href="https://github.com/LeSheon"><img className="footer__my-logo" src={gitHub} alt="GitHub Logo"/></a>
                <a className="footer__my-link" href="https://www.linkedin.com/in/donghyeon-lee/"><img className="footer__my-logo" src={linkedIn} alt="Linked In Logo"/></a>
            </div>
        </footer>
    );
}