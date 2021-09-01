import "./topbar.scss";

// import { Mail, Phone } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><img src="./assets/favicon.png" alt="" /></a>
                    {/* <div className="itemContainer">
                        <Phone className="icon" />
                        <span>+62 812 8206 0532</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>septiann@outlook.com</span>
                    </div> */}
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
