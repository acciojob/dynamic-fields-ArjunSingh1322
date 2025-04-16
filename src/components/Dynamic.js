

// import React, { useState } from "react";

// const Dynamic = () => {
//   const [fields, setFields] = useState([]); 
//   const[value,savevalue] = useState({
//     name:"",
//     age: ""
//   })

//   const addField = () => {
//     setFields([...fields, ""]); 
//   };
//   function Delete(index){
// let temp = [...fields]
// temp.splice(index,1)
// setFields(temp)
//   }
//   function submit(){
//     console.log(value)

//   }

//   function remove(){
    
//   }
//   return (
//     <div>
//       <h3>Dynamic Input Fields</h3>

//       <input type = "text"
//       placeholder="Name"
//       onChange={e=> savevalue({...value,name:e.target.value})}
// />
//       <input type = "text"
//       placeholder="age"
//       onChange={e=> savevalue({...value,age:e.target.value})}
// />
// <button onClick={remove}>Remove</button>

//       {fields.map((val, index) => (
//         <div>
//         <input
//           placeholder={`Name`}
//           onChange={e=> savevalue({...value,name:e.target.value})}
//         />
//         <input key={index}
//         placeholder={`Age`}
//         onChange={e=>savevalue({...value,age:e.target.value})}
// />
//         <button onClick={()=>Delete(index)}>Remove</button>

//         </div>
//       ))}
//       <button onClick={addField}> Add Field</button>
//       <button onClick={submit}>Submit</button>
//     </div>
//   );
// };

// export default Dynamic




import React, { useState } from "react";

const Dynamic = () => {
  const [fields, setFields] = useState([]);
  const [value, savevalue] = useState({ name: "", age: "" });

  const addField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFields = [...fields];
    updatedFields[index][name] = value;
    setFields(updatedFields);
  };

  const Delete = (index) => {
    const updated = [...fields];
    updated.splice(index, 1);
    setFields(updated);
  };

  const submit = () => {
    console.log("Static input:", value);
    console.log("Dynamic fields:", fields);
  };

  const remove = () => {
    savevalue({ name: "", age: "" });
  };

  return (
    <div>
      <h3>Dynamic Input Fields</h3>

      <input
        type="text"
        placeholder="Name"
        value={value.name}
        onChange={(e) => savevalue({ ...value, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Age"
        value={value.age}
        onChange={(e) => savevalue({ ...value, age: e.target.value })}
      />
      <button onClick={remove}>Remove</button>

      {fields.map((val, index) => (
        <div key={index}>
          <input
            name="name"
            placeholder="Name"
            value={val.name || ""}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            name="age"
            placeholder="Age"
            value={val.age || ""}
            onChange={(e) => handleChange(index, e)}
          />
          <button onClick={() => Delete(index)}>Remove</button>
        </div>
      ))}

      <button onClick={addField}>Add Field</button>
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Dynamic;
