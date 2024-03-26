import "../css/app.css"; 
import "./bootstrap";
import ReactDOM from "react-dom/client";
import exampleImage from "src/laravel/assets"; // 画像をインポート
function App() {
  return (
    <div class="title">
      <h1>Hello world</h1>
      <p>これはReactで作成された新しいテキストです。</p>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
