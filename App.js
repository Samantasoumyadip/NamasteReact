import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" }, [
        React.createElement(
            "div",
            { id: "child_1" }, [
                // IDs must be strings — Heading_1 etc. were undefined variables and threw ReferenceError
                React.createElement("h1", { id: "Heading_1" }, "I am Heading 1"),
                React.createElement("h2", { id: "Heading_2" }, "Heading 2"),
            ]
        ),
        React.createElement(
            "div",
            { id: "child_2" }, [
                React.createElement("h1", { id: "Heading_3" }, "Heading 3"),
                React.createElement("h2", { id: "Heading_4" }, "Heading 4"),
            ]
        ),
    ]
);

console.log(parent);

// Using UMD build of React (loaded via script tags in helloworld.html)
// React and ReactDOM are globals provided by the CDN scripts. If you later move to a bundler
// or modules, replace these with `import React from 'react'` and `import ReactDOM from 'react-dom/client'`.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);