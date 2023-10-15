import { useState } from "react";
import "./fishDetail.scss";

export default function FishDetail({fishData}) {

    const [showSlide, setShowSlide] = useState(false);

    return (
        <>
            <li className="fish-detail">
                <a className="fish-detail__show-click" onClick={() => setShowSlide(!showSlide)}><h4 className="fish-detail__species">{fishData.species}</h4></a>
                <ul className={`fish-detail__slide-list ${(showSlide ? "fish-detail__slide-list--show" : "")}`}>
                    <li className="fish-detail__slide-item">{fishData.season}</li>
                    <li className="fish-detail__slide-item">{fishData.s_limit}</li>
                    <li className="fish-detail__slide-item">{fishData.s_limit_desc}</li>
                    <li className="fish-detail__slide-item">{fishData.c_limit}</li>
                    <li className="fish-detail__slide-item">{fishData.c_limit_desc}</li>
                </ul>
            </li>
        </>
    );
}