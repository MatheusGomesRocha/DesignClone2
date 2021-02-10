import './Header.css';
import {withStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import StoreIcon from '../svg/store';
import SearchIcon from '../svg/search';

export default () => {
    const DefaultBtn = withStyles(() => ({
        root: {
            backgroundColor: '#0CB4CE',
            color: '#fff',
            height: 50,
            width: 180,
            borderRadius: '25px',
            marginTop: 30,
            fontWeight: 'bold',
            fontSize: 14,
            textTransform: 'uppercase',
            transition: '0.4s',
            fontFamily: 'Candara',

            '&:hover': {
                backgroundColor: '#fff',
                color: '#000'
            }
        },
    }))(Button);

    return (
        <div className={"header"}>
            <div className={"headerHidden"}></div>
            <div className={"headerTop"}>
                <div className={"left"}>
                    <span>Wander</span>
                </div>
                <div className={"right"}>
                    <span>Home</span>
                    <span>Pages</span>
                    <span>Features</span>
                    <span>Portfolio</span>
                    <span>Blog</span>
                    <span>Shop</span>

                    <div className={"line"}></div>

                    <div className={"icons"}>
                        <SearchIcon />
                        <StoreIcon />
                    </div>
                </div>
            </div>

            <div className={"headerBottom"}>
                <div className={"center"}>
                    <span className={"top"}>WE SET YOU APART TO GROW ONLINE</span>
                    <span className={"center"}>Let us help you build & brand your success online.</span>
                    <span className={"bottom"}>
                        We create experiences that transform brands, grow businesses and make
                        people’s lives better. We are dedicated to your success!
                    </span>

                    <DefaultBtn>We're creative</DefaultBtn>
                </div>
            </div>
        </div>
    );
}