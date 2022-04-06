import { useFetch } from "./useFetch";
import { requests } from "../helper/request";
import styled from "styled-components";
import Tiles from "./tiles";

const Original = () => {
  const { movies, loading } = useFetch(requests.fetchNetflixOriginals);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <Wrapper className="section-left">
      <h4 className="title-small">netflix originals</h4>

      <Tiles movies={movies} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 4rem;
`;

export default Original;
