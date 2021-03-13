import './App.css';

/**
 * この関数内に HTML を書くと表示されます。
 */
function App() {
  return (
    <div className="app">
      <h1>今回はスタイリングを学びます</h1>
      <p>CSS を使って見た目を整えます。App.js と App.css を見てみましょう</p>
      <h1>文字の色を変えたり</h1>
      <p className="red">この文字の色は赤です</p>
      <h1>写真を表示したり</h1>
      <p>
        <img src="https://picsum.photos/400/200" />
      </p>
      <h1>ボタンなどのインプット要素を置くこともできます</h1>
      <p>
        <div>
          <button>ボタン</button>
        </div>
        <div>
          <input />
        </div>
      </p>
    </div>
  );
}

export default App;
