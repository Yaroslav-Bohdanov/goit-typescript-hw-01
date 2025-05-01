type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
function createOrUpdateUser(data: Partial<User>): User {
  const defaultUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...defaultUser, ...data };
}
createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
export default { createOrUpdateUser };
