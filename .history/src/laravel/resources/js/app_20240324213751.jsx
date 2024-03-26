import "../css/app.css"; 
import "./bootstrap";
import ReactDOM from "react-dom/client";
import exampleImage from "../../assets/images/flames-engulfed-the-burning-building-firefighters-worked-urgently-generated-by-ai_188544-40616.jpg"; // 画像をインポート
function App() {
  return (
    <div class="title">
      <h1>Hello world</h1>
      <p>これはReactで作成された新しいテキストです。</p>
      <img src={}></img>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
