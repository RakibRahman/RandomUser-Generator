const users = document.querySelector("#user");
const userNext = document.querySelector("#nxt-user");

const getRandomUsers = async () => {
  try {
    const fetchUsers = await fetch("https://randomuser.me/api/");
    const randomUser = await fetchUsers.json();
    randomUser.results.forEach((user) => {
      const { picture, name, gender, email, login } = user;

      users.innerHTML = `<img src="${picture.large}" width="200" height="200" style="border-radius:50%"> </br> First Name: ${name.first} </br> Last Name: ${name.last} </br> Gender: ${gender} </br> Email: ${email} </br> Password: ${login.password}`;
    });
    return randomUser;
  } catch (error) {
    console.log(error);
  }
};
userNext.addEventListener("click", getRandomUsers);
getRandomUsers();
