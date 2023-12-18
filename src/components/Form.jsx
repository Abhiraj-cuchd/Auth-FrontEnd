/* eslint-disable react/prop-types */
import { Container } from "./styles/Container.styled";
import { InputBar, SelectBar } from "./styles/Form.styled";
import { ImLocation2 } from "react-icons/im";

const Form = ({ user }) => {
  return (
    <Container>
      {user ? (
        <img
          style={{ marginLeft: "12rem", borderRadius: "50%", marginBottom: "1rem" }}
          src={user?.photos[0]?.value}
          alt=""
        />
      ) : (
        <div style={{ height: "70px" }}></div>
      )}

      <InputBar>
        <input
          type="text"
          placeholder="Full Name"
          defaultValue={user ? user.displayName : ""}
        />
      </InputBar>
      <InputBar>
        <div>
          <input type="email" placeholder="Email (Optional)" />
        </div>
      </InputBar>
      <InputBar>
        <div>
          <ImLocation2 />
          <span>Location</span>
        </div>

        <select name="" id="">
          <option
            value="New York"
            style={{ color: "#f94327", fontSize: "0.8rem" }}
          >
            <span style={{ color: "#f94327", fontSize: "0.8rem" }}>
              CURRENT LOCATION
            </span>
          </option>
          <option value="London">London</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Melbourne">Melbourne</option>
          <option value="Russia">Russia</option>
        </select>
      </InputBar>
      <div
        style={{
          display: "flex",
          width: "40%",
          justifyContent: "space-between",
          gap: "3rem",
        }}
      >
        <div>
          <label style={{ color: "#f94327" }}>Gender: </label>
          <SelectBar>
            <select>
              <option style={{ color: "#f94327" }} value="" disabled selected>
                Select
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
            </select>
          </SelectBar>
        </div>
        <div>
          <label style={{ color: "#f94327" }}>DOB : </label>
          <SelectBar>
            <input
              type="date"
              placeholder="Select"
              onFocus="(this.type='date')"
            />
          </SelectBar>
        </div>
      </div>
      <p style={{ marginTop: "2rem" }}>
        By continuing, I agree to the{" "}
        <span style={{ color: "#f94327" }}>Terms of Use & Privacy Policy</span>
      </p>
    </Container>
  );
};

export default Form;
