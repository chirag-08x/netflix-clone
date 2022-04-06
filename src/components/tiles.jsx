import { useState, useRef } from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ImageURL = `https://image.tmdb.org/t/p/original`;

const Tiles = ({ movies }) => {
  const [data, setData] = useState([...movies]);
  const currentTileIdx = 0;
  const refContainer = useRef(null);
  const refContainer2 = useRef(null);

  const displaybuttons = () => {
    refContainer.current.classList.add("show-btns");
    refContainer2.current.classList.add("show-btns");
  };

  const hidebuttons = () => {
    refContainer.current.classList.remove("show-btns");
    refContainer2.current.classList.remove("show-btns");
  };

  return (
    <Wrapper onMouseOver={displaybuttons} onMouseLeave={hidebuttons}>
      <button className="left" ref={refContainer}>
        <FaAngleLeft />
      </button>

      <button className="right" ref={refContainer2}>
        <FaAngleRight />
      </button>

      {data.map((item) => {
        const { poster_path, id } = item;
        return (
          <div key={id} className="tiles-container">
            <img src={`${ImageURL}${poster_path}`} alt="" />
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  gap: 0 0.5rem;
  overflow: hidden;
  position: relative;

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: transparent;
    font-size: 3rem;
    color: #e6e6e6;
    display: none;
  }

  .show-btns {
    display: block;
  }

  .right {
    right: 0;
  }

  .tiles-container {
    img {
      width: 7rem;
    }
  }

  @media (min-width: 768px) {
    .tiles-container {
      img {
        width: 10rem;
        transition: all 0.5s linear;
      }
    }
  }
`;

export default Tiles;
