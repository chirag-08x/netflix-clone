import styled from "styled-components";
import logo from "../assets/logo.png";
import user from "../assets/user.jpg";
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";
import Notifications from "./notifications";

const Navbar = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <div className="nav-header">
          <img src={logo} alt="NETFLIX" />
        </div>

        <ul className="nav-links">
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/list"}>list</Link>
          </li>
        </ul>

        <div></div>

        <div className="helpers">
          <button>
            <FaSearch />
          </button>

          <button className="notification-icon">
            <FaBell />
            {/* <Notifications /> */}
          </button>

          <img src={user} alt="USER" className="user-img" />

          <button>
            <FaCaretDown />
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: #000000;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  .section-center {
    padding: 1rem 0;
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    gap: 0 2rem;
    place-items: center;
  }

  .notification-icon {
    position: relative;
    .notification-wrapper {
      position: absolute;
      top: 180%;
      left: -27rem;
    }

    &:hover .notification-wrapper {
      display: block;
    }
  }

  .nav-header {
    width: 4rem;
  }

  .nav-links {
    display: flex;
    align-items: center;
    color: white;
    gap: 0 1rem;

    li {
      text-transform: capitalize;
      font-family: sans-serif;
      font-size: 0.9rem;
      font-weight: 400;
      letter-spacing: 1px;
      * {
        color: white;
      }
    }
  }

  .helpers {
    display: flex;
    gap: 0 1.5rem;
    align-items: center;

    button {
      border: none;
      background-color: transparent;
      color: white;
      font-size: 1.25rem;
    }

    .user-img {
      width: 1.8rem;
      border-radius: 0.3rem;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    .nav-header {
      width: 7rem;
    }

    .user-img {
      width: 2.5rem;
    }
  }
`;

export default Navbar;
