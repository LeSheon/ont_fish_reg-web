import "./fishDetail.scss";

export default function FishDetail({fishData}) {
    return (
        <>
            <li className="fish-detail__list-item">{fishData.species}</li>
        </>
    );
}