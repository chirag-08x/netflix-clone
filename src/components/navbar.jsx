import styled from "styled-components";
import logo from "../assets/logo.png";
import user from "../assets/user.jpg";
import { Link } from "react-router-dom";
import { FaSearch, FaBell } from "react-icons/fa";

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

          <button>
            <FaBell />
          </button>

          <img src={user} alt="USER" className="user-img" />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: #000000;
  .section-center {
    padding: 1rem 0;
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    gap: 0 2rem;
    place-items: center;
  }

  .nav-header {
    width: 7rem;
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
      width: 2.5rem;
      border-radius: 0.3rem;
      cursor: pointer;
    }
  }
`;

export default Navbar;
