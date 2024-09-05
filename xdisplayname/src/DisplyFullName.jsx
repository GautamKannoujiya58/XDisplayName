import React, { useEffect, useRef } from "react";
function DisplayFullName() {
  //   const [fullName, setFullName] = useState(null);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const fullNameRef = useRef(null);
  useEffect(() => {}, []);

  // using useRef
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    fullNameRef.current.textContent = `Full Name: ${firstName} ${lastName}`;
    console.log("firstNameRef >>>", firstName, firstNameRef);
    console.log("lastNameRef >>>", lastName, lastNameRef);
  };
  // using useState
  //   const handleSubmit = (e) => {
  //     // console.log("Submit clicked");
  //     e.preventDefault();
  //     // console.log("Form fields >>>", e);
  //     const firstName = e.target.elements.firstName.value;
  //     const lastName = e.target.elements.lastName.value;
  //     // console.log("firstName >>>", firstName, "lastName >>>", lastName);
  //     setFullName(firstName + " " + lastName);
  //   };
  //   console.log("Submit clicked");
  //   console.log("fullName >>>", fullName);
  //   console.log("Submit clicked");
  return (
    <>
      <h1>Full Name Display</h1>
      <form action="/submit-form" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          required
          type="text"
          id="firstName"
          name="firstName"
          ref={firstNameRef}
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          required
          type="text"
          id="lastName"
          name="lastName"
          ref={lastNameRef}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h3 ref={fullNameRef}></h3>
      {/* {fullNameRef.current.value && <h3 ref={fullNameRef}></h3>} */}
      {/* This can also be code as {fullName ? <h3>Full Name: {fullName}: null} */}
    </>
  );
}
export default DisplayFullName;
