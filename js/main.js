/* ============================================================
   LAYARD — Comportamiento del sitio
   1) Menú de navegación móvil
   2) Revelado al hacer scroll (IntersectionObserver)
   Vanilla JS. Respeta prefers-reduced-motion.
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     0 · Animación de carga de página
     Añade .page-loaded al <body> para disparar la entrada
     escalonada del hero (.animate-in). Doble requestAnimationFrame
     para garantizar que el estado inicial (opacity:0) se pinte
     antes de transicionar. Si el usuario prefiere movimiento
     reducido, igual se marca como cargada (los .animate-in no
     ocultan nada bajo esa preferencia).
     ---------------------------------------------------------- */
  function markPageLoaded() {
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        document.body.classList.add('page-loaded');
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', markPageLoaded);
  } else {
    markPageLoaded();
  }

  /* ----------------------------------------------------------
     1 · Navegación móvil
     ---------------------------------------------------------- */
  var toggle = document.querySelector('[data-nav-toggle]');
  var mobile = document.querySelector('[data-nav-mobile]');

  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      var open = mobile.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      // Alterna ícono entre menú y cierre
      var icon = toggle.querySelector('i');
      if (icon) {
        icon.className = open ? 'ph-thin ph-x' : 'ph-thin ph-list';
      }
    });

    // Cierra el menú al navegar a un ancla interna
    mobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobile.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        var icon = toggle.querySelector('i');
        if (icon) { icon.className = 'ph-thin ph-list'; }
      });
    });
  }

  /* ----------------------------------------------------------
     2 · Revelado al hacer scroll
     Aplica .is-visible a los elementos .reveal cuando entran
     en el viewport. Si el usuario prefiere movimiento reducido,
     se muestran de inmediato.

     Estrategia: IntersectionObserver como mejora progresiva +
     un respaldo basado en posición (rAF/scroll) que garantiza
     el revelado en cualquier entorno, incluido el primer pintado
     de contenido sobre el pliegue.
     ---------------------------------------------------------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  // Lista de elementos revelados cuyo fundido aún podría no haber
  // terminado (para rescatarlos si la transición quedó congelada).
  var watching = [];

  // Si un elemento ya tiene .is-visible pero su opacidad no llegó a 1,
  // la transición quedó congelada (p. ej. la pestaña estaba en segundo
  // plano cuando arrancó y no se reanudó). Se fuerza el estado final
  // quitando la transición. En primer plano, el fundido ya terminó y
  // esta comprobación no hace nada.
  function unfreezeAll() {
    for (var i = watching.length - 1; i >= 0; i--) {
      var el = watching[i];
      if (parseFloat(getComputedStyle(el).opacity) > 0.99) {
        watching.splice(i, 1); // fundido completado correctamente
      } else {
        el.style.transition = 'none'; // congelado → fijar estado final
        watching.splice(i, 1);
      }
    }
  }

  // Revela un elemento. Conserva el fundido sutil cuando la pestaña está
  // en primer plano; si está en segundo plano, lo revela al instante
  // (sin transición, que quedaría pausada). Una red de seguridad posterior
  // rescata cualquier transición que no haya avanzado.
  function show(el) {
    if (document.hidden) {
      el.style.transition = 'none';
      el.classList.add('is-visible');
      return;
    }
    el.classList.add('is-visible');
    watching.push(el);
    window.setTimeout(function () {
      if (parseFloat(getComputedStyle(el).opacity) < 0.99) {
        el.style.transition = 'none';
      }
      var idx = watching.indexOf(el);
      if (idx !== -1) { watching.splice(idx, 1); }
    }, 1800);
  }

  // Revela todo elemento que ya esté dentro (o cerca) del viewport.
  function revealInView() {
    var h = window.innerHeight || document.documentElement.clientHeight || 0;
    if (!h) { return; }
    for (var i = reveals.length - 1; i >= 0; i--) {
      var el = reveals[i];
      var rect = el.getBoundingClientRect();
      if (rect.top < h * 0.95 && rect.bottom > 0) {
        show(el);
        reveals.splice(i, 1); // ya revelado: se retira del seguimiento
      }
    }
  }

  // Respaldo con rAF para no saturar el evento scroll.
  var ticking = false;
  function onScroll() {
    if (ticking) { return; }
    ticking = true;
    window.requestAnimationFrame(function () {
      revealInView();
      ticking = false;
      if (reveals.length === 0) {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    });
  }

  // Mejora progresiva: IntersectionObserver para los elementos
  // que aparecen al desplazarse.
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          show(entry.target);
          observer.unobserve(entry.target);
          var idx = reveals.indexOf(entry.target);
          if (idx !== -1) { reveals.splice(idx, 1); }
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { observer.observe(el); });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  // Al volver a primer plano: rescatar fundidos congelados y reevaluar.
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) { unfreezeAll(); revealInView(); }
  });

  // Pases iniciales para el contenido sobre el pliegue. Se disparan en
  // varios momentos porque el viewport y el layout pueden no estar listos
  // en el primer tick.
  function kick() { void document.body.offsetHeight; revealInView(); }
  kick();
  document.addEventListener('DOMContentLoaded', kick);
  window.addEventListener('load', function () { kick(); unfreezeAll(); });
  [50, 150, 400, 800, 1100].forEach(function (t) { window.setTimeout(kick, t); });

  // Red de seguridad: cualquier elemento que no se haya revelado al
  // desplazarse se muestra de todas formas, para que el contenido nunca
  // quede oculto (incluido el render de página completa). show() es
  // seguro frente a transiciones congeladas.
  window.setTimeout(function () {
    reveals.slice().forEach(show);
    reveals.length = 0;
  }, 1600);
})();

/* ============================================================
   3 · Animaciones por scroll tipadas (.scroll-animate)
   Un único IntersectionObserver, una sola vez por elemento.
   threshold 0.15, rootMargin "0px 0px -60px 0px".
   Respeta prefers-reduced-motion. Robusto frente a transiciones
   congeladas (pestaña en segundo plano) con red de seguridad.
   ============================================================ */
(function () {
  'use strict';

  var items = Array.prototype.slice.call(document.querySelectorAll('.scroll-animate'));
  if (!items.length) { return; }

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  // Marca visible. Si la pestaña está en segundo plano, el reloj de
  // transiciones está pausado: se revela sin transición para no congelar.
  function show(el) {
    if (document.hidden) { el.style.transition = 'none'; }
    el.classList.add('is-visible');
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          show(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    items.forEach(function (el) { observer.observe(el); });
  } else {
    items.forEach(show);
  }

  // Al volver a primer plano: rescata cualquier transición congelada.
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { return; }
    items.forEach(function (el) {
      if (el.classList.contains('is-visible') &&
          parseFloat(getComputedStyle(el).opacity) < 0.99) {
        el.style.transition = 'none';
      }
    });
  });

  // Red de seguridad: nada queda oculto pase lo que pase.
  window.setTimeout(function () {
    items.forEach(function (el) {
      if (!el.classList.contains('is-visible')) {
        var r = el.getBoundingClientRect();
        var h = window.innerHeight || document.documentElement.clientHeight;
        if (r.top < h) { show(el); }
      }
    });
  }, 2500);
})();
