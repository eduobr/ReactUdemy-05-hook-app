import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;
  //Este efecto se va a ejecutar solo la primera vez
  useEffect(() => {
    // console.log("hey!");
  }, []);

  //Este efecto se va a ejecutar cada vez que algo cambie en el formState
  useEffect(() => {
    // console.log("formState cambió!");
  }, [formState]);

  //se va a ejecutar cuando cambie el email
  useEffect(() => {
    // console.log("email cambió!");
  }, [email]);

  const handleInputChange = ({target}) =>{
    setFormState({
        ...formState,
        [target.name]: target.value
    });
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name==='123' && <Message />}
    </>
  );
};
