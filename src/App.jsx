import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import CustomCursor from "./component/CustomCursor";
function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
