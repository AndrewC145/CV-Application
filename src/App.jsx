import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="container mx-auto">
      <PersonalInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
