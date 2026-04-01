import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className = "header">
            <div>
                <img className="Logo" src="https://www.psdtemplatedesign.com/wp-content/uploads/edd/2017/12/logo-design.jpg" />
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

const Restaurant = () => {
    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/8/73113cd7-7a7d-47bc-8f70-ad9f2e914c56_25142.jpg" />
            <h2> Meghna Foods</h2>
            <h3> 4.5 Stars </h3>
            <h3> 30-35 mins</h3>
            <h4> North Indian, Biryani</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
        <div className="Search"> Search </div>
        <div className="res-container"> 
        < Restaurant /> 
        </div>
        </div>
    );
};


const AppLayout = () => {
    return (
        <div className="app"> 
            <Header />
            <Body />
        </div>
    );
};    

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
