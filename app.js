const users = document.querySelector("#user");
const userNext = document.querySelector("#nxt-user");

const getRandomUsers = async () => {
  const fetchUsers = await fetch("https://randomuser.me/api/?results=2");
  const randomUser = await fetchUsers.json();
  randomUser.results.forEach((user) => {
    const { name, gender, email, login } = user;

    users.innerHTML = `First Name: ${name.first} </br> Last Name: ${name.last} </br> Gender: ${gender} </br> Email: ${email} </br> Password: ${login.password}`;
  });
  return randomUser;
};
userNext.addEventListener("click", getRandomUsers);
getRandomUsers();
