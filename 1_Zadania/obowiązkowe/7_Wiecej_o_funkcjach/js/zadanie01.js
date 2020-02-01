
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Deklaracja funkcji sortArray
function sortArray() {

    //Deklaracja tabeli points
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Sortowanie tabeli points
    points.sort(function (a, b) {
        //Sortowanie rosnąco
        return a - b;
    });

    //Zwrócenie posortowanej tabeli
    return points;
}

//Wywołanie funkcji
sortArray();
