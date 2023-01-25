function showList() {
    $('ul').html(getList());

}
$(document).ready(function () {
    showList();

    //on click save button 
    $("#save").click(function () {

        //form element
        var name = document.getElementById("nameInput")
        var number = document.getElementById("numberInput")
        var email = document.getElementById("emailInput")
        var gender = document.getElementById("slider-flip-m")

        console.log(name.value + " " + number.value);
        if (findUser(name.value, number.value) == true) {
            console.log("dddddddddd");
            alert('This name or number used');
        } else {
            var obj = new User(name.value, number.value, email.value, gender.value)
            users.push(obj);

            showList();
            $('ul').listview('refresh');
            window.location.href = '#contactList';
        }
    })
});

$('#cancle').click(function () {
    showList();
    $('ul').listview('refresh');
    window.location.href = '#contactList';
});

function findUser(name, phone) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].getName() == name || users[i].getPhone() == phone) {
            return true;
        }
    }
    return false;
}