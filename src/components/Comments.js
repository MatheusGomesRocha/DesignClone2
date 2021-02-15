import './Comments.css';
import AspaIcon from '../svg/aspa';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

let array = [
    {
        id: 1,
        name: "Lindsay Swanson",
        area: "Wunderking Inc",
        comment: "This is one of the best themes that i bought on ThemeForest. It is well documented and well coded, but best of all is the friendly and quick support behind"
    },
    {
        id: 2,
        name: "Jack Westbrook",
        area: "Web Developer",
        comment: "This guys are amazing! They were so quick to respond, and let me tell you, they are all knowing! I highly recommend their themes! They are all about making their clients happy"
    },
    {
        id: 3,
        name: "Jared Jackson",
        area: "App Developer",
        comment: "I have purchased tens of templates from ThemForest and this one is undoubtedly the best i ever tried. Easy to edit, nicely coded. You guys, you did a great job here"
    },
]

export default () => {

    return (
        <div className={"comments"}>
            <div className={"commentsHidden"}></div>

            <Carousel infiniteLoop={true} autoPlay={true} swipeable={true} showStatus={false} showArrows={false}
                      showThumbs={false}>
                {array.map((item, k) => (
                    <div key={k} className={"center"}>
                        <AspaIcon />
                        <span className={"comment"}>"{item.comment}"</span>

                        <span className={"name"}>{item.name}</span>
                        <span className={"area"}>{item.area}</span>
                    </div>
                ))}

            </Carousel>
        </div>
    )
}