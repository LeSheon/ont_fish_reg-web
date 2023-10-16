import "./zone.scss";
import FishList from "../FishList/FishList";
import { useSelector, useDispatch } from "react-redux";
import { addModal, toggleModal } from "../../redux/reducer/ZoneReduser";
import { useEffect } from "react";

export default function Zone({zoneData}) {

    // Manage Toggle on Detail popup to show or close with Redux state.
    const showZoneDetail = useSelector((state) => state.zone.modalList[zoneData.id-1]);
    const dispatch = useDispatch();

    useEffect(() => {
        // set Redux state.
        dispatch(addModal(false));
    }, [])

    return (
        <li className="zone__zone-list-container">
            <a className="zone__zone-link" onClick={()=>{(dispatch(toggleModal({toggle: true, id: zoneData.id})))}}>
                <span className={`zone__zone${(zoneData.id===1? " zone__zone--first": "")}`}>{zoneData.zone}</span>
            </a>
            {showZoneDetail && <FishList setShowZoneDetail={() => {(dispatch(toggleModal({toggle: false, id: zoneData.id})))}} zone={zoneData}/>}
        </li>
    );
}
