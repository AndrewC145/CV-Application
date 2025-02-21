import { useState } from "react";

import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalSection from "./components/PersonalSection";
import EducationSection from "./components/EducationSection";

function App() {
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

  return (
    <div className="container mx-auto">
      <PersonalInfo personalInfo={personalInfo} handlePersonalInfo={setPersonalInfo} />
      <Education educationInfo={educations} handleEducationInfo={setEducations} />
      <Experience experienceInfo={experiences} handleExperienceInfo={setExperiences} />
      <PersonalSection personalInformation={personalInfo} />
      <EducationSection educationInformation={educations} />
    </div>
  );
}

export default App;
