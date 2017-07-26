var username_final_value;
var password_final_value;


function authorization_check() {
    var username_input_value = document.getElementById('username_input');
    var password_input_value = document.getElementById('password_input').value;

    username_final_value = username_input_value;
    password_final_value = password_input_value;

    data_check();
}


function data_check() {

    if (username_final_value != email_value && password_final_value != password_two_final_value) {
        alert('Username and Password is wrong!!!');
        return true;
    } else if (username_final_value != email_value && password_final_value == password_two_final_value) {
        alert('Username is wrong please try again!!!');
        return false;
    } else if (username_final_value == email_value && password_final_value != password_two_final_value) {
        alert('Password is wrong please try again!!!');
        return false;
    } else if(username_final_value == email_value && password_final_value == password_two_final_value){
        alert('Welcome admin');
        return true;
    }
}