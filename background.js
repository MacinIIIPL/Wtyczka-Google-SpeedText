$(function () {

    class WKafelek {
        constructor(type, skrut, tekst) {
            this.skrut = skrut;
            this.tekst = tekst;
        }
    }

    class kafelek extends WKafelek {
        constructor(skrut, tekst) {
            super('kafelek', skrut, tekst)
        }

        wstaw_tekst() {
            console.log(this.tekst);
        }

    }

    var x = document.getElementById('K_Dodaj');

    //Zmienna pomocnicza.
    OtwartyFormularz = false;

    //Otwieranie formularza.
    function NowyFormularz() {
        console.log("dzia�");

        if (OtwartyFormularz == false) {
            var DTekst = '<div id="DTekst">' +
                '<a>Wpisz tekst:</a>' +
                '<input type="text" size="8">' +
                '<input type="button" value="Ok" />' +
                '<input type="button" value="Exit" id="E" />' +
                '</div>';
            var El = $(DTekst);

            OtwartyFormularz += true;

     //Zamykanie formularza.
                var ak = document.getElementById('E');
                function ZamknijFormularz() {
                    if (OtwartyFormularz == true) {
                        alert = ("Dzia�a.")
                    };
                };

                $('#Body').append(El);
                E.onclick = ZamknijFormularz;



        } else alert("Zamknij formularz.")
       
    };

    K_Dodaj.onclick = NowyFormularz;

});


