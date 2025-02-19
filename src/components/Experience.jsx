import { useState } from "react";
import DeleteIcon from "../svg/delete.svg";

function Experience() {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState([]);

  const handleCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const handlePosition = (e) => {
    setPosition(e.target.value);
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

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const addExperience = () => {
    if (companyName.trim() !== "" && position.trim() !== "") {
      setExperience((prevExperience) => [
        ...prevExperience,
        { companyName, position, startDate, endDate, location, description },
      ]);

      setCompanyName("");
      setPosition("");
      setStartDate("");
      setEndDate("");
      setLocation("");
      setDescription("");
    }
  };

  const removeExperience = (index) => {
    const updatedExperiences = experience.filter((_, i) => i !== index);
    setExperience(updatedExperiences);
  };

  return (
    <div className="flex flex-col gap-4 p-4 md:w-[35%] lg:w-[30%]">
      <h1 className="text-2xl font-bold">Work Experience</h1>
      <div className="flex flex-col gap-4">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center justify-between gap-4 rounded-md border-2 border-red-300 p-2"
          >
            <h2 className="text-lg font-bold break-all">{exp.companyName}</h2>
            <p className="text-md">{exp.position}</p>
            <img
              src={DeleteIcon}
              onClick={() => removeExperience(index)}
              alt="delete-icon"
              className="size-6 cursor-pointer"
            ></img>
          </div>
        ))}
      </div>
      <label htmlFor="companyName" className="flex flex-col font-medium">
        Company Name
        <input
          type="text"
          id="companyName"
          placeholder="Example: Royal Bank of Canada"
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
          value={companyName}
          onChange={handleCompanyName}
        ></input>
      </label>
      <label htmlFor="position" className="flex flex-col font-medium">
        Email
        <input
          type="text"
          id="position"
          placeholder="Example: Financial Analyst"
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
          value={position}
          onChange={handlePosition}
        ></input>
      </label>
      <div className="flex flex-col gap-7 md:flex-row">
        <label htmlFor="startDateNum" className="flex flex-col font-medium">
          Start Date
          <input
            type="text"
            id="startDateNum"
            placeholder="Example: 2019"
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
            placeholder="Example: 2024"
            className="rounded-md border-2 border-gray-300 p-2 font-normal"
            value={endDate}
            onChange={handleEndDate}
          ></input>
        </label>
      </div>
      <label htmlFor="location" className="flex flex-col font-medium">
        Location
        <input
          type="text"
          id="location"
          placeholder="Example: Toronto, CA"
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
          value={location}
          onChange={handleLocation}
        ></input>
      </label>
      <label htmlFor="description" className="flex flex-col font-medium">
        Description
        <textarea
          id="description"
          value={description}
          onChange={handleDescription}
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
        ></textarea>
      </label>
      <button
        className="w-[50%] cursor-pointer rounded-md bg-blue-500 p-2 text-white sm:w-[30%] md:w-[60%] xl:w-[40%]"
        onClick={addExperience}
      >
        Add Experience
      </button>
    </div>
  );
}

export default Experience;
