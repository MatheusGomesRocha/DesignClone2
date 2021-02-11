import './Team.css';
import perfil1 from '../img/perfil1.jpg';

export default () => {
    return(
        <div className={"team"}>
            <div className={"divText"}>
                <div className={"top"}>
                    <span className={"bigText"}>Our Team</span>
                    <div className={"line"}></div>
                </div>
                <span className={"smallText"}>
                    We create experiences that transform brands, grow businesses and make clients happy.
                    Working on big challenges in honest collaboration with our clients.
                </span>
            </div>

            <div className={"carousel"}>
                <img className={"img"} src={perfil1} />
                <img className={"img"} src={perfil1} />
            </div>
        </div>
    )
}