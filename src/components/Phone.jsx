/* eslint-disable react/prop-types */
import { Container, SubContainer } from "./styles/Container.styled";
import { NumberTag, PhoneDiv, VerifyDiv } from "./styles/Phone.styled";

const Phone = () => {
  return (
    <Container>
      <div style={{ height: "30px", width: "100%" }}>
        
      </div>
      <SubContainer>
        <PhoneDiv>
          <img
            src="https://img.freepik.com/premium-vector/smartphone-hand-illustration_179970-1016.jpg"
            alt=""
          />
        </PhoneDiv>
        <VerifyDiv>
          <div>
            <span style={{ fontSize: "0.8rem" }}>MOBILE NUMBER VERIFIED</span>
          </div>
          <p style={{ marginLeft: "7px" }}>Complete your Sign Up</p>
        </VerifyDiv>
      </SubContainer>
      <NumberTag>
        <div>
          <span>Mobile Number</span>
          <p>989845326123</p>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQkaYHQ2yVyMi97CMgqjRSLB4HNIie8byrg&usqp=CAU"
          alt=""
        />
      </NumberTag>
    </Container>
  );
};

export default Phone;
