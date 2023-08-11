import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingScreen from "../../screens/landing";
import PageNotFound from "../../screens/pagenotfound/pagenotfound";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/home" element={<LandingScreen />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
