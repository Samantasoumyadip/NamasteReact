import { LOGO_URL } from "../utils/constants";  


const Header = () => {
    return (
        <div className = "header">
            <div>
                <img className="Logo" src={LOGO_URL} />
            </div>
            <div className ="navbar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
