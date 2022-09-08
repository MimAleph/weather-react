import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>

        <Search />
      </header>
      <Footer />
    </div>
  );
}

export default App;
