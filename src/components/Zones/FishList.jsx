import "./fishList.scss";
import xButton from "../../assets/icons/x-button.png";

export default function FishList({setShowZoneDetail, zone}) {


    return (
        <section onClick={() => {setShowZoneDetail(false)}} className="fish-list">
            <div className="fish-list__inner-container">
                <img onClick={() => {setShowZoneDetail(false)}} className="fish-list__close-button" src={xButton} alt="Close Popup"/>
                <div className="fish-list__title-container">
                    <h2 className="fish-list__title">{zone.zone}</h2>
                </div>
                <ul className="fish-list__list">
                    <li className="fish-list__list-item">Bass</li>
                    <li className="fish-list__list-item">Splake</li>
                    <li className="fish-list__list-item">Sunfish</li>
                    <li className="fish-list__list-item">Yellow Perch</li>
                </ul>
            </div>
        </section>
    );
}