import "../css/app.css"; 
import "./bootstrap";
import ReactDOM from "react-dom/client";

function App() {
  return (
  <h1>Hello world</h1>
  <p>これはReactで作成された新しいテキストです。</p>
  );
}



const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
