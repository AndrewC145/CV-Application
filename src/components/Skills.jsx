import { useState } from "react";

// personalSkills and handleSkills are passed as props from App.jsx by the default skills and setSkills state variables
function Skills({ personalSkills, handleSkills }) {
  // State for the Skills
  const [skills, setSkills] = useState(personalSkills || "");

  const handleSkillsChange = (e) => {
    setSkills(e.target.value.split(","));
    handleSkills(e.target.value.split(","));
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Skills</h1>
      <label htmlFor="skills" className="flex flex-col font-medium">
        Skills
        <input
          type="text"
          id="skills"
          placeholder="Example: HTML, CSS, JavaScript"
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
          value={skills}
          onChange={handleSkillsChange}
        ></input>
      </label>
    </div>
  );
}

export default Skills;
