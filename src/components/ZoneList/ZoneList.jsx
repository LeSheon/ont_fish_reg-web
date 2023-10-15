import "./zoneList.scss";
import { useState, useEffect } from "react";
import { axiosGetZones } from "../../utils/AxiosHelper";
import Zone from "../Zone/Zone";

export default function ZoneList() {

        // State List of Zone 01 ~ 20
        const [zoneList, setZoneList] = useState(null);
    
        useEffect(() => {
            // Async function to set ZoneList. GetZones from utils/AxioHelper.js
            async function setList() {
                const { data } = await axiosGetZones();
                setZoneList(data);
            }
            setList();
        })
    
        if(!zoneList) { return <div>LOADING</div>}
    
        // Divde point on ZoneList's length for 2 seperated div for mobile view.
        const halfLength = (zoneList.length%2===0 ? zoneList.length/2 : (zoneList.length-1)/2);

    return (
        <div className="zone-list__zone-container">
                {/* Divde Text Container into 2 for better mobile view */}
                <ul className="zone-list__zone-text-container">
                    {zoneList.filter((allZone, i) => i<halfLength).map(zone => {
                        return <Zone zoneData={zone} key={zone.id}/>
                     })}
                </ul>
                <ul className="zone-list__zone-text-container">
                    {zoneList.filter((allZone, i) => i>=halfLength).map(zone => {
                        return <Zone zoneData={zone} key={zone.id}/>
                    })}
                </ul>
            </div>
    );
}