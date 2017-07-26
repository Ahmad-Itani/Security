var email_value;
var password_final_value;
var password_two_final_value;

function check_data(){

    var first_name = document.getElementById("fname").value;
    var last_name = document.getElementById("lname").value;
    var email = document.getElementById("email");
    var password_one = document.getElementById("password_one_input").value;
    var password_two = document.getElementById("password_two_input").value;
    var age = document.getElementById('age_input').value;
    var gender = document.getElementById('gender_input').value;

    password_one_final_value = password_one;
    password_two_final_value = password_two;
    email_value = email;

    password_check();

}

function password_check(){

    if(password_one_final_value.length <= 7){
        alert('the password must be at least 8 characters!!!');
        return false;
    } else{
        if(password_two_final_value === password_one_final_value){
            alert('welcome admin');
            return true;
        } else{
            alert('your second password must like the first one!!!');
            return false;
        }
    }

}

