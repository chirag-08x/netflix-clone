import { useState, useRef } from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ImageURL = `https://image.tmdb.org/t/p/original`;

const Tiles = ({ movies }) => {
  const [data, setData] = useState([...movies]);
  const refContainer = useRef(null);
  const refContainer2 = useRef(null);
  const sliderContainer = useRef(null);
  let sliderCountRight = 0;
  let sliderCountLeft = 0;

  const displaybuttons = () => {
    refContainer.current.classList.add("show-btns");
    refContainer2.current.classList.add("show-btns");
  };

  const hidebuttons = () => {
    refContainer.current.classList.remove("show-btns");
    refContainer2.current.classList.remove("show-btns");
  };

  const slideLeft = () => {
    if (sliderCountLeft === 0) return;
    sliderCountLeft += 1;
    sliderCountRight -= 1;
    sliderContainer.current.style = `transform : translateX(${
      sliderCountLeft * 20
    }rem)`;
  };

  const slideRight = () => {
    if (sliderCountRight === 6) return;
    sliderCountLeft -= 1;
    sliderCountRight += 1;
    sliderContainer.current.style = `transform : translateX(${
      sliderCountRight * -20
    }rem)`;
  };

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
              <div to={"/movie"} key={id} className="tiles-container">
                <img src={`${ImageURL}${poster_path}`} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;

  .tile-parent {
    overflow: hidden;
    div {
      display: flex;
      gap: 0 0.5rem;
      transition: all 0.5s linear;

      .tiles-container {
        flex-shrink: 0;
        cursor: pointer;
        img {
          width: 7rem;
        }
      }
    }
  }

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
    margin: 0 0.5rem;
  }

  .show-btns {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: grid;
    place-items: center;
  }

  .right {
    right: 0;
  }

  .tile-parent {
    div {
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
