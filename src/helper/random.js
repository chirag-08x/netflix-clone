export const getRandom = () => {
  const movieRandomIndex = Math.floor(Math.random() * (20 - 0) + 0);
  return { movieRandomIndex };
};
