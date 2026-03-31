export const Login = async (username, password) => {
  const result = await fetch("http://localhost:3001/users/1");
  const user = await result.json();

  if (username !== user.username || password !== user.password) {
    return { success: false, error: "Invalid username or password" };
  }

  return { success: true };
};
