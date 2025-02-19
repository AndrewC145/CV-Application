import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="container mx-auto">
      <PersonalInfo />
      <Education />
      <Experience />
      <Resume />
    </div>
  );
}

export default App;
