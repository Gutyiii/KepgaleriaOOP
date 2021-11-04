class Kartya {
    constructor(elem, adat, index) {
        //változok az új elemhez
        //változok az elemben lévő elemekhez
        this.elem = elem;
        this.cim = this.elem.children("h3");
        this.kep = this.elem.children("img");
        this.leiras = this.elem.children("p");
        //konkrét elemeknek értéket adunk
        this.adat = adat;
        this.adat.index = index;
//        this.adat.index = index;
        this.sajatAdatok(this.adat);
        this.elem.on("click", () => {
            this.KattintasTrigger();
        });

    }

    sajatAdatok(ertek) {
        this.cim.html(ertek.cim);
        this.kep.attr("src", ertek.eleresiUt);
        this.leiras.html(ertek.leiras);
    }

    KattintasTrigger() {
        let esemeny = new CustomEvent("kisKepvaltas", {detail: this.adat});
        window.dispatchEvent(esemeny);
    }
}