/* eslint-disable react/prop-types */
import { Container } from "./styles/Container.styled";
import { ButtonDiv } from "./styles/Button.styled";

const Button = ({ auth, user }) => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <Container>
      {user ? (
        <ButtonDiv onClick={logout}>
          <p>LOGOUT</p>
        </ButtonDiv>
      ) : (
        <ButtonDiv onClick={google}>
          <p style={{ color: "#fff"}}>{auth || "Create an account"}</p>
        </ButtonDiv>
      )}
    </Container>
  );
};

export default Button;
