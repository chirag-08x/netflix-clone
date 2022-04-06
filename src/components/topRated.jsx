import { useFetch } from "./useFetch";
import { requests } from "../helper/request";
import styled from "styled-components";
import Tiles from "./tiles";

const TopRated = () => {
  const { movies, loading } = useFetch(requests.fetchTopRated);

  if (loading) {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <Wrapper className="section-left">
      <h4 className="title-small">top rated</h4>
      <Tiles movies={movies} />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default TopRated;
