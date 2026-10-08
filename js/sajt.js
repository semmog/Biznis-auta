// Zajedničko za sve stranice: godina u podnožju, zaglavlje i meni na mobitelu
(function () {
  var godina = document.getElementById('year');
  if (godina) godina.textContent = new Date().getFullYear();

  // Na mobitelu red kategorija se pomjera tako da je trenutna kategorija vidljiva
  var cip = document.querySelector('.cip.on');
  if (cip && cip.parentNode.scrollWidth > cip.parentNode.clientWidth) {
    cip.parentNode.scrollLeft = cip.offsetLeft - cip.parentNode.offsetLeft - (cip.parentNode.clientWidth - cip.offsetWidth) / 2;
  }

  // Zaglavlje dobija tamnu pozadinu kad se skrola
  var header = document.getElementById('top');
  if (!header) return;
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 40); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Meni na mobitelu
  var burger = header.querySelector('.burger');
  if (!burger) return;
  var setOpen = function (open) {
    header.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Zatvori meni' : 'Otvori meni');
  };
  burger.addEventListener('click', function () { setOpen(!header.classList.contains('open')); });
  header.querySelectorAll('.menu a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
})();
