import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Download from "./components/Download";

function App() {
  // Starting State for the Personal Information, Education, Experience, and Skills
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123-456-7890",
    location: "New York, NY",
  });

  const [educations, setEducations] = useState([
    {
      id: crypto.randomUUID(),
      school: "University of California, Berkeley",
      degree: "Bachelor of Science",
      startDate: "2010",
      endDate: "2014",
      location: "Berkeley, CA",
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "Google",
      position: "Software Engineer",
      startDate: "2015",
      endDate: "2017",
      location: "Mountain View, CA",
      description: "Worked on the Google Search team.",
    },
    {
      id: crypto.randomUUID(),
      companyName: "Facebook",
      position: "Product Manager",
      startDate: "2018",
      endDate: "2020",
      location: "Menlo Park, CA",
      description: "Managed the development of Facebook's mobile app.",
    },
    {
      id: crypto.randomUUID(),
      companyName: "Amazon",
      position: "Data Analyst",
      startDate: "2020",
      endDate: "2022",
      location: "Seattle, WA",
      description: "Analyzed customer data to improve sales.",
    },
  ]);

  const [skills, setSkills] = useState([
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "HTML",
    "CSS",
  ]);

  // Returned JSX
  return (
    <div className="container mx-auto flex flex-col lg:flex-row">
      <div className="flex flex-col gap-4 sm:w-full lg:w-[30%]">
        {/* Personal Information, Education, Experience, and Skills Components */}
        <PersonalInfo personalInfo={personalInfo} handlePersonalInfo={setPersonalInfo} />{" "}
        {/* Pass personalInfo and setPersonalInfo as props to be used */}
        <Education educationInfo={educations} handleEducationInfo={setEducations} />{" "}
        {/* Pass educations and setEducations as props to be used */}
        <Experience experienceInfo={experiences} handleExperienceInfo={setExperiences} />{" "}
        {/* Pass experiences and setExperiences as props to be used */}
        <Skills skills={skills} handleSkills={setSkills} />{" "}
        {/* Pass skills and setSkills as props to be used */}
      </div>
      <div className="flex flex-col gap-4 sm:w-full lg:w-[70%]">
        <Resume
          personalInformation={personalInfo}
          educationInformation={educations}
          experienceInformation={experiences}
          skillsInformation={skills}
        />
        {/* Pass necessary props to be used in the resume component */}
        <div className="flex justify-center">
          <Download />
        </div>
      </div>
    </div>
  );
}

export default App;
