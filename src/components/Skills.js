import './Skills.css';
import AnimatedNumber from "animated-number-react";

export default () => {
    return(
        <div className={"skillsFather"}>
            <div className={"skills"}>
                <div className={"skillsHidden"}></div>
                <div className={"left"}>
                    <span className={"title"}>Our Skills</span>
                    <span className={"content"}>
                    Fusce faucibus tincidunt nulla, tincidunt sagittis magna venenatis quis. Proin commodo eu
                    ipsum eu suscipit. In dapibus arcu sit amet imperdiet. Praesent condimentum nulla at mauris ornare.
                    Praesent condimentum nulla at mauris ornare, eget consequat felis euismod. Praesent condimentum
                    nulla at mauris ornare. Fusce faucibus tincidunt nulla, tincidunt sagittis magna
                </span>
                </div>

                <div className={"left"}>
                    <span className={"title"}>Our Skills</span>
                    <span className={"content"}>
                    Fusce faucibus tincidunt nulla, tincidunt sagittis magna venenatis quis. Proin commodo eu
                    ipsum eu suscipit. In dapibus arcu sit amet imperdiet. Praesent condimentum nulla at mauris ornare.
                    Praesent condimentum nulla at mauris ornare, eget consequat felis euismod. Praesent condimentum
                    nulla at mauris ornare. Fusce faucibus tincidunt nulla, tincidunt sagittis magna
                </span>
                </div>
            </div>

            <div className={"animatedNumber"}>
                <div className={"itemDiv"}>
                    <AnimatedNumber
                        value={140}
                        formatValue={n => n.toFixed(0)}
                        duration={3000}
                    />
                    <span className={"text"}>Happy Customers</span>
                </div>

                <div className={"itemDiv"}>
                    <AnimatedNumber
                        value={385}
                        formatValue={n => n.toFixed(0)}
                        duration={3000}
                    />
                    <span className={"text"}>Finished Projects</span>
                </div>

                <div className={"itemDiv"}>
                    <AnimatedNumber
                        value={896}
                        formatValue={n => n.toFixed(0)}
                        duration={3000}
                    />
                    <span className={"text"}>Tickets Solved</span>
                </div>

                <div className={"itemDiv"}>
                    <AnimatedNumber
                        value={25}
                        formatValue={n => n.toFixed(0)}
                        duration={3000}
                    />
                    <span className={"text"}>Winning Awards</span>
                </div>
            </div>
        </div>


    )
}