import "./App.css";
import CustomAppBar from "./atoms/hv-appbar";
import Navigation from "./components/router";
import LandingScreen from "./screens/landing";

function App() {
  return (
    <div className="App">
      <CustomAppBar label="Get Me Ticket" />
      <Navigation />
    </div>
  );
}

export default App;
