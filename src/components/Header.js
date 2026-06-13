import { LOGO_URL } from "../utils/constants";  
import { useState } from "react";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState("Login");

    return (
        <div className="header">
            <div>
                <img className="Logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>
                        <button
                            className="login"
                            onClick={() =>
                                setIsLoggedIn(isLoggedIn === "Login" ? "Logout" : "Login")
                            }
                        >
                            {isLoggedIn}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
