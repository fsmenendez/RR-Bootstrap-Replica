import "./App.css";
import TopBar from "./components/TopBar";
import BackgroundImage from "./components/BackgroundImage";
import StoreListings from "./components/StoreListings";

function App() {
  return (
    <div className="App">
      <TopBar />
      <BackgroundImage />
      <StoreListings />
    </div>
  );
}

export default App;
