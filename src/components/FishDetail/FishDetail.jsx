import { useState } from "react";
import "./fishDetail.scss";

export default function FishDetail({fishData}) {

    const [showSlide, setShowSlide] = useState(false);

    console.log();

    return (
        <>
            <li className="fish-detail">
                <a className="fish-detail__show-click" onClick={() => setShowSlide(!showSlide)}><h4 className="fish-detail__species">{fishData.species}</h4></a>
                <ul className={`fish-detail__slide-list ${(showSlide ? "fish-detail__slide-list--show" : "")}`}>
                    {(fishData.season && <li className="fish-detail__slide-item">
                        <span className="fish-detail__slide-item--bold">Fishing Season:</span> {fishData.season}</li>)}
                    {(fishData.s_limit===0 ? <li className="fish-detail__slide-item">
                        <span className="fish-detail__slide-item--bold">S License Limit:</span> {fishData.s_limit}</li>
                     : (fishData.s_limit && <li className="fish-detail__slide-item">
                        <span className="fish-detail__slide-item--bold">S License Limit:</span> {fishData.s_limit}</li>))}
                    {(fishData.s_limit_desc && <li className="fish-detail__slide-item">
                        <span className="fish-detail__slide-item--bold">S License Regulation:</span> {fishData.s_limit_desc}</li>)}
                    {(fishData.c_limit===0 ? <li className="fish-detail__slide-item">
                        <span className="fish-detail__slide-item--bold">C License Limit:</span> {fishData.c_limit}</li>
                     : (fishData.c_limit && <li className="fish-detail__slide-item">
                        <span className="fish-detail__slide-item--bold">C License Limit:</span> {fishData.c_limit}</li>))}
                    {(fishData.c_limit_desc && <li className="fish-detail__slide-item">
                        <span className="fish-detail__slide-item--bold">C License Regulation:</span> {fishData.c_limit_desc}</li>)}
                </ul>
            </li>
        </>
    );
}