export const Login = async (data) => {
  const result = await fetch("http://localhost:3001/users/abcdefg");
  const user = await result.json();

  if (data.username !== user.username || data.password !== user.password) {
    return { success: false, error: "Invalid username or password" };
  }

  return { success: true, user: user };
};
