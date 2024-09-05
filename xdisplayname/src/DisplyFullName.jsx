import React, { useState } from "react";
function DisplayFullName() {
  const [fullName, setFullName] = useState(null);

  const handleSubmit = (e) => {
    console.log("Submit clicked");
    e.preventDefault();
    console.log("Form fields >>>", e);
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    console.log("firstName >>>", firstName, "lastName >>>", lastName);
    setFullName(firstName + " " + lastName);
  };

  console.log("fullName >>>", fullName);

  return (
    <>
      <h1>Full Name Display</h1>
      <form action="/submit-form" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input required type="text" id="firstName" name="firstName" />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input required type="text" id="lastName" name="lastName" />
        <br />
        <button>Submit</button>
      </form>
      <h3>Full Name: {fullName}</h3>
    </>
  );
}
export default DisplayFullName;
