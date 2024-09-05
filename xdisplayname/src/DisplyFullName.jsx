import React, { useState } from "react";
function DisplayFullName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlasttName] = useState("");
  const [fullName, setFullName] = useState("");
  const handlefirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleSecondNameChange = (e) => {
    setlasttName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(firstName + " " + lastName);
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form action="/submit-form" method="POST">
        <label htmlFor="firstName">First Name:</label>
        <input
          onChange={handlefirstNameChange}
          required
          type="text"
          id="firstName"
          name="firstName"
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          onChange={handleSecondNameChange}
          required
          type="text"
          id="lastName"
          name="lastName"
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <h3>Full Name: {fullName}</h3>
    </>
  );
}
export default DisplayFullName;
