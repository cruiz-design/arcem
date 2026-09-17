/* ARCEM Partners — selector de idioma + envío del formulario */
(function () {
  var KEY = 'arcem-lang';
  var btnEs = document.getElementById('lang-es');
  var btnEn = document.getElementById('lang-en');

  function apply(lang) {
    var nodes = document.querySelectorAll('[data-es][data-en]');
    for (var i = 0; i < nodes.length; i++) {
      var v = nodes[i].getAttribute(lang === 'en' ? 'data-en' : 'data-es');
      if (v !== null) nodes[i].innerHTML = v;
    }
    btnEs.setAttribute('aria-pressed', String(lang !== 'en'));
    btnEn.setAttribute('aria-pressed', String(lang === 'en'));
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es');
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  btnEs.addEventListener('click', function () { apply('es'); });
  btnEn.addEventListener('click', function () { apply('en'); });

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  apply(saved === 'en' ? 'en' : 'es');

  var form = document.getElementById('consult-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = e.target;
      var en = document.documentElement.getAttribute('lang') === 'en';
      var subject = (en ? 'Consultation request — ' : 'Solicitud de consulta — ') + (f.company.value || '');
      var body = [
        (en ? 'Name: ' : 'Nombre: ') + f.name.value,
        (en ? 'Company: ' : 'Empresa: ') + f.company.value,
        (en ? 'Email: ' : 'Correo: ') + f.email.value,
        (en ? 'Topic: ' : 'Tema: ') + f.practice.options[f.practice.selectedIndex].text,
        '',
        f.note.value
      ].join('\n');
      window.location.href = 'mailto:servicio@arcempr.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();
