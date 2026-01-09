1. Zastosowane reguły walidacji
- Imię
pole wymagane
minimalna długość: 2 znaki
- Email
pole wymagane
poprawny format adresu email (email: true)
- Nazwa użytkownika
pole wymagane
minimalna długość: 3 znaki
sprawdzanie dostępności loginu (AJAX – symulacja)
login porównywany z listą istniejących użytkowników (JSON)
- Hasło
pole wymagane
minimalna długość: 6 znaków
- Powtórz hasło
pole wymagane
musi być identyczne z polem hasło (equalTo)
- Wiek
pole wymagane
tylko cyfry (digits)
minimalna wartość: 18
2. Komunikaty błędów
Dla każdego pola zastosowano własne komunikaty walidacyjne, wyświetlane użytkownikowi w przypadku niespełnienia reguł.
