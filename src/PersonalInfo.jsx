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
    <div className="flex flex-col gap-4">
      <h1>Personal Information</h1>
      <label htmlFor="name" className="flex flex-col">
        Full Name
        <input
          type="text"
          id="name"
          placeholder="Example: John Doe"
          value={fullName}
          onChange={handleFullName}
        ></input>
      </label>
      <label htmlFor="email" className="flex flex-col">
        Email
        <input
          type="email"
          id="email"
          placeholder="Example: johndoe@gmail.com"
          value={email}
          onChange={handleEmail}
        ></input>
      </label>
      <label htmlFor="phoneNum" className="flex flex-col">
        Phone Number
        <input
          type="tel"
          id="phoneNum"
          placeholder="Example: 123-456-7890"
          value={phone}
          onChange={handlePhone}
        ></input>
      </label>
      <label htmlFor="location" className="flex flex-col">
        Location
        <input
          type="text"
          id="location"
          placeholder="Example: New York, NY"
          value={location}
          onChange={handleLocation}
        ></input>
      </label>
    </div>
  );
}

export default PersonalInfo;
