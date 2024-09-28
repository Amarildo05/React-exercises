import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  async function signUpUser() {
    if (!name || !email || !password || !checkPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== checkPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCTSIpXohgcKPlmZ07Ad-LO1Sj-GvFszUQ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, checkPassword }),
        }
      );
      const data = await response.json();
      console.log(data.error);
      if (data.error) {
        throw new Error("Something went wrong!");
      }
      const token = data.idToken;
      console.log(data);
      localStorage.setItem("token", token);
    } catch (e) {
      alert(e);
    }
  } 

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          width: "300px",
          gap: "5px",
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          style={{ height: "32px" }}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          style={{ height: "32px" }}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          style={{ height: "32px" }}
          type="password"
          placeholder="Password"
        />
        <input
          onChange={(e) => setCheckPassword(e.target.value)}
          style={{ height: "32px" }}
          type="password"
          placeholder="Confirm Password"
        />
      </form>
      <button style={{ marginLeft: "20px" }} onClick={signUpUser}>
        Sign Up
      </button>
    </div>
  );
}

// import { Button, Input } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const nav = useNavigate();

//   function isValidToken(expInSeconds) {
//     const now = new Date();

//     if (expInSeconds * 1000 > now.getTime()) return true;
//     return false;
//   }

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     const decoded = jwtDecode(token);
//     const isUserAuthenticated = isValidToken(decoded.exp);

//     if (isUserAuthenticated) {
//       //go to homepage
//       nav("/");
//     }
//   }, [nav]);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function login() {
//     fetch(
//       "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTSIpXohgcKPlmZ07Ad-LO1Sj-GvFszUQ",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       }
//     ).then((res) =>
//       res.json().then((data) => {
//         const token = data.idToken;
//         localStorage.setItem("token", token);
//         nav("/");
//       })
//     );
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <form style={{ maxWidth: 400 }}>
//         <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
//         <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
//         <Button onClick={login}>Login</Button>
//       </form>
//     </div>
//   );
// }

// export default Login;