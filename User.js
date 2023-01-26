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

var currentIndex = -1;
var users = [
  new User("Ahmed Ali", "01245879632", "ahmed@gamil.com", "MALE"),
  new User("Khaled Abbas", "01025874563", "khaled@gmail.com", "MALE"),
  new User("Asmaa Mohamed", "0114786523", "asmaa@gmail.com", "FEMALE"),
  new User("Merna Mohamed", "01598745632", "merna@gmail.com", "FEMALE"),
];

// retun the list of users
function getList() {
  users = users.sort((a, b) => a.getName() > b.getName() ? 1 : -1);
  var result = "";
  for (let i = 0; i < users.length; i++) {
    result += ' <li><a href="#contactInfo" onclick=showUser(' + i + ')>';
    result += `<img src=${getimgFor(users[i].getGender().toUpperCase())}>`;
    result += `<h2>${users[i].getName()}</h2></a>`;
    result += `<a href="tel:${users[i].getPhone}" data-rel="popup" data-position-to="window" data-transition="pop" data-icon="phone"></a>`;
    result += "</li> ";
  }
  return result;
}

// show user info
function showUser(index) {
  currentIndex  = index;
  $('#nameDel').val(users[index].getName());
  $('#phoneDel').val(users[index].getPhone());
  $('#emailDel').val(users[index].getEmail());
  let gender = users[index].getGender();
  $('#genderDel').val(gender);
  $('#imgDel').attr('src',getimgFor(gender));
}

// edit user info
$('#editBtn').click(function () {
  
  $('#nameInput').val($('#nameDel').val());
  $('#numberInput').val($('#phoneDel').val());
  $('#emailInput').val($('#emailDel').val());
  $('#isAdd').val('0');

  // $(`#slider-flip-m  option[value=${users[currentIndex].getGender().toUpperCase()}]`).prop("selected", true);
  $("#slider-flip-m").val(users[currentIndex].getGender().toUpperCase()).change();
  // if (users[currentIndex].getGender().toUpperCase() === "FEMALE") {
  //   // $("select option").filter(function () {
  //   //   return $(this).text() == 'Female';
  //   // }).attr('selected', true);
  // } else {
  //   // $("select option").filter(function () {
  //   //   return $(this).text() == 'Male';
  //   // }).attr('selected', true);
  //   $('#slider-flip-m  option[value="MALE"]').prop("selected", true);

  // }
});

// delete the user 
function deleteUser() {
  users.splice(currentIndex, 1);
  showList();
  $('ul').listview('refresh');
}

function isMale (x){
  return x.toUpperCase() === "MALE";
}

// get img for specific gender
function getimgFor(x){
  if (isMale(x))
      return 'assets/img/male.png';
  else
      return 'assets/img/female.png';

}
