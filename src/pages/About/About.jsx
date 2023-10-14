import "./about.scss";

export default function About() {
    return (
        <section className="about">
            <h2 className="about__title">
                About the Project //
            </h2>

            <div className="about__text-container">
                <h4 className="about__text">
                    Since Ontario Canada weren't making their document into visible website for better access on FMZ,
                </h4>
                <h4 className="about__text">
                    fishermans in Ontario had to always download or get a physical document booklet to get the specific information about 
                    fish season and limits. I came up with the site for a personal project for ease of access for FMZ to make sure that 
                    people can get the information and keep the regulation rule to protect our nature's resources as we live.
                </h4>
            </div>

            <div className="about__more-info-container">
                <h4 className="about__text">
                    More detail information and original source of document can be found from 'URL', the offical Onatrio government's website.
                </h4>
            </div>
        </section>
    );
}