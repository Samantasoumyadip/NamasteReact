import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
);

const HeadingComponent = () => (
    <div id="Container">
        <Title />
        <h2 className="heading">Namaste react Functional Component</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
