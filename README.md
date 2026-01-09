🔹 Imię (Imie)
required: true
→ pole jest wymagane
minlength: 2
→ minimum 2 znaki
🔹 Email (Email)
required: true
→ pole jest wymagane
email: true
→ musi być poprawnym adresem e-mail
🔹 Login (Login)
required: true
→ pole jest wymagane
minlength: 3
→ minimum 3 znaki
remote
→ sprawdzenie AJAX, czy login nie istnieje w pliku usernames.json
pobranie danych metodą GET
dataFilter sprawdza, czy wpisana nazwa nie znajduje się na liście data.usernames
(pośrednio) loginAvailable: true
→ informacja logiczna wykorzystywana jako komunikat błędu (choć faktycznie walidację realizuje remote)
🔹 Hasło (Haslo)
required: true
→ pole jest wymagane
minlength: 6
→ minimum 6 znaków
🔹 Powtórz hasło (PHaslo)
required: true
→ pole jest wymagane
equalTo: '#Haslo'
→ musi być identyczne jak hasło
🔹 Wiek (Wiek)
required: true
→ pole jest wymagane
digits: true
→ dozwolone tylko cyfry
min: 18
→ minimalna wartość 18
