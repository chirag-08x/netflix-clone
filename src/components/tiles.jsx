import { useState, useRef } from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ImageURL = `https://image.tmdb.org/t/p/original`;

const Tiles = ({ movies }) => {
  const [data, setData] = useState([...movies]);
  const refContainer = useRef(null);
  const refContainer2 = useRef(null);
  const sliderContainer = useRef(null);

  const displaybuttons = () => {
    refContainer.current.classList.add("show-btns");
    refContainer2.current.classList.add("show-btns");
  };

  const hidebuttons = () => {
    refContainer.current.classList.remove("show-btns");
    refContainer2.current.classList.remove("show-btns");
  };

  const slideLeft = () => {};

  const slideRight = () => {};

  return (
    <Wrapper onMouseOver={displaybuttons} onMouseLeave={hidebuttons}>
      <button className="left" ref={refContainer} onClick={slideLeft}>
        <FaAngleLeft />
      </button>

      <button className="right" ref={refContainer2} onClick={slideRight}>
        <FaAngleRight />
      </button>

      <div className="tile-parent">
        <div ref={sliderContainer}>
          {data.map((item) => {
            const { poster_path, id } = item;
            return (
              <Link to={"/movie"} key={id} className="tiles-container">
                <img src={`${ImageURL}${poster_path}`} alt="" />
              </Link>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .tile-parent {
    div {
      display: flex;
      overflow: hidden;
      gap: 0 0.5rem;
    }
  }

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
    z-index: 5;
  }

  .show-btns {
    display: block;
  }

  .right {
    right: 0;
  }

  .tile-parent {
    div {
      .tiles-container {
        flex-shrink: 0;
        cursor: pointer;
        img {
          width: 7rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .tile-parent {
      div {
        .tiles-container {
          width: 10rem;
          flex-shrink: 0;

          img {
            width: 100%;
            transition: all 0.5s linear;
          }
        }
      }
    }
  }
`;

export default Tiles;
