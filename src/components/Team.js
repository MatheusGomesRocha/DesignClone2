import {useState} from "react";
import './Team.css';
import perfil1 from '../img/perfil1.jpg';
import perfil2 from '../img/perfil4.jpg';
import {Carousel} from 'react-responsive-carousel';

export default () => {
    const [imgHover1, setImgHover1] = useState(false);
    const [imgHover2, setImgHover2] = useState(false);

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
                <div className={"imgDiv"} onMouseOver={() => setImgHover1(true)} onMouseOut={() => setImgHover1(false)} >
                    <img className={"img"} src={perfil1} />
                    <div style={{display: imgHover1 ? 'flex' : 'none'}}  className={"imgHidden"}>
                        <span className={"name"}>Brad Williams</span>
                        <span className={"area"}>Junior Web Developer</span>
                    </div>
                </div>

                <div className={"imgDiv"} onMouseOver={() => setImgHover2(true)} onMouseOut={() => setImgHover2(false)}>
                    <img className={"img"} src={perfil2} />
                    <div style={{display: imgHover2 ? 'flex' : 'none'}} className={"imgHidden"}>
                        <span className={"name"}>Joana Brown</span>
                        <span className={"area"}>Social Media</span>
                    </div>
                </div>
            </div>
        </div>
    )
}