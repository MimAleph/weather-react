import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container ">
        <Weather defaultCity="Berlin" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
