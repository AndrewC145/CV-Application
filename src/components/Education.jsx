import { useState } from "react";
import DeleteIcon from "../svg/delete.svg";

function Education({ educationInfo, handleEducationInfo }) {
  const [school, setSchool] = useState(educationInfo.school || "");
  const [degree, setDegree] = useState(educationInfo.degree || "");
  const [startDate, setStartDate] = useState(educationInfo.startDate || "");
  const [endDate, setEndDate] = useState(educationInfo.endDate || "");
  const [location, setLocation] = useState(educationInfo.location || "");

  const handleSchool = (e) => {
    setSchool(e.target.value);
  };

  const handleDegree = (e) => {
    setDegree(e.target.value);
  };

  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const addEducation = () => {
    if (school.trim() !== "" && degree.trim() !== "") {
      const newEducation = {
        id: crypto.randomUUID(),
        school,
        degree,
        startDate,
        endDate,
        location,
      };
      handleEducationInfo((prevEducation) => {
        const updatedEducation = [...prevEducation, newEducation];
        console.log(updatedEducation);
        return updatedEducation;
      });
      setSchool("");
      setDegree("");
      setStartDate("");
      setEndDate("");
      setLocation("");
    }
  };

  const removeEducation = (index) => {
    handleEducationInfo((prevEducation) => {
      const updatedEducation = prevEducation.filter((_, i) => i !== index);
      console.log(updatedEducation);
      return updatedEducation;
    });
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Education</h1>
      <div className="flex flex-col gap-4">
        {educationInfo.map((education, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center justify-between gap-4 rounded-md border-2 border-red-300 p-2"
          >
            <h2 className="text-lg font-bold break-all">{education.school}</h2>
            <p className="text-md">{education.degree}</p>
            <img
              src={DeleteIcon}
              onClick={() => removeEducation(index)}
              alt="delete-icon"
              className="size-6 cursor-pointer"
            ></img>
          </div>
        ))}
      </div>
      <label htmlFor="school" className="flex flex-col font-medium">
        School
        <input
          type="text"
          id="school"
          placeholder="Example: Harvard University"
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
          value={school}
          onChange={handleSchool}
        ></input>
      </label>
      <label htmlFor="degree" className="flex flex-col font-medium">
        Degree
        <input
          type="text"
          id="degree"
          placeholder="Example: Bachelor of Science in Computer Science"
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
          value={degree}
          onChange={handleDegree}
        ></input>
      </label>
      <div className="flex flex-col gap-7 md:flex-row">
        <label htmlFor="schoolStart" className="flex flex-col font-medium">
          Start Date
          <input
            type="text"
            id="schoolStart"
            placeholder="Example: 2018"
            className="w-full rounded-md border-2 border-gray-300 p-2 font-normal"
            value={startDate}
            onChange={handleStartDate}
          ></input>
        </label>
        <label htmlFor="schoolEnd" className="flex flex-col font-medium">
          End Date
          <input
            type="text"
            id="schoolEnd"
            placeholder="Example: 2022"
            className="w-full rounded-md border-2 border-gray-300 p-2 font-normal"
            value={endDate}
            onChange={handleEndDate}
          ></input>
        </label>
      </div>
      <label htmlFor="schoolLocation" className="flex flex-col font-medium">
        Location
        <input
          type="text"
          id="schoolLocation"
          placeholder="Example: Cambridge, MA"
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
          value={location}
          onChange={handleLocation}
        ></input>
      </label>
      <button
        onClick={addEducation}
        className="w-[50%] cursor-pointer rounded-md bg-blue-500 p-2 text-white sm:w-[30%] md:w-[60%] xl:w-[40%]"
      >
        Add Education
      </button>
    </div>
  );
}

export default Education;
