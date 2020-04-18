import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

let SideBar = ({ infos }) => {
    return (
        <div id="sidebar">
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
    );
};

export default SideBar;
