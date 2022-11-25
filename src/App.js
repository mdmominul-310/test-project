import { Container } from "react-bootstrap";
import Footer from "./Footer/Footer";
import Navigation from "./Header/Navigation";
import MainContent from "./MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
        <MainContent />

      </Container>
      <Footer />
    </div>
  );
}

export default App;
