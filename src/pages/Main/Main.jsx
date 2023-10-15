import "./main.scss";
import fmzDummy from "../../assets/images/fisheries-management-zones.jpg";
import ZoneList from "../../components/ZoneList/ZoneList";



export default function Main() {

    return (
        <section className="main">
            {/* Where the Mapbox goes in */}
            <div className="main__mapbox">
                <img className="main__dummy-mapbox" src={fmzDummy} alt=""/>
            </div>
            <ZoneList />
        </section>
    );
}