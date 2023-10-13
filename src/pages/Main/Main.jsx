import "./main.scss";
import fmzDummy from "../../assets/images/fisheries-management-zones.jpg";

export default function Main() {
    return (
        <section className="main">
            <div className="main__mapbox">
                <img className="main__dummy-mapbox" src={fmzDummy} alt=""/>
            </div>
            <div className="main__zone-container">
                <div className="main__zone-text-container">
                    <span className="main__zone main__zone--first">Zone 1</span>
                    <span className="main__zone">Zone 2</span>
                    <span className="main__zone">Zone 3</span>
                    <span className="main__zone">Zone 4</span>
                    <span className="main__zone">Zone 5</span>
                    <span className="main__zone">Zone 6</span>
                    <span className="main__zone">Zone 7</span>
                    <span className="main__zone">Zone 8</span>
                    <span className="main__zone">Zone 9</span>
                    <span className="main__zone">Zone 10</span>
                </div>
                <div className="main__zone-text-container">
                    <span className="main__zone">Zone 11</span>
                    <span className="main__zone">Zone 12</span>
                    <span className="main__zone">Zone 13</span>
                    <span className="main__zone">Zone 14</span>
                    <span className="main__zone">Zone 15</span>
                    <span className="main__zone">Zone 16</span>
                    <span className="main__zone">Zone 17</span>
                    <span className="main__zone">Zone 18</span>
                    <span className="main__zone">Zone 19</span>
                    <span className="main__zone">Zone 20</span>
                </div>
            </div>
        </section>
    );
}