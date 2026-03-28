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

const AppLayout = () => {
    return (
        <div className="app"> 
            <Header />
        </div>
    );
};    

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
