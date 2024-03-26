import "../css/app.css"; 
import "./bootstrap";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello world</h1>;
}

function APP2() {
  return <h2>whitecul</h2>
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
