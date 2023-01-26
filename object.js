function showList() {
    $('ul').html(getList());

}
$(document).ready(function () {
    showList();

    //on click save button 
    $('#Add').click(function(){
        $('#isAdd').val('1');
        currentIndex =-1;
        $("#nameInput").val(null);
        $("#numberInput").val(null);
        $("#emailInput").val(null);
    });
    $("#save").click(function () {

        //form element
        var name = document.getElementById("nameInput");
        var number = document.getElementById("numberInput");
        var email = document.getElementById("emailInput");
        var gender = document.getElementById("slider-flip-m");
        var isAdd = document.getElementById("isAdd");
        

        if (findUser(name.value, number.value)) {
            alert('This name or number used');
        } else {
          
            if(isAdd.value == '0'){
                deleteUser();
            }
            var obj = new User(name.value, number.value, email.value, gender.value)
            users.push(obj);
            showList();
            $('ul').listview('refresh');
            window.location.href = '#contactList';
        }
    })
    currentIndex = -1;
});

$('#cancle').click(function () {
    showList();
    $('ul').listview('refresh');
    window.location.href = '#contactList';
});

function findUser(name, phone) {
    for (let i = 0; i < users.length; i++) {
        if ((users[i].getName() == name || users[i].getPhone() == phone) && i != currentIndex) {
            return true;
        }
    }
    return false;
}