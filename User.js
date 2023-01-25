class User {
  #name;
  #phone;
  #email;
  #gender;

  constructor(name, phone, email, gender) {
    this.#name = name;
    this.#phone = phone;
    this.#email = email;
    this.#gender = gender;
  }
  setName(name) {
    this.#name = name;
  }
  setPhone(phone) {
    this.#phone = phone;
  }
  setEmail(email) {
    this.#email = email;
  }
  setGeneder(gender) {
    this.#gender = gender;
  }
  getName() {
    return this.#name;
  }
  getEmail() {
    return this.#email;
  }
  getGender() {
    return this.#gender;
  }
  getPhone() {
    return this.#phone;
  }
}

var users = [
  new User("Ahmed Ali", "01245879632", "ahmed@gamil.com", "Male"),
  new User("Khaled Abbas", "01025874563", "khaled@gmail.com", "Male"),
  new User("Asmaa Mohamed", "0114786523", "asmaa@gmail.com", "Female"),
  new User("Merna Mohamed", "01598745632", "merna@gmail.com", "Female"),
];
function getList() {
  users = users.sort((a, b) => a.getName() > b.getName() ? 1 : -1);
  var result = "";
  for (let i = 0; i < users.length; i++) {

    result += ' <li><a href="#contactInfo" onclick=showUser(' + i + ')>';

    if (users[i].getGender().toUpperCase() === "MALE")
      result += '<img src="assets/img/male.png">';
    else
      result += '<img src="assets/img/female.png">';

    result += `<h2>${users[i].getName()}</h2></a>`;
    result += `<a href="tel:${users[i].getPhone}" data-rel="popup" data-position-to="window" data-transition="pop" data-icon="phone"></a>`;
    result += "</li> ";
  }
  return result;
}

function showUser(index) {
  $('#nameDel').val(users[index].getName());
  $('#phoneDel').val(users[index].getPhone());
  $('#emailDel').val(users[index].getEmail());
  $('#genderDel').val(users[index].getGender());
}

$('#editBtn').click(function () {
  $('#nameInput').val($('#nameDel').val());
  $('#numberInput').val($('#phoneDel').val());
  $('#emailInput').val($('#emailDel').val());

  if ($('#genderDel').val().toUpperCase() === "FEMALE") {
    $("select option").filter(function () {
      return $(this).text() == 'Female';
    }).attr('selected', true);
  } else {
    $("select option").filter(function () {
      return $(this).text() == 'Male';
    }).attr('selected', true);
  }
});

function deleteUser() {

  for (let i = 0; i < users.length; i++) {
    if (users[i].getName() == $('#nameDel').val() && users[i].getPhone() == $('#phoneDel').val()) {
      users.splice(i, 1);
      break;
    }
  }
  showList();
  $('ul').listview('refresh');
}
