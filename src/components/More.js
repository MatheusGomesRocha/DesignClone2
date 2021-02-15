import './More.css';

import Item1 from '../img/item1.png';
import Item2 from '../img/item2.jpg';
import Item3 from '../img/item3.jpg';
import Item4 from '../img/item4.jpg';
import Item5 from '../img/item5.jpg';
import Item6 from '../img/item6.jpg';

import TelescopeIcon from '../svg/telescope';
import ReactIcon from '../svg/physics';
import CompassIcon from '../svg/compass';

let array = [
    {id: 1, img: Item2, title: 'Rewing Watch App', subTitle: 'Branding, Graphic'},
    {id: 2, img: Item4, title: 'Experience Pad UI', subTitle: 'Web-design, Graphic'},
    {id: 3, img: Item1, title: 'PlayIt Disk Cover', subTitle: 'Print, Branding'},
    {id: 4, img: Item5, title: 'Sketching Fun', subTitle: 'Print, Branding'},
    {id: 5, img: Item6, title: 'Fabric Bag', subTitle: 'Print, Branding'},
    {id: 6, img: Item3, title: 'Deer Wildfile', subTitle: 'Print, Branding'},
]
export default () => {

    return (
        <div className={"more"}>
            <div className={"gridDiv"}>
                {array.map((item, k) => (
                    <div key={k} className={"moreItem"}>
                        <img className={"img"} src={item.img}/>
                        <div className={"imgHidden"}>
                            <span className={"title"}>{item.title}</span>
                            <span className={"subTitle"}>{item.subTitle}</span>
                        </div>
                    </div>

                ))}
            </div>

            <div className={"bottomDiv"}>
                <div className={"bottomItemDiv"}>

                    <div className={"bottomLeftDiv"}>
                        <TelescopeIcon fill={"#0CB4CE"}/>
                    </div>

                    <div className={"bottomRightDiv"}>

                        <span className={"title"}>Stunning Design</span>
                        <span className={"subTitle"}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt.
                        </span>
                    </div>
                </div>

                <div className={"bottomItemDiv"}>
                    <div className={"bottomLeftDiv"}>
                        <CompassIcon/>
                    </div>
                    <div className={"bottomRightDiv"}>
                        <span className={"title"}>Retina Optimized</span>
                        <span className={"subTitle"}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt.
                        </span>
                    </div>
                </div>

                <div className={"bottomItemDiv"}>
                    <div className={"bottomLeftDiv"}>
                        <ReactIcon/>
                    </div>
                    <div className={"bottomRightDiv"}>
                        <span className={"title"}>Fast & Smooth</span>
                        <span className={"subTitle"}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt.
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}