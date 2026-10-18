# Web stranica – tapetarija (auto sjedišta i namještaj)

Jednostavna statička stranica (`index.html`), bez instalacije i alata. Otvori se direktno u pregledniku.

Stari prijedlozi dizajna su uklonjeni sa stranice da ne budu javno dostupni (ostaju u historiji projekta na GitHubu).

## Stranice
| Fajl | Šta je |
|------|--------|
| `index.html` | početna: naslov, kategorije, kontakt, materijali, o nama (40 godina) |
| `auto-sjedista.html`, `volani.html`, `rucice-mjenjaca.html`, `motori.html`, `gliseri-i-brodovi.html`, `ugostiteljski-objekti.html`, `namjestaj.html`, `ljetne-baste.html`, `firme.html` | stranica svake kategorije s galerijom završenih radova – otvara se klikom na sliku kategorije na početnoj |
| `404.html` | stranica „Stranica nije pronađena“ (prikazuje se kad adresa ne postoji) |
| `css/stil.css`, `css/fontovi.css` | izgled svih stranica i fontovi |
| `fonts/` | fontovi spremljeni na stranici (bez učitavanja s Google servera) |
| `js/radovi.js` | **spisak fotografija završenih radova po kategorijama** |
| `js/galerija.js`, `js/sajt.js` | galerija s uvećanim prikazom fotografije, meni i zaglavlje |
| `_headers` | sigurnosne postavke (za Cloudflare Pages i Netlify) |

## Kako dodati fotografije završenih radova
1. Fotografiju stavite u folder `images/radovi/` (ime bez razmaka i bez č, ć, š, đ, ž, npr. `golf-kozna-sjedista.jpg`).
2. U fajlu `js/radovi.js`, u listu odgovarajuće kategorije, dodajte red:
   ```js
   { slika: "golf-kozna-sjedista.jpg", opis: "VW Golf – kožna sjedišta" },
   ```
   Za par „prije i poslije“:
   ```js
   { prije: "fotelja-prije.jpg", poslije: "fotelja-poslije.jpg", opis: "Fotelja – nova koža i spužva" },
   ```
3. Fotografija se pojavljuje na stranici te kategorije; klikom se otvara u punoj veličini.

Dok kategorija nema vaših fotografija, prikazuju se privremeni primjeri (označeni natpisom „Primjer“).
Čim dodate prvu vašu fotografiju u kategoriju, primjeri iz nje nestaju. Da se primjeri nigdje ne prikazuju,
u `js/radovi.js` postavite `PRIKAZI_PRIMJERE = false`.

## Šta treba popuniti
U svim `.html` fajlovima potražiti `TODO` i `[Naziv]` i zamijeniti:
- naziv radnje
- broj telefona (`+38700000000` – koristi se za poziv, WhatsApp i Viber)

## Fotografije
Fotografije u folderu `images/` (i `images/primjeri/`) su privremene, besplatne fotografije sa [Pexels](https://www.pexels.com)
([Pexels licenca](https://www.pexels.com/license/) – besplatna upotreba, i komercijalna, bez obaveznog navođenja autora).
Najbolje je postepeno ih zamijeniti fotografijama vlastitih radova (prije i poslije) – zadržati isto ime fajla
i nova slika se automatski pojavljuje na stranici.

**Prije objavljivanja obavezno zamijeniti `majstor.jpg`** (dio „O nama“) pravom fotografijom vlasnika ili radionice –
na stock fotografiji je stvarna, prepoznatljiva osoba koja nema veze s radnjom.

| Fajl | Izvor |
|------|-------|
| `hero-auto-koza.jpg` | [pexels.com/photo/luxury-classic-car-interior-at-auto-show-32725848](https://www.pexels.com/photo/luxury-classic-car-interior-at-auto-show-32725848/) |
| `brod-sjedista.jpg` | [pexels.com/photo/leather-seats-in-the-interior-of-a-yacht-8356420](https://www.pexels.com/photo/leather-seats-in-the-interior-of-a-yacht-8356420/) |
| `hero-restoran.jpg`, `restoran.jpg` | [pexels.com/photo/restaurant-interior-with-white-walls-and-wooden-chairs-and-tables-8753554](https://www.pexels.com/photo/restaurant-interior-with-white-walls-and-wooden-chairs-and-tables-8753554/) |
| `namjestaj-dnevna.jpg` | [pexels.com/photo/cozy-living-room-with-sofa-and-armchairs-6312357](https://www.pexels.com/photo/cozy-living-room-with-sofa-and-armchairs-6312357/) |
| `auto-sjedista-smeda.jpg` | [pexels.com/photo/classic-car-interior-with-brown-leather-seats-30782277](https://www.pexels.com/photo/classic-car-interior-with-brown-leather-seats-30782277/) |
| `auto-sjedista-crvena.jpg` | [pexels.com/photo/red-leather-seat-in-car-18318590](https://www.pexels.com/photo/red-leather-seat-in-car-18318590/) |
| `volan.jpg` | [pexels.com/photo/close-up-shot-of-a-black-steering-wheel-10286370](https://www.pexels.com/photo/close-up-shot-of-a-black-steering-wheel-10286370/) |
| `mjenjac.jpg` | [pexels.com/photo/close-up-of-a-luxury-car-gear-shift-knob-17339324](https://www.pexels.com/photo/close-up-of-a-luxury-car-gear-shift-knob-17339324/) |
| `motor.jpg` | [pexels.com/photo/close-up-photography-of-parked-motorcycle-1413412](https://www.pexels.com/photo/close-up-photography-of-parked-motorcycle-1413412/) |
| `gliser.jpg` | [pexels.com/photo/people-on-a-speedboat-12204727](https://www.pexels.com/photo/people-on-a-speedboat-12204727/) |
| `namjestaj-stolice.jpg` | [pexels.com/photo/red-chairs-and-table-in-the-kitchen-8657185](https://www.pexels.com/photo/red-chairs-and-table-in-the-kitchen-8657185/) |
| `restoran-stolice.jpg` | [pexels.com/photo/empty-dining-tables-and-chairs-1579739](https://www.pexels.com/photo/empty-dining-tables-and-chairs-1579739/) |
| `bar-stolice.jpg` | [pexels.com/photo/brown-leather-bar-stools-2442899](https://www.pexels.com/photo/brown-leather-bar-stools-2442899/) |
| `basta.jpg` | [pexels.com/photo/decor-of-restaurant-patio-14726700](https://www.pexels.com/photo/decor-of-restaurant-patio-14726700/) |
| `basta-jastuci.jpg` | [pexels.com/photo/rustic-outdoor-cafe-chairs-with-cushions-36837375](https://www.pexels.com/photo/rustic-outdoor-cafe-chairs-with-cushions-36837375/) |
| `firma-sala.jpg` | [pexels.com/photo/conference-room-with-chairs-and-table-17739893](https://www.pexels.com/photo/conference-room-with-chairs-and-table-17739893/) |
| `firma-stolice.jpg` | [pexels.com/photo/office-chairs-in-the-room-12269763](https://www.pexels.com/photo/office-chairs-in-the-room-12269763/) |
| `majstor.jpg` | [pexels.com/photo/craftsman-working-in-workshop-sewing-leather-31759241](https://www.pexels.com/photo/craftsman-working-in-workshop-sewing-leather-31759241/) |
| `mat-koza.jpg` | [pexels.com/photo/worn-out-chair-upholstery-with-soft-texture-5499508](https://www.pexels.com/photo/worn-out-chair-upholstery-with-soft-texture-5499508/) |
| `mat-eko-koza.jpg` | [pexels.com/photo/black-leather-fabric-in-close-up-photography-4611617](https://www.pexels.com/photo/black-leather-fabric-in-close-up-photography-4611617/) |
| `mat-platno.jpg` | [pexels.com/photo/a-texture-of-a-fabric-7598534](https://www.pexels.com/photo/a-texture-of-a-fabric-7598534/) |
| `primjeri/auto-1.jpg` | [pexels.com/photo/beige-leather-seat-upholstery-of-a-car-12173186](https://www.pexels.com/photo/beige-leather-seat-upholstery-of-a-car-12173186/) |
| `primjeri/auto-2.jpg` | [pexels.com/photo/brown-car-seat-cover-10196155](https://www.pexels.com/photo/brown-car-seat-cover-10196155/) |
| `primjeri/auto-3.jpg` | [pexels.com/photo/leather-seats-in-vintage-car-18372045](https://www.pexels.com/photo/leather-seats-in-vintage-car-18372045/) |
| `primjeri/volan-1.jpg` | [pexels.com/photo/close-up-photo-of-a-black-steering-wheel-13015295](https://www.pexels.com/photo/close-up-photo-of-a-black-steering-wheel-13015295/) |
| `primjeri/volan-2.jpg` | [pexels.com/photo/luxurious-lexus-interior-steering-wheel-close-up-30135236](https://www.pexels.com/photo/luxurious-lexus-interior-steering-wheel-close-up-30135236/) |
| `primjeri/volan-3.jpg` | [pexels.com/photo/car-steering-wheel-5180905](https://www.pexels.com/photo/car-steering-wheel-5180905/) |
| `primjeri/mjenjac-1.jpg` | [pexels.com/photo/the-red-interior-of-a-mercedes-benz-280sl-8310750](https://www.pexels.com/photo/the-red-interior-of-a-mercedes-benz-280sl-8310750/) |
| `primjeri/mjenjac-2.jpg` | [pexels.com/photo/close-up-of-a-gear-shifter-in-a-car-5215655](https://www.pexels.com/photo/close-up-of-a-gear-shifter-in-a-car-5215655/) |
| `primjeri/mjenjac-3.jpg` | [pexels.com/photo/interior-of-a-modern-car-17078798](https://www.pexels.com/photo/interior-of-a-modern-car-17078798/) |
| `primjeri/motor-1.jpg` | [pexels.com/photo/parked-motorbike-with-soft-saddle-4857710](https://www.pexels.com/photo/parked-motorbike-with-soft-saddle-4857710/) |
| `primjeri/motor-2.jpg` | [pexels.com/photo/close-up-photography-of-motorcycle-994156](https://www.pexels.com/photo/close-up-photography-of-motorcycle-994156/) |
| `primjeri/brod-1.jpg` | [pexels.com/photo/luxury-interior-of-a-yacht-8356431](https://www.pexels.com/photo/luxury-interior-of-a-yacht-8356431/) |
| `primjeri/brod-2.jpg` | [pexels.com/photo/interior-of-modern-yacht-with-cozy-couch-6510311](https://www.pexels.com/photo/interior-of-modern-yacht-with-cozy-couch-6510311/) |
| `primjeri/restoran-1.jpg` | [pexels.com/photo/leather-chairs-in-restaurant-2193600](https://www.pexels.com/photo/leather-chairs-in-restaurant-2193600/) |
| `primjeri/restoran-2.jpg` | [pexels.com/photo/cozy-cafe-interior-with-modern-booth-seating-30951017](https://www.pexels.com/photo/cozy-cafe-interior-with-modern-booth-seating-30951017/) |
| `primjeri/namjestaj-1.jpg` | [pexels.com/photo/sofa-and-table-with-chairs-11701157](https://www.pexels.com/photo/sofa-and-table-with-chairs-11701157/) |
| `primjeri/namjestaj-2.jpg` | [pexels.com/photo/stylish-living-room-with-sofa-and-armchair-5490341](https://www.pexels.com/photo/stylish-living-room-with-sofa-and-armchair-5490341/) |
| `primjeri/basta-1.jpg` | [pexels.com/photo/cafe-terrace-with-chairs-near-table-7524476](https://www.pexels.com/photo/cafe-terrace-with-chairs-near-table-7524476/) |
| `primjeri/basta-2.jpg` | [pexels.com/photo/charming-parisian-street-cafe-with-cozy-outdoor-seating-30811019](https://www.pexels.com/photo/charming-parisian-street-cafe-with-cozy-outdoor-seating-30811019/) |
| `primjeri/firma-1.jpg` | [pexels.com/photo/light-room-with-table-and-chairs-near-whiteboard-6180740](https://www.pexels.com/photo/light-room-with-table-and-chairs-near-whiteboard-6180740/) |
| `primjeri/firma-2.jpg` | [pexels.com/photo/chairs-conference-room-corporate-indoors-236730](https://www.pexels.com/photo/chairs-conference-room-corporate-indoors-236730/) |

## Sigurnost
- Stranica je statička: nema baze podataka, prijave, formulara ni plaćanja, i ne prikuplja podatke posjetilaca
  (nema kolačića ni praćenja), pa za sada ne trebaju obavještenje o kolačićima ni politika privatnosti.
- Stranica učitava samo svoje fajlove – nijedna skripta, font ni slika se ne učitava s drugih servera.
- `_headers` uključuje sigurnosna zaglavlja (Content-Security-Policy, zabrana prikaza stranice unutar tuđih sajtova,
  HSTS i ostalo). Cloudflare Pages i Netlify ga čitaju automatski; GitHub Pages ga ne podržava.
- Na GitHub nalogu, kod registrara domena i na hostingu uključiti dvostepenu prijavu (2FA) i automatsko produženje domena.
- Na fotografijama radova zamutiti registarske tablice i lica mušterija.

## Fontovi
DM Sans, DM Serif Display i Inter su pod licencom [SIL Open Font License 1.1](https://openfontlicense.org)
i smiju se slobodno koristiti i spremiti na stranicu. Naslov na početnoj koristi sistemski Appleov font (SF Pro)
na iPhoneu i Macu, a Inter na ostalim uređajima.

## Objavljivanje
Grana `main` je verzija za objavu. Preporuka je **Cloudflare Pages** ili **Netlify** (besplatno, automatski HTTPS,
čitaju `_headers`):
1. Napraviti nalog i izabrati „povezivanje s GitHubom“, pa projekat `Biznis-auta`.
2. Grana: `main`; build komanda: prazno; izlazni folder: `/` (korijen projekta).
3. Povezati vlastiti domen u postavkama projekta (registrar domena dobija upute koje DNS zapise da doda).

Može i GitHub Pages (Settings → Pages → Branch: `main`, folder `/`), ali bez sigurnosnih zaglavlja iz `_headers`.

Nakon što domen bude poznat: u `index.html` upisati punu adresu slike u `og:image`, dodati `sitemap.xml`
i `robots.txt` i prijaviti stranicu u Google Search Console te napraviti Google Business profil.
