import wide from './WidePeepoHappy.png';
import './App.css';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={wide} alt="widepeepohappy" />
      <span className="emoji" role="img" aria-label="pointing right">
        &#128073;
      </span>
      <span className="emoji" role="img" aria-label="heart">
        &#128151;
      </span>
        </header>
    </div>
  );
}
reportWebVitals(console.log);
export default App;
