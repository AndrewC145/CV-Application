import { useState } from "react";
import DeleteIcon from "../svg/delete.svg";

// experienceInfo and handleExperienceInfo are passed as props from App.jsx by the default experiences and setExperiences state variables
function Experience({ experienceInfo, handleExperienceInfo }) {
  const [companyName, setCompanyName] = useState(experienceInfo.companyName || "");
  const [position, setPosition] = useState(experienceInfo.position || "");
  const [startDate, setStartDate] = useState(experienceInfo.startDate || "");
  const [endDate, setEndDate] = useState(experienceInfo.endDate || "");
  const [location, setLocation] = useState(experienceInfo.location || "");
  const [description, setDescription] = useState(experienceInfo.description || "");

  // Functions to handle the changes in the Experience Information
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
      // Creates a new experience object containing the companyName, position, start date, end date, location, and description state variables
      const newExperience = {
        id: crypto.randomUUID(),
        companyName,
        position,
        startDate,
        endDate,
        location,
        description,
      };

      // Updates the experienceInfo state with the new experience object
      handleExperienceInfo((prevExperience) => {
        const updatedExperiences = [...prevExperience, newExperience];
        return updatedExperiences;
      });

      setCompanyName("");
      setPosition("");
      setStartDate("");
      setEndDate("");
      setLocation("");
      setDescription("");
    }
  };

  // Updates the experienceInfo state by filtering out the experience object at the specified index
  const removeExperience = (index) => {
    handleExperienceInfo((prevExperience) => {
      const updatedExperiences = prevExperience.filter((_, i) => i !== index);
      console.log(updatedExperiences);
      return updatedExperiences;
    });
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Work Experience</h1>
      <div className="flex flex-col gap-4">
        {/* Maps through the experienceInfo array and displays the company name and position */}
        {experienceInfo.map((exp, index) => (
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
        <label htmlFor="workStart" className="flex flex-col font-medium">
          Start Date
          <input
            type="text"
            id="workStart"
            placeholder="Example: 2019"
            className="w-full rounded-md border-2 border-gray-300 p-2 font-normal"
            value={startDate}
            onChange={handleStartDate}
          ></input>
        </label>
        <label htmlFor="workEnd" className="flex flex-col font-medium">
          End Date
          <input
            type="text"
            id="workEnd"
            placeholder="Example: 2024"
            className="w-full rounded-md border-2 border-gray-300 p-2 font-normal"
            value={endDate}
            onChange={handleEndDate}
          ></input>
        </label>
      </div>
      <label htmlFor="workLocation" className="flex flex-col font-medium">
        Location
        <input
          type="text"
          id="workLocation"
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
