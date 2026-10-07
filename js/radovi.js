/*
  FOTOGRAFIJE VAŠIH RADOVA
  ========================

  Kako dodati fotografiju:

  1. Fotografiju stavite u folder  images/radovi/
     Ime fajla neka bude bez razmaka i bez slova č, ć, š, đ, ž,
     npr.  golf-kozna-sjedista.jpg

  2. U ovom fajlu, u listu odgovarajuće kategorije, dodajte jedan red:

       { slika: "golf-kozna-sjedista.jpg", opis: "VW Golf – kožna sjedišta" },

  3. Za par "prije i poslije" dodajte ovakav red:

       { prije: "fotelja-prije.jpg", poslije: "fotelja-poslije.jpg", opis: "Fotelja – nova koža i spužva" },

  Redoslijed na stranici je isti kao redoslijed u listi.
  Čim kategorija dobije bar jednu vašu fotografiju, primjeri u toj kategoriji se više ne prikazuju.
*/
var RADOVI = {
  "auto-sjedista": [
    // { slika: "golf-kozna-sjedista.jpg", opis: "VW Golf – kožna sjedišta" },
  ],
  "volani": [
  ],
  "rucice-mjenjaca": [
  ],
  "motori": [
  ],
  "gliseri-i-brodovi": [
  ],
  "ugostiteljski-objekti": [
  ],
  "namjestaj": [
  ],
  "ljetne-baste": [
  ],
  "firme": [
  ]
};


/*
  PRIVREMENI PRIMJERI
  -------------------
  Ovo su besplatne fotografije sa Pexels-a, NISU vaši radovi. Na stranici su označene kao "Primjer"
  i prikazuju se samo u kategorijama u kojima još nema vaših fotografija.
  Da se primjeri nigdje ne prikazuju, promijenite  true  u  false :
*/
var PRIKAZI_PRIMJERE = true;

var PRIMJERI = {
  "auto-sjedista": [
    { slika: "auto-sjedista-crvena.jpg", opis: "Crvena kožna sjedišta" },
    { slika: "primjeri/auto-1.jpg", opis: "Svijetla kožna sjedišta" },
    { slika: "primjeri/auto-2.jpg", opis: "Smeđe kožno sjedište" },
    { slika: "primjeri/auto-3.jpg", opis: "Crno sjedište oldtajmera" }
  ],
  "volani": [
    { slika: "primjeri/volan-1.jpg", opis: "Kožni volan" },
    { slika: "primjeri/volan-2.jpg", opis: "Volan s kožnim obodom" },
    { slika: "primjeri/volan-3.jpg", opis: "Volan i unutrašnjost vozila" }
  ],
  "rucice-mjenjaca": [
    { slika: "primjeri/mjenjac-1.jpg", opis: "Ručica mjenjača uz crvenu kožu" },
    { slika: "primjeri/mjenjac-2.jpg", opis: "Ručica mjenjača" },
    { slika: "primjeri/mjenjac-3.jpg", opis: "Ručica i sjedišta" }
  ],
  "motori": [
    { slika: "primjeri/motor-1.jpg", opis: "Sjedište motora" },
    { slika: "primjeri/motor-2.jpg", opis: "Motor sa smeđim sjedištem" }
  ],
  "gliseri-i-brodovi": [
    { slika: "brod-sjedista.jpg", opis: "Kožna sjedišta na brodu" },
    { slika: "primjeri/brod-1.jpg", opis: "Sjedište uz kormilo" },
    { slika: "primjeri/brod-2.jpg", opis: "Sofa u unutrašnjosti broda" }
  ],
  "ugostiteljski-objekti": [
    { slika: "restoran-stolice.jpg", opis: "Stolice u restoranu" },
    { slika: "bar-stolice.jpg", opis: "Kožne barske stolice" },
    { slika: "primjeri/restoran-1.jpg", opis: "Kožne stolice u restoranu" },
    { slika: "primjeri/restoran-2.jpg", opis: "Separei u kafiću" }
  ],
  "namjestaj": [
    { slika: "namjestaj-stolice.jpg", opis: "Trpezarijske stolice" },
    { slika: "primjeri/namjestaj-1.jpg", opis: "Stolice od somota" },
    { slika: "primjeri/namjestaj-2.jpg", opis: "Fotelja" }
  ],
  "ljetne-baste": [
    { slika: "basta-jastuci.jpg", opis: "Stolice s jastucima u bašti" },
    { slika: "primjeri/basta-1.jpg", opis: "Bašta kafića" },
    { slika: "primjeri/basta-2.jpg", opis: "Stolice u bašti" }
  ],
  "firme": [
    { slika: "firma-stolice.jpg", opis: "Kancelarijske stolice" },
    { slika: "primjeri/firma-1.jpg", opis: "Sala za sastanke" },
    { slika: "primjeri/firma-2.jpg", opis: "Stolice u sali za sastanke" }
  ]
};
