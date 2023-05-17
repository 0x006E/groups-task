import "bootstrap";
import "./App.scss";
import BodySection from "./components/BodySection/BodySection";
import HeaderSection from "./components/HeaderSection/HeaderSection";

function App() {
  return (
    <div className="container-fluid p-0 min-vh-100 bg-gray-200">
      <HeaderSection />
      <BodySection />
    </div>
  );
}

export default App;
