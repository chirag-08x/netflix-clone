import {
  Trending,
  Featured,
  Action,
  Comedy,
  Original,
  TopRated,
  Documentaries,
  Romance,
} from "../components";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Featured />
      <Original />
      <TopRated />
      <Trending />
      <Action />
      <Comedy />
      <Romance />
      <Documentaries />
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default Home;
