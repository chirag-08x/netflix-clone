const alphabets = "abcdefghijklmnopqrstuvwxyz";
export const getRandom = () => {
  const alpharandom = alphabets[Math.floor(Math.random() * alphabets.length)];
  const movieRandomIndex = Math.floor(Math.random() * (20 - 0) + 0);
  return { alpharandom, movieRandomIndex };
};
