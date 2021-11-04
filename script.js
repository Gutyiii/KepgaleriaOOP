$(function () {

    // beletesszük az adatokat egy tömbbe
    const kepAdat = [
        {
            cim: "1.kép címe",
            eleresiUt: "kepek/kep1.jpg",
            leiras: "1.kép leírása"
        },
        {
            cim: "2.kép címe",
            eleresiUt: "kepek/kep2.jpg",
            leiras: "2.kép leírása"
        },
        {
            cim: "3.kép címe",
            eleresiUt: "kepek/kep3.jpg",
            leiras: "3.kép leírása"
        }
    ];

    //sablonelem
    //a sablonelemet klónozzuk 
    //hozzá csatoljuk a szülőelemhez
    const galeriaSzulo = $("#galeria");
    let sablonElem = $(".kartya");
    let elsoSzuloelem = $("#nagykep");
    let aktIndex = 0;
    //végigmegyünk a tömbünkön
    kepAdat.forEach(function (elem, index) {
        //klónozott elemmel és a tömb adataival példányosítjuk a kartyánkat
        const ujElem = sablonElem.clone().appendTo(galeriaSzulo);
        const ujKartya = new Kartya(ujElem, elem, index);
    });

    let ujElem = sablonElem.clone().appendTo(elsoSzuloelem);
    const nagyKartya = new Kartya(ujElem, kepAdat[aktIndex],aktIndex);

    sablonElem.remove();

    //feliratkozás az eseményre

    $(window).on("kisKepvaltas", (esemeny) => {
        nagyKartya.sajatAdatok(esemeny.detail);
        aktIndex = event.detail.index;
        console.log(aktIndex);
    });

    $("#balra").on("click", () => {
        console.log(aktIndex);
        aktIndex--;
        if (aktIndex < 0) {
            aktIndex = kepAdat.length - 1;
        }
        nagyKartya.sajatAdatok(kepAdat[aktIndex]);
    });

    $("#jobbra").on("click", () => {
        console.log(aktIndex);
        aktIndex++;
        if (aktIndex > kepAdat.length - 1) {
            aktIndex = 0;
        }
        nagyKartya.sajatAdatok(kepAdat[aktIndex]);
    });



}); 