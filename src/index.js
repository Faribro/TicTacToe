import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// const hydra = ReactDOM.hydrateRoot(tick, element);
// const hydraEl = <h2>My name is Hydrate, not Hydra! Did you get it now!</h2>;
// hydra.render(hydraEl, element);

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }

// setTimeout(tick, 100);
