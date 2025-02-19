import { useState } from "react";

function Experience() {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

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

  return (
    <div className="flex flex-col gap-4 p-4 md:w-[35%] lg:w-[30%]">
      <h1 className="text-2xl font-bold">Work Experience</h1>
      <label htmlFor="companyName" className="flex flex-col font-medium">
        Company Name
        <input
          type="text"
          id="companyName"
          placeholder="Example: Harvard University"
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
          placeholder="Example: Bachelor of Science in Computer Science"
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
      </div>
      <label htmlFor="location" className="flex flex-col font-medium">
        Location
        <input
          type="text"
          id="location"
          placeholder="Example: Cambridge, MA"
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
    </div>
  );
}

export default Experience;
