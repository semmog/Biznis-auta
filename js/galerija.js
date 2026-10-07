// Galerija završenih radova na stranici kategorije i uvećan prikaz fotografije.
// Fotografije se dodaju u fajlu js/radovi.js – ovdje ništa ne treba mijenjati.
(function () {
  var kat = document.body.getAttribute('data-kategorija');
  var box = document.getElementById('galerija');
  if (!kat || !box) return;

  var pravi = (typeof RADOVI !== 'undefined' && RADOVI[kat]) || [];
  var prikaziPrimjere = typeof PRIKAZI_PRIMJERE === 'undefined' || PRIKAZI_PRIMJERE;
  var primjeri = (prikaziPrimjere && typeof PRIMJERI !== 'undefined' && PRIMJERI[kat]) || [];
  var jePrimjer = pravi.length === 0;
  var folder = jePrimjer ? 'images/' : 'images/radovi/';

  var radovi = (jePrimjer ? primjeri : pravi)
    .filter(function (r) { return r && (r.slika || (r.prije && r.poslije)); })
    .map(function (r) {
      return r.prije && r.poslije
        ? { par: true, prije: folder + r.prije, poslije: folder + r.poslije, opis: r.opis || '' }
        : { slika: folder + r.slika, opis: r.opis || '' };
    });

  var napomena = document.getElementById('napomena-primjer');
  if (napomena) napomena.hidden = !(jePrimjer && radovi.length);

  function el(tag, cls, tekst) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (tekst) e.textContent = tekst;
    return e;
  }
  function slika(src, alt, lijeno) {
    var img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    if (lijeno) img.loading = 'lazy';
    img.decoding = 'async';
    return img;
  }

  if (!radovi.length) {
    var prazno = el('div', 'prazno');
    prazno.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M4 7h3l2-3h6l2 3h3v13H4z"/><circle cx="12" cy="13" r="4"/></svg>';
    prazno.appendChild(el('b', '', 'Fotografije naših radova uskoro'));
    prazno.appendChild(document.createTextNode('Do tada nam pošaljite fotografiju na Viber ili WhatsApp i dobićete ponudu.'));
    box.replaceWith(prazno);
    return;
  }

  // Pločice galerije
  radovi.forEach(function (r, i) {
    var b = el('button', 'rad' + (r.par ? ' par' : ''));
    b.type = 'button';
    b.setAttribute('aria-label', (r.opis || 'Fotografija rada') + ' – uvećaj');
    if (r.par) {
      [['prije', 'Prije'], ['poslije', 'Poslije']].forEach(function (p) {
        var pola = el('span', 'pola');
        pola.appendChild(slika(r[p[0]], (r.opis ? r.opis + ', ' : '') + p[1].toLowerCase(), true));
        pola.appendChild(el('span', 'znak', p[1]));
        b.appendChild(pola);
      });
    } else {
      b.appendChild(slika(r.slika, r.opis || 'Fotografija rada', true));
    }
    if (jePrimjer) b.appendChild(el('span', 'znak primjer', 'Primjer'));
    if (r.opis) b.appendChild(el('span', 'rad-opis', r.opis));
    b.addEventListener('click', function () { otvori(i, b); });
    box.appendChild(b);
  });

  // Uvećan prikaz
  var strelica = function (d) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="' + d + '"/></svg>';
  };
  var lb = el('div', 'lightbox');
  lb.hidden = true;
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Uvećana fotografija');
  lb.innerHTML =
    '<div class="lb-traka"><span class="lb-brojac"></span>' +
    '<button type="button" class="lb-btn lb-zatvori" aria-label="Zatvori">' + strelica('M6 6l12 12M18 6L6 18') + '</button></div>' +
    '<div class="lb-scena"></div><p class="lb-opis"></p>' +
    '<button type="button" class="lb-btn lb-prev" aria-label="Prethodna fotografija">' + strelica('M15 5l-7 7 7 7') + '</button>' +
    '<button type="button" class="lb-btn lb-next" aria-label="Sljedeća fotografija">' + strelica('M9 5l7 7-7 7') + '</button>';
  document.body.appendChild(lb);

  var scena = lb.querySelector('.lb-scena');
  var opis = lb.querySelector('.lb-opis');
  var brojac = lb.querySelector('.lb-brojac');
  var zatvoriBtn = lb.querySelector('.lb-zatvori');
  var prev = lb.querySelector('.lb-prev');
  var next = lb.querySelector('.lb-next');
  var trenutni = 0;
  var otvorio = null;

  function figura(src, alt, znak) {
    var f = document.createElement('figure');
    f.appendChild(slika(src, alt, false));
    if (znak) f.appendChild(el('span', 'znak', znak));
    return f;
  }
  function prikazi(i) {
    trenutni = (i + radovi.length) % radovi.length;
    var r = radovi[trenutni];
    scena.textContent = '';
    scena.classList.toggle('par', !!r.par);
    if (r.par) {
      scena.appendChild(figura(r.prije, (r.opis ? r.opis + ', ' : '') + 'prije', 'Prije'));
      scena.appendChild(figura(r.poslije, (r.opis ? r.opis + ', ' : '') + 'poslije', 'Poslije'));
    } else {
      scena.appendChild(figura(r.slika, r.opis || 'Fotografija rada'));
    }
    opis.textContent = r.opis + (jePrimjer ? (r.opis ? ' · ' : '') + 'Primjer' : '');
    brojac.textContent = (trenutni + 1) + ' / ' + radovi.length;
    prev.hidden = next.hidden = radovi.length < 2;
  }
  function otvori(i, dugme) {
    otvorio = dugme;
    prikazi(i);
    lb.hidden = false;
    document.documentElement.classList.add('lb-otvoren');
    zatvoriBtn.focus();
  }
  function zatvori() {
    lb.hidden = true;
    document.documentElement.classList.remove('lb-otvoren');
    if (otvorio) otvorio.focus();
  }

  zatvoriBtn.addEventListener('click', zatvori);
  prev.addEventListener('click', function () { prikazi(trenutni - 1); });
  next.addEventListener('click', function () { prikazi(trenutni + 1); });
  // Klik pored fotografije zatvara prikaz
  scena.addEventListener('click', function (e) {
    if (e.target === scena || e.target.tagName === 'FIGURE') zatvori();
  });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') zatvori();
    else if (e.key === 'ArrowLeft') prikazi(trenutni - 1);
    else if (e.key === 'ArrowRight') prikazi(trenutni + 1);
    else if (e.key === 'Tab') {
      // Fokus ostaje unutar uvećanog prikaza
      var dugmad = [zatvoriBtn, prev, next].filter(function (d) { return !d.hidden; });
      var poz = dugmad.indexOf(document.activeElement);
      e.preventDefault();
      dugmad[(poz + (e.shiftKey ? -1 : 1) + dugmad.length) % dugmad.length].focus();
    }
  });
  // Prevlačenje prstom lijevo/desno na mobitelu
  var x0 = null;
  lb.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    x0 = null;
    if (Math.abs(dx) > 50 && radovi.length > 1) prikazi(trenutni + (dx < 0 ? 1 : -1));
  });
})();
