import {useState} from "react";
import './Team.css';

import perfil1 from '../img/perfil1.jpg';
import perfil2 from '../img/perfil2.jpg';
import perfil3 from '../img/perfil3.jpg';
import perfil4 from '../img/perfil4.jpg';
import perfil5 from '../img/perfil5.jpg';
import perfil6 from '../img/perfil6.jpg';

import InstaIcon from '../svg/instagram';
import FaceIcon from '../svg/facebook';
import LinkeIcon from '../svg/linkedin';


import "react-responsive-carousel/lib/styles/carousel.min.css";
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

            <Carousel infiniteLoop={true} autoPlay={true} swipeable={true} showStatus={false} showArrows={false} showThumbs={false}>
                <div className={"carousel"}>
                    <div style={{marginLeft: 20}} className={"imgDiv"} onMouseOver={() => setImgHover1(true)} onMouseOut={() => setImgHover1(false)} >
                        <img className={"img"} src={perfil1} />
                        <div style={{display: imgHover1 ? 'flex' : 'none'}}  className={"imgHidden"}>
                            <span className={"name"}>Brad Williams</span>
                            <span className={"area"}>Junior Web Developer</span>
                            <div className={"iconDiv"}>
                                <div className={"iconBallDiv"}>
                                    <InstaIcon />
                                </div>
                                <div className={"iconBallDiv"}>
                                    <FaceIcon />
                                </div>
                                <div className={"iconBallDiv"}>
                                    <LinkeIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{marginRight: 20}} className={"imgDiv"} onMouseOver={() => setImgHover2(true)} onMouseOut={() => setImgHover2(false)}>
                        <img className={"img"} src={perfil4} />
                        <div style={{display: imgHover2 ? 'flex' : 'none'}} className={"imgHidden"}>
                            <span className={"name"}>Joana Brown</span>
                            <span className={"area"}>Social Media</span>
                            <div className={"iconDiv"}>
                                <div className={"iconBallDiv"}>
                                    <InstaIcon />
                                </div>
                                <div className={"iconBallDiv"}>
                                    <FaceIcon />
                                </div>
                                <div className={"iconBallDiv"}>
                                    <LinkeIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"carousel"}>
                    <div style={{marginLeft: 20}} className={"imgDiv"} onMouseOver={() => setImgHover1(true)} onMouseOut={() => setImgHover1(false)} >
                        <img className={"img"} src={perfil6} />
                        <div style={{display: imgHover1 ? 'flex' : 'none'}}  className={"imgHidden"}>
                            <span className={"name"}>Sandra Petters</span>
                            <span className={"area"}>Senior Mobile Developer</span>
                            <div className={"iconDiv"}>
                                <div className={"iconBallDiv"}>
                                    <InstaIcon />
                                </div>
                                <div className={"iconBallDiv"}>
                                    <FaceIcon />
                                </div>
                                <div className={"iconBallDiv"}>
                                    <LinkeIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{marginRight: 20}} className={"imgDiv"} onMouseOver={() => setImgHover2(true)} onMouseOut={() => setImgHover2(false)}>
                        <img className={"img"} src={perfil2} />
                        <div style={{display: imgHover2 ? 'flex' : 'none'}} className={"imgHidden"}>
                            <span className={"name"}>Matthew Miller</span>
                            <span className={"area"}>Human Resources (HR)</span>
                            <div className={"iconDiv"}>
                                <div className={"iconBallDiv"}>
                                    <InstaIcon />
                                </div>
                                <div className={"iconBallDiv"}>
                                    <FaceIcon />
                                </div>
                                <div className={"iconBallDiv"}>
                                    <LinkeIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"carousel"}>
                    <div style={{marginLeft: 20}} className={"imgDiv"} onMouseOver={() => setImgHover1(true)} onMouseOut={() => setImgHover1(false)} >
                        <img className={"img"} src={perfil5} />
                        <div style={{display: imgHover1 ? 'flex' : 'none'}}  className={"imgHidden"}>
                            <span className={"name"}>Ana Leonard</span>
                            <span className={"area"}>Marketing Chief</span>
                            <div className={"iconDiv"}>
                                <div className={"iconBallDiv"}>
                                    <InstaIcon />
                                </div>
                                <div className={"iconBallDiv"}>
                                    <FaceIcon />
                                </div>
                                <div className={"iconBallDiv"}>
                                    <LinkeIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{marginRight: 20}} className={"imgDiv"} onMouseOver={() => setImgHover2(true)} onMouseOut={() => setImgHover2(false)}>
                        <img className={"img"} src={perfil3} />
                        <div style={{display: imgHover2 ? 'flex' : 'none'}} className={"imgHidden"}>
                            <span className={"name"}>Petterson Jones</span>
                            <span className={"area"}>Test analyst Sênior</span>
                            <div className={"iconDiv"}>
                                <div className={"iconBallDiv"}>
                                    <InstaIcon />
                                </div>
                                <div className={"iconBallDiv"}>
                                    <FaceIcon />
                                </div>
                                <div className={"iconBallDiv"}>
                                    <LinkeIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>

        </div>
    )
}