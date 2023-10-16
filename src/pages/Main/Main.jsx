import "./main.scss";
import fmzDummy from "../../assets/images/fisheries-management-zones.jpg";
import ZoneList from "../../components/ZoneList/ZoneList";
import ZoneMap from "../../components/ZoneMap/ZoneMap";
import store from "../../redux/store";
import { Provider } from "react-redux";

export default function Main() {

    return (
        <section className="main">
            <div className="main__max-width-container">
                <Provider store={store}>
                    <div className="main__mapbox">
                        {/* Comment out below dummy for real mapbox use */}
                        <img className="main__dummy-mapbox" src={fmzDummy} alt=""/>
                        {/* <ZoneMap /> */}
                    </div>
                    <ZoneList />
                </Provider>
                <div className="main__some-text-container">
                    <h6 className="main__mapbox-info">
                        Map was featured with Mapbox
                    </h6>
                </div>
            </div>
        </section>
    );
}