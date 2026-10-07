// Zajedničko za sve stranice: godina u podnožju, zaglavlje i meni na mobitelu
(function () {
  var godina = document.getElementById('year');
  if (godina) godina.textContent = new Date().getFullYear();

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
