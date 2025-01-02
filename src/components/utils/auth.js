export const isAuthenticated = () => {
  // Replace this with real authentication logic
  const user = localStorage.getItem("user");
  return !!user;
};
