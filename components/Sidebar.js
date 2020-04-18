import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

let SideBar = ({ infos }) => {
    return (
        <div id="sidebar">
            <div id="sidebar--container">
                <div className="sidebar--informations">
                    <img src={infos.avatar} alt="profile picture" id="profile-picture" />
                </div>
                <div className="sidebar--informations">
                    <div className="sidebar--information sidebar--name">
                        <div className="sidebar--information-text">{infos.name}</div>
                    </div>
                    <div className="sidebar--information sidebar--name">
                        <div className="sidebar--information-text">@{infos.username}</div>
                    </div>
                    <div className="sidebar--information">
                        <div className="sidebar--information-text">{infos.bio}</div>
                    </div>
                </div>
                <div className="sidebar--informations">
                    <div className="sidebar--information">
                        <div className="sidebar--information-icon">
                            <FontAwesomeIcon icon={faAt} />
                        </div>
                        <div className="sidebar--information-text">{infos.email}</div>
                    </div>
                    <div className="sidebar--information">
                        <div className="sidebar--information-icon">
                            <FontAwesomeIcon icon={faBuilding} />
                        </div>
                        <div className="sidebar--information-text">{infos.company}</div>
                    </div>
                    <div className="sidebar--information">
                        <div className="sidebar--information-icon">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <div className="sidebar--information-text">{infos.location}</div>
                    </div>
                </div>
                <div className="sidebar--informations">
                    <div id="sidebar--links">
                        <a href={infos.github_url}>
                            <div className="sidebar--link">
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/fduquesne/">
                            <div className="sidebar--link">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div>Copyright © 2020</div>
                <div>
                    🚀Developed with <a href="https://nextjs.org/">Next.js</a> by <a href={infos.github_url}>Florian Duquesne</a>
                </div>
                <div>
                    🎨UI inspired by <a href="https://imfunniee.github.io/gitfolio/">imfunniee</a>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
