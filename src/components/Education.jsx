import { useState } from "react";
import DeleteIcon from "../svg/delete.svg";

function Education() {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [educations, setEducations] = useState([]);

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
      setEducations((prevEducations) => [
        ...prevEducations,
        { school, degree, startDate, endDate, location },
      ]);
      setSchool("");
      setDegree("");
      setStartDate("");
      setEndDate("");
      setLocation("");
    }
  };

  const removeEducation = (index) => {
    const updatedEducations = educations.filter((_, i) => i !== index);
    setEducations(updatedEducations);
  };

  return (
    <div className="flex flex-col gap-4 p-4 md:w-[35%] lg:w-[30%]">
      <h1 className="text-2xl font-bold">Education</h1>
      <div className="flex flex-col gap-4">
        {educations.map((education, index) => (
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
      <label htmlFor="startDateNum" className="flex flex-col font-medium">
        Start Date
        <input
          type="text"
          id="startDateNum"
          placeholder="Example: 2018"
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
          value={startDate}
          onChange={handleStartDate}
        ></input>
      </label>
      <label htmlFor="endDate" className="flex flex-col font-medium">
        End Date
        <input
          type="text"
          id="endDate"
          placeholder="Example: 2022"
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
          value={endDate}
          onChange={handleEndDate}
        ></input>
      </label>
      <label htmlFor="location" className="flex flex-col font-medium">
        Location
        <input
          type="text"
          id="endDate"
          placeholder="Example: Cambridge, MA"
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
          value={location}
          onChange={handleLocation}
        ></input>
      </label>
      <button
        onClick={addEducation}
        className="w-[30%] cursor-pointer rounded-md bg-blue-500 p-2 text-white"
      >
        Add Education
      </button>
    </div>
  );
}

export default Education;
