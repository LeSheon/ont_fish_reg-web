import "./zone.scss";
import FishList from "../Zones/FishList";
import { useState } from "react";

export default function Zone({zoneData}) {
    // Show ZoneDetail Popup toggle
    const [showZoneDetail, setShowZoneDetail] = useState(false);

    return (
        <li className="zone__zone-list-container">
            <a className="zone__zone-link" onClick={()=>{setShowZoneDetail(true)}}>
                <span className={`zone__zone${(zoneData.id===1? " zone__zone--first": "")}`}>{zoneData.zone}</span>
            </a>
            {showZoneDetail && <FishList setShowZoneDetail={setShowZoneDetail} zone={zoneData}/>}
        </li>
    );
}
