import { useEffect, useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import Header from "./components/Header";
import Phone from "./components/Phone";
import GlobalStyles from "./components/styles/Globals";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header user={user} />
      <Phone user={user} />
      <Form user={user} />
      <Button auth="Login with Google" user={user} />
    </>
  );
}

export default App;
