import './More.css';

import Item1 from '../img/item1.png';
import Item2 from '../img/item2.jpg';
import Item3 from '../img/item3.jpg';
import Item4 from '../img/item4.jpg';
import Item5 from '../img/item5.jpg';
import Item6 from '../img/item6.jpg';
import {useState} from "react";

export default () => {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);
    const [hover5, setHover5] = useState(false);
    const [hover6, setHover6] = useState(false);

    return(
        <div className={'more'}>
            <div className={"moreItem"}>
                <img className={"img"} src={Item2} />
                <div  className={"imgHidden"}>
                    <span className={"title"}>Rewind Watch App</span>
                    <span className={"subTitle"}>Branding, Graphic</span>
                </div>
            </div>

            <div className={"moreItem"}>
                <img className={"img"} src={Item4} />
                <div className={"imgHidden"}>
                    <span className={"title"}>Experience Pad UI</span>
                    <span className={"subTitle"}>Web-design, Graphic</span>
                </div>
            </div>

            <div className={"moreItem"}>
                <img className={"img"} src={Item1} />
                <div className={"imgHidden"}>
                    <span className={"title"}>PlayIt Disk Cover</span>
                    <span className={"subTitle"}>Print, Branding</span>
                </div>
            </div>

            <div className={"moreItem"}>
                <img className={"img"} src={Item5} />
                <div className={"imgHidden"}>
                    <span className={"title"}>Sketching Fun</span>
                    <span className={"subTitle"}>Print, Branding</span>
                </div>
            </div>

            <div className={"moreItem"}>
                <img className={"img"} src={Item6} />
                <div className={"imgHidden"}>
                    <span className={"title"}>Fabric Bag</span>
                    <span className={"subTitle"}>Print, Graphic</span>
                </div>
            </div>

            <div className={"moreItem"}>
                <img className={"img"} src={Item3} />
                <div className={"imgHidden"}>
                    <span className={"title"}>Deer Wildfile</span>
                    <span className={"subTitle"}>Print, Branding</span>
                </div>
            </div>
        </div>
    )
}