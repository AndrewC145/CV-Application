import { useState } from "react";

function PersonalInfo({ personalInfo, handlePersonalInfo }) {
  const [name, setName] = useState(personalInfo.name);
  const [email, setEmail] = useState(personalInfo.email);
  const [phone, setPhone] = useState(personalInfo.phone);
  const [location, setLocation] = useState(personalInfo.location);

  const handleNameChange = (e) => {
    setName(e.target.value);
    handlePersonalInfo({ ...personalInfo, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    handlePersonalInfo({ ...personalInfo, email: e.target.value });
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    handlePersonalInfo({ ...personalInfo, phone: e.target.value });
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    handlePersonalInfo({ ...personalInfo, location: e.target.value });
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
          value={name}
          onChange={handleNameChange}
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
          onChange={handleEmailChange}
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
          onChange={handlePhoneChange}
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
          onChange={handleLocationChange}
        ></input>
      </label>
    </div>
  );
}

export default PersonalInfo;
