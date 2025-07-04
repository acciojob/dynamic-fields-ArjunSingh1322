
// import React from "react";
// import './../styles/App.css';
// import Dynamic from "./dynamic";

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//         <Dynamic />
//     </div>
//   )
// }

// export default App
// ;


import React, { useState } from "react";

const App = () => {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  function handleAddField() {
    setFields([...fields, { name: "", age: "" }]);
  }

  function handleRemoveField(index) {
    const newFields = [...fields];
    newFields.splice(index, 1); // splice se item remove hota hai
    setFields(newFields);
  }

  function handleInputChange(index, event) {
    const { name, value } = event.target;
    const newFields = [...fields];
    newFields[index][name] = value;
    setFields(newFields);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(fields); // Submit pe pura data console me
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleInputChange(index, e)}
            />
            <input
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleInputChange(index, e)}
            />
            <button
              type="button"
              onClick={() => handleRemoveField(index)}
            >
              Remove
            </button>
            <br />
          </div>
        ))}

        <button type="button" onClick={handleAddField}>Add More...</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;