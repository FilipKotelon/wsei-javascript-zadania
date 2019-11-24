/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Zadeklarowanie funkcji jeden
function jeden() {

    //Zadeklarowanie zmiennej zmienna1 w scope funkcji jeden
    var zmienna1 = 1;

    //Zadeklarowanie funkcji dwa
    function dwa() {

        //Funkcja dwa ma dostęp do zmiennej 1, bo jest w scope funkcji 1
        console.log(zmienna1);

        //Zadeklarowanie zmiennej zmienna2 w scope funkcji dwa
        var zmienna2 = 3;
    }

    //Wywołanie funkcji dwa
    dwa();

    //Funkcja jeden nie ma dostępu do zmiennej zmienna2, bo ta jest zadeklarowana w scope funkcji dwa
    console.log(zmienna2)
}

//Wywołanie funkcji jeden
jeden()