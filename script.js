$(document).ready(function () {

    const existingLogins = ["admin", "user123", "test", "janek"];

    $.validator.addMethod("loginAvailable", function (value, element) {
        let isAvailable = true;

        existingLogins.forEach(login => {
            if (login.toLowerCase() === value.toLowerCase()) {
                isAvailable = false;
            }
        });

        return isAvailable;
    }, "Taki login już istnieje");

    $("#formulaz").validate({
        rules: {
            Imie: {
                required: true,
                minlength: 2
            },
            Email: {
                required: true,
                email: true
            },
            Login: {
                required: true,
                minlength: 3,
                loginAvailable: true
            },
            Haslo: {
                required: true,
                minlength: 6
            },
            PHaslo: {
                required: true,
                equalTo: "#Haslo"
            },
            Wiek: {
                required: true,
                digits: true,
                min: 18
            }
        },
        messages: {
            Imie: {
                required: "Imię jest wymagane",
                minlength: "Imię musi mieć minimum 2 znaki"
            },
            Email: {
                required: "Email jest wymagany",
                email: "Podaj poprawny adres email"
            },
            Login: {
                required: "Nazwa użytkownika jest wymagana",
                minlength: "Login musi mieć minimum 3 znaki",
                loginAvailable: "Taki login jest już zajęty"
            },
            Haslo: {
                required: "Hasło jest wymagane",
                minlength: "Hasło musi mieć minimum 6 znaków"
            },
            PHaslo: {
                required: "Powtórz hasło",
                equalTo: "Hasła muszą być identyczne"
            },
            Wiek: {
                required: "Wiek jest wymagany",
                digits: "Wiek musi być liczbą",
                min: "Musisz mieć co najmniej 18 lat"
            }
        },
        submitHandler: function () {
            alert("Formularz poprawny – rejestracja zakończona sukcesem!");
            return false;
        }
    });
});