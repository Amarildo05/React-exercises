import { useState } from "react";

function TwoInputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} />
      <input type="email" name="" id="" placeholder="email" onChange={(event) => setEmail(event.target.value)} />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default TwoInputs;
