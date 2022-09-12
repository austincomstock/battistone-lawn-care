import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap for Carousel https://react-bootstrap.github.io/components/carousel/

//COMPONENTS
import { Top } from "./components/Top/Top";
import { Navigation } from "./components/Navigation/Navigation";
import { Media } from "./components/Media/Media";
import { About } from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Top />
      <Navigation />
      <Media />
      <About />
    </div>
  );
}

export default App;
