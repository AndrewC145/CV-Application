import { useState } from "react";

function PersonalInfo() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 p-4 md:w-[35%] lg:w-[30%]">
      <h1 className="text-2xl font-bold">Personal Information</h1>
      <label htmlFor="name" className="flex flex-col font-medium">
        Full Name
        <input
          type="text"
          id="name"
          placeholder="Example: John Doe"
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
          value={fullName}
          onChange={handleFullName}
        ></input>
      </label>
      <label htmlFor="email" className="flex flex-col font-medium">
        Email
        <input
          type="email"
          id="email"
          placeholder="Example: johndoe@gmail.com"
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
          value={email}
          onChange={handleEmail}
        ></input>
      </label>
      <label htmlFor="phoneNum" className="flex flex-col font-medium">
        Phone Number
        <input
          type="tel"
          id="phoneNum"
          placeholder="Example: 123-456-7890"
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
          value={phone}
          onChange={handlePhone}
        ></input>
      </label>
      <label htmlFor="location" className="flex flex-col font-medium">
        Location
        <input
          type="text"
          id="location"
          placeholder="Example: New York, NY"
          className="rounded-md border-2 border-gray-300 p-2 font-normal"
          value={location}
          onChange={handleLocation}
        ></input>
      </label>
    </div>
  );
}

export default PersonalInfo;
