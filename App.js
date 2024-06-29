import React from "react";
import ReactDOM from "react-dom/client";

/* JSX => Babel transpiles to React.createElement 
                     => React Element (JS object) => HTML element (render)
*/

/* React Element (Not JSX) */
const reactElem = React.createElement("h1", {}, "React element 🦚");

// JSX
const jsxHeading = <h1 className="heading">JSX element 🦋 </h1>;

const jsxHeading2 = (
  <div className="heading">
    {reactElem}
    {jsxHeading}
    {25 + 3534535}
    <h2>JSX heading 🔸 </h2>
    <div className="title">
      <h1>I am h1</h1>
      <h2>I am h2</h2>
      <h3>I am h3</h3>
    </div>
  </div>
);

//Functional Component

const FuncComponent = () => <h1>One line Func component 🎒</h1>;

const FuncComponent2 = () => {
  return <h1>Func component with a return</h1>;
};

const FuncComponent3 = () => (
  <div>
    {jsxHeading2}
    <FuncComponent />
    <FuncComponent2></FuncComponent2>
    <h1 className="heading">Multi-line Func component 🍀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FuncComponent3 />);
