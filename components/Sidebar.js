import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

var SideBar = ({ infos }) => {
    return (
        <div id="sidebar">
            <div className="sidebar--informations">
                <img src={infos.avatar} alt="profile picture" id="profile-picture" />
            </div>
            <div className="sidebar--informations">
                <div className="sidebar--information sidebar--name">{infos.name}</div>
                <div className="sidebar--information sidebar--name">@{infos.username}</div>
                <div className="sidebar--information">{infos.bio}</div>
            </div>
            <div className="sidebar--informations">
                <div className="sidebar--information">
                    <FontAwesomeIcon icon={faBuilding} /> {infos.company}
                </div>
                <div className="sidebar--information">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {infos.location}
                </div>
            </div>
            <div className="sidebar--informations"></div>
        </div>
    );
};

export default SideBar;
