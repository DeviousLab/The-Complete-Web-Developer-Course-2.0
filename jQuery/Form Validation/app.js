let errorMessage = "";

function isEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$('#submitButton').click(function() {
    const email = $('#email').val();
    let errorMessage = "";
    let missingFields = "";
    if ($('#email').val() == "") {
        missingFields += "Email is missing. ";
    }
    if ($('#phone').val() == "") {
        missingFields += "Phone is missing. ";
    }
    if ($('#password').val() == "") {
        missingFields += "Password is missing. ";
    }
    if ($('#confirmPassword').val() == "") {
        missingFields += "Password confirmation is missing. ";
    }
    if (!isEmail(email)) {
        errorMessage += "Email is not valid. ";
    }
    if ($.isNumeric($('#phone').val())) {
        errorMessage += "Phone number is not valid. ";
    }
    if ($('#password').val() !== $('#confirmPassword').val()) {
        errorMessage += "Passwords do not match. ";
    }
    if (missingFields !== "") {
        errorMessage += "Missing fields: " + missingFields;
    }
    if (errorMessage !== "") {
        $('#errorMessage').html(errorMessage);
    } else {
        $('#errorMessage').hide();
        $('#successMessage').show();
    }
})
