import {useState} from "react";
import './WeAre.css';
import LightningIcon from '../svg/flash';
import ChemestryIcon from '../svg/chemistry';
import InfinityIcon from '../svg/infinity';
import MicIcon from '../svg/mic';

export default () => {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);
    const [item3, setItem3] = useState(false);
    const [item4, setItem4] = useState(false);

    const handleClick = (v) => {
        if (v === 1) {
            setItem1(true);
            setItem2(false);
            setItem3(false);
            setItem4(false);
        } else if (v === 2) {
            setItem1(false);
            setItem2(true);
            setItem3(false);
            setItem4(false);
        } else if (v === 3) {
            setItem1(false);
            setItem2(false);
            setItem3(true);
            setItem4(false);
        } else if (v === 4) {
            setItem1(false);
            setItem2(false);
            setItem3(false);
            setItem4(true);
        }
    }

    return (
        <div className={"weAre"}>
            <div className={"center"}>
                <div className={"centerTop"}>
                    <span className={"span1"}>We Are Wander</span>
                    <div className={"line"}></div>
                </div>

                <div className={"row"}>
                    <div onClick={() => handleClick(1)} className={"rowItem"}>
                        <ChemestryIcon fill={item1 ? '#0CB4CE' : '#000'}/>
                        <span style={{color: item1 ? '#0CB4CE' : '#000'}}>Experiences</span>
                    </div>

                    <div onClick={() => handleClick(2)} className={"rowItem"}>
                        <LightningIcon fill={item2 ? '#0CB4CE' : '#000'}/>
                        <span style={{color: item2 ? '#0CB4CE' : '#000'}}>Capabilities</span>
                    </div>

                    <div onClick={() => handleClick(3)} className={"rowItem"}>
                        <InfinityIcon fill={item3 ? '#0CB4CE' : '#000'}/>
                        <span style={{color: item3 ? '#0CB4CE' : '#000'}}>Our Strategy</span>
                    </div>

                    <div onClick={() => handleClick(4)} className={"rowItem"}>
                        <MicIcon fill={item4 ? '#0CB4CE' : '#000'}/>
                        <span style={{color: item4 ? '#0CB4CE' : '#000'}}>Our Mission</span>
                    </div>
                </div>


                <div className={"bigText"}>
                    {item1 &&
                    <span className={"span2"}>
                        Wander helps traditional organizations navigate and find success in the digital world.
                        We evaluate existing customer interactions, performance metrics, data and capabilities to create
                        a strategy for the new experience a company wishes to provide its customers. All customer touchpoints,
                        from digital to in-store to phone, are considered.
                    </span>
                    }

                    {item2 &&
                    <span className={"span2"}>
                        We partner with clients to determine where and how to compete by rapidly immersing
                        into an industry or problem space and facilitating a series of workshops to identify
                        opportunities, generate and prioritize ideas, and prototype and test product and service concepts.
                        We determine an optimal mix of revenue models.
                    </span>
                    }

                    {item3 &&
                    <span className={"span2"}>
                        Sed scelerisque urna id scelerisque tincidunt. Sed scelerisque laoreet dolor sed aliquam.
                        Duis at eros vehicula, sollicitudin magna elementum, pretium diam. Vivamus bibendum fringilla
                        mauris et rhoncus. Phasellus mattis egestas risus ac tempor. Fusce faucibus tincidunt nulla,
                        scelerisque urna id scelerisque tincidunt sagittis magna venenatis quis.
                    </span>
                    }

                    {item4 &&
                    <span className={"span2"}>
                        Sed scelerisque urna id scelerisque tincidunt. Sed scelerisque laoreet dolor sed aliquam.
                        Duis at eros vehicula, sollicitudin magna elementum, pretium diam. Vivamus bibendum fringilla
                        mauris et rhoncus. Sed scelerisque urna id scelerisque tincidunt.Phasellus mattis egestas
                        risus ac tempor. Nam dapibus sodales ornare.
                    </span>
                    }
                </div>


            </div>
        </div>
    );
}