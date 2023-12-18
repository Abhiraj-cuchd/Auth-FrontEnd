/* eslint-disable react/prop-types */
import {
  BottomNav,
  Line,
  Menu,
  MenuIcons,
  MidNav,
  Pincode,
  Profile,
  Refer,
  SearchBar,
  StyledHeader,
  UpperNav,
} from "./styles/Header.styled";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import HeaderData from "../utils/HeaderData";

// eslint-disable-next-line react/prop-types
const Header = ({ user }) => {
  return (
    <StyledHeader>
      <UpperNav>
        <div></div>
        <Refer>
          <p>
            Refer and earn extra discount{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Click here...
            </a>
          </p>
        </Refer>
        <Pincode>
          <p>Pincode</p>
          <MdOutlineLocationOn />
          <img
            src="https://t4.ftcdn.net/jpg/04/47/90/13/360_F_447901399_5oTnw1t2gsMr4zMj64w6lyFtF78bcQh4.jpg"
            alt=""
          />
        </Pincode>
      </UpperNav>
      <MidNav>
        <img src="https://www.garnetlanee.com/img/garnet_logo_new.svg" alt="" />
        <SearchBar>
          <input type="text" placeholder="Search Products..." />
          <div>
            <IoSearch />
          </div>
        </SearchBar>
        <Menu>
          <MenuIcons>
            {HeaderData.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div>
                  <item.icon
                    style={{
                      color: "#ff7d14",
                    }}
                  />
                </div>
                <span>{item.title}</span>
              </div>
            ))}
          </MenuIcons>
        </Menu>
        <Profile>
          <div>
            <div
              style={{
                backgroundColor: "#fff",
                height: "30px",
                width: "30px",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaRegUser />
            </div>
            {user ? <p>Hi, {user.displayName}</p> : <p>Login</p>}
          </div>
          <Line>
            <p style={{ color: "#f94327" }}>
              <span style={{ height: "2px" }}>_______________________</span>
            </p>
          </Line>
        </Profile>
      </MidNav>
      <BottomNav>
        <ul>
          <li>NEW ARRIVAL</li>
          <li>RINGS</li>
          <li>EARRINGS</li>
          <li>PENDANTS</li>
          <li>BRACELETS & BANGLES</li>
          <li>SOLITAIRES</li>
          <li>GOLD COINS</li>
          <li>ALL JEWELLERY</li>
        </ul>
      </BottomNav>
    </StyledHeader>
  );
};

export default Header;
