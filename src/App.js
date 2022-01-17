import "./App.css";
import Body from "./components/Body";
import Card from "./components/Card";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { objOne, objThree, objTwo } from "./data";

function App() {
  return (
    <>
      <Header />
      <Body>
        <Card {...objOne} />
        <Card {...objTwo} />
        <Card {...objThree} />
        <Community />
      </Body>
      <Footer />
    </>
  );
}

export default App;
