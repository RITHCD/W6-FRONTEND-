import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";
import Scores from "./components/Scores";
import { JAVA_RESULTS } from "./data.js";

function App() {
  return (
    <>
      <Header batchName="Java" />
      

      <main className="scores-container">
        <Scores courseName="JAVA" courseResults={JAVA_RESULTS} />
      </main>
    </>
  );
}

export default App;
