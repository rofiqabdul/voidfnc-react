import { useState } from "react";

const FormPage = () => {
  const [fullNameInput, setFullNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleSubmit = () => {
    alert(`Form submitted`);
  };

  return (
    <div>
      <h1>Form Page</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          maxWidth: "250px",
        }}
      >
        <label htmlFor="full-name">Full Name</label>
        <input
          onChange={(event) => setFullNameInput(event.target.value)}
          id="full-name"
          type="text"
          value={fullNameInput}
        />

        <label htmlFor="password">Password</label>
        <input
          onChange={(event) => setPasswordInput(event.target.value)}
          id="password"
          type="password"
          value={passwordInput}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FormPage;
