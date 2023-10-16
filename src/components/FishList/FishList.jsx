import "./fishList.scss";
import xButton from "../../assets/icons/x-button.png";
import { useEffect } from "react";
import { useState } from "react";
import { axiosGetZoneById } from "../../utils/AxiosHelper";
import FishDetail from "../FishDetail/FishDetail";

export default function FishList({setShowZoneDetail, zone}) {

    const [fishList, setFishList] = useState(null);
    
    useEffect(() => {
        async function setList() {
            const {data} = await axiosGetZoneById(zone.id);
            setFishList(data);
        }

        setList();
    })    

    if(!fishList) return <div className="fish-list__loading"> Loading Fish Data </div>

    return (
        <section className="fish-list">
            <div onClick={e => e.stopPropagation()} className="fish-list__inner-container">
                <div className="fish-list__close-container">
                    <img onClick={() => {setShowZoneDetail()}} className="fish-list__close-button" src={xButton} alt="Close Popup"/>
                </div>
                <div className="fish-list__title-container">
                    <h2 className="fish-list__title">{zone.zone}</h2>
                </div>
                <h4 className="fish-list__info-text">
                    License Type:
                </h4>
                <h4 className="fish-list__info-text">
                    S = Sport, C = Conservation
                </h4>
                <ul className="fish-list__list">
                    {fishList.map(fish => {
                        return <FishDetail key={fish.id} fishData={fish}/>
                    })}
                </ul>
            </div>
        </section>
    );
}