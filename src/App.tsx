import "./App.css";
import CustomAppBar from "./atoms/hv-appbar";
import Navigation from "./components/router";
import { Provider } from "react-redux";
import Store from "./redux";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <CustomAppBar label="Get Me Ticket" />
        <Navigation />
      </Provider>
    </div>
  );
}

export default App;
