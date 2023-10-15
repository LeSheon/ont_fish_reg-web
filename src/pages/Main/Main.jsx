import "./main.scss";
import fmzDummy from "../../assets/images/fisheries-management-zones.jpg";
import ZoneList from "../../components/ZoneList/ZoneList";
import ZoneMap from "../../components/ZoneMap/ZoneMap";



export default function Main() {

    return (
        <section className="main">
            <div className="main__max-width-container">
                <div className="main__mapbox">
                    {/* Comment out below dummy for real mapbox use */}
                    <img className="main__dummy-mapbox" src={fmzDummy} alt=""/>
                    {/* <ZoneMap /> */}
                </div>
                <ZoneList />
            </div>
        </section>
    );
}