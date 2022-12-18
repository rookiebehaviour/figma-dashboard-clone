let url = "https://random-data-api.com/api/v2/users?size=10";

function createUser(response) {
  let users = response.data;
  let userElement = document.querySelector("#user");
  let userHTML = `<tr>`;

  users.forEach(function (users, index) {
    if (index < 10) {
      userHTML =
        userHTML +
        `
        <th scope="row">${users.id}</th>
              <td>${users.first_name}</td>
              <td>${users.last_name}</td>
              <td>${users.email}</td>
              <td>${users.username}</td>
            </tr>
             
            `;
    }
  });

  userHTML = userHTML + `</tr>`;
  userElement.innerHTML = userHTML;
}

function showUser(response) {
  let firstName = document.querySelector(".first-name");
  let lastName = document.querySelector(".last-name");
  let email = document.querySelector(".email");
  let keySkill = document.querySelector(".key-skill");

  keySkill.innerHTML = `Key skill: ${response.data[0].employment.key_skill}`;
  email.innerHTML = `Email: ${response.data[0].email}`;
  lastName.innerHTML = `Last name: ${response.data[0].last_name}`;
  firstName.innerHTML = `First name: ${response.data[0].first_name}`;
}
axios.get(url).then(createUser);
