import "./main.scss";
import fmzDummy from "../../assets/images/fisheries-management-zones.jpg";
import { useState, useEffect } from "react";
import { axiosGetZones } from "../../utils/AxiosHelper";


export default function Main() {
    // State List of Zone 01 ~ 20
    const [zoneList, setZoneList] = useState(null);

    useEffect(() => {
        // Async function to set ZoneList. GetZones from utils/AxioHelper.js
        async function setList() {
            const { data } = await axiosGetZones();
            setZoneList(data);
        }

        setList();

    }, [])

    if(!zoneList) { return <div>LOADING</div>}

    // Divde point on ZoneList's length for 2 seperated div for mobile view.
    const halfLength = (zoneList.length%2===0 ? zoneList.length/2 : (zoneList.length-1)/2);

    return (
        <section className="main">
            {/* Where the Mapbox goes in */}
            <div className="main__mapbox">
                <img className="main__dummy-mapbox" src={fmzDummy} alt=""/>
            </div>
            <div className="main__zone-container">
                {/* Divde Text Container into 2 for better mobile view */}
                <div className="main__zone-text-container">
                    {zoneList.filter((zone, i) => i<halfLength).map(zone => {
                        return <span className={`main__zone${(zone.id===1? " main__zone--first": "")}`}>{zone.zone}</span>
                    })}
                </div>
                <div className="main__zone-text-container">
                    {zoneList.filter((zone, i) => i>=halfLength).map(zone => {
                        return <span className={`main__zone${(zone.id===1? " main__zone--first": "")}`}>{zone.zone}</span>
                    })}
                </div>
            </div>
        </section>
    );
}