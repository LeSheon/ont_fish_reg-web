import "./about.scss";

export default function About() {
    return (
        <section className="about">
            <div className="about__max-width-container">
                <h2 className="about__title">
                    Ontario Fishing Regulation (Fisheries Management Zones)
                </h2>

                <div className="about__text-container">
                    <h4 className="about__text">
                        Since Ontario Canada wasn't making their document into the visible website for better access to FMZ info,
                    </h4>
                    <h4 className="about__text">
                        Fishermen in Ontario had to always download or get a physical document booklet to get specific information about 
                        the fish season and limits. I came up with the site for a personal project for ease of access for FMZ to make sure that 
                        people can get the information and keep the regulation rule to protect nature's resources as we live.
                    </h4>
                </div>

                <div className="about__text-container">
                    <h4 className="about__text">
                        The site was built and designed with React and the map feature was implemented through Mapbox's custom map through Mapbox Studio. 
                    </h4>
                </div>

                <div className="about__more-info-container">
                    <h4 className="about__more-text">
                        There are Lakes with exceptions, that different regulation rules apply. Make sure to check that from the original booklet.
                    </h4>
                    <h4 className="about__more-text">
                        More detailed information and the source of the document can be found on 
                         <span className="about__more-text--bold"> https://www.ontario.ca/document/ontario-fishing-regulations-summary</span>,
                         the official Onatrio government's website.
                    </h4>
                </div>
            </div>
        </section>
    );
}